import type { Component } from 'solid-js'
import { createMemo, createSignal, For, onCleanup, onMount, Show } from 'solid-js'
import ChevronDown from 'lucide-solid/icons/chevron-down'

type DropdownIcon = Component<{ size?: number; class?: string }>

export interface DropdownItemProps {
  id: string
  label: string
  description?: string
  value?: unknown
  icon?: DropdownIcon
  badge?: string
  disabled?: boolean
  status?: 'open' | 'closed' | 'neutral'
}

export interface DropdownProps {
  items: DropdownItemProps[]
  value?: string
  placeholder?: string
  icon?: DropdownIcon
  minWidth?: string
  disabled?: boolean
  onSelect?: (item: DropdownItemProps) => void
  class?: string
}

const Dropdown: Component<DropdownProps> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false)
  const [selectedId, setSelectedId] = createSignal<string>()
  const currentSelection = createMemo(
    () => props.items.find((item) => item.id === (selectedId() ?? props.value)) ?? props.items[0]
  )

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('[data-dropdown-container]')) setIsOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    onCleanup(() => document.removeEventListener('click', handleClickOutside))
  })

  const handleSelect = (item: DropdownItemProps) => {
    if (item.disabled) return
    setSelectedId(item.id)
    setIsOpen(false)
    props.onSelect?.(item)
  }

  const getStatusColor = (status?: DropdownItemProps['status']) =>
    status === 'open' ? '#10B981' : '#6B7280'

  return (
    <div class={`relative inline-block ${props.class || ''}`} data-dropdown-container>
      <button
        type="button"
        onClick={() => !props.disabled && setIsOpen(!isOpen())}
        disabled={props.disabled}
        class={`flex items-center gap-3 px-4 py-3 bg-zinc-900/50 border border-zinc-800/50 rounded-lg hover:bg-zinc-900/70 transition-all backdrop-blur-sm select-none ${props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        style={{ 'min-width': props.minWidth || '280px' }}
      >
        <Show when={props.icon} keyed>
          {(Icon) => <Icon size={18} class="text-amber-500" />}
        </Show>
        <div class="flex-1 text-left">
          <div class="font-semibold text-white">
            {currentSelection()?.label || props.placeholder || 'Select an option'}
          </div>
          <Show when={currentSelection()?.description} keyed>
            {(description) => <div class="text-xs text-zinc-400">{description}</div>}
          </Show>
        </div>
        <ChevronDown
          size={18}
          class={`text-zinc-400 transition-transform ${isOpen() ? 'rotate-180' : ''}`}
        />
      </button>

      <Show when={isOpen()}>
        <div class="absolute top-full left-0 mt-2 w-full bg-zinc-900/95 border border-zinc-800/50 rounded-lg backdrop-blur-xl z-50 shadow-xl select-none">
          <For each={props.items}>
            {(item) => (
              <button
                type="button"
                onClick={() => handleSelect(item)}
                disabled={item.disabled}
                class={`w-full px-4 py-3 flex items-center gap-3 hover:bg-zinc-800/50 transition-all first:rounded-t-lg last:rounded-b-lg select-none ${currentSelection()?.id === item.id ? 'bg-zinc-800/30' : ''} ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div class="flex items-center gap-2 flex-shrink-0">
                  <Show
                    when={item.icon}
                    keyed
                    fallback={
                      <Show when={item.status}>
                        <div
                          class="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: getStatusColor(item.status) }}
                        />
                      </Show>
                    }
                  >
                    {(Icon) => <Icon size={16} class="text-amber-500" />}
                  </Show>
                </div>
                <div class="flex-1 text-left min-w-0">
                  <div class="font-medium text-white flex items-center gap-2">
                    {item.label}
                    <Show when={item.badge} keyed>
                      {(badge) => (
                        <span class="px-2 py-0.5 text-xs font-medium bg-zinc-700/50 text-zinc-400 rounded flex-shrink-0">
                          {badge}
                        </span>
                      )}
                    </Show>
                  </div>
                  <Show when={item.description} keyed>
                    {(description) => (
                      <div class="text-xs text-zinc-400 truncate">{description}</div>
                    )}
                  </Show>
                </div>
              </button>
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}

export default Dropdown
