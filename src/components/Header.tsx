import type { Component } from 'solid-js'
import { For, Show, createEffect, createSignal, onCleanup } from 'solid-js'
import { A, useLocation } from '@solidjs/router'
import AppWindow from 'lucide-solid/icons/app-window'
import Building2 from 'lucide-solid/icons/building-2'
import Ellipsis from 'lucide-solid/icons/ellipsis'
import ExternalLink from 'lucide-solid/icons/external-link'
import Home from 'lucide-solid/icons/home'
import Menu from 'lucide-solid/icons/menu'
import Users from 'lucide-solid/icons/users'
import X from 'lucide-solid/icons/x'
import Sun from 'lucide-solid/icons/sun'
import Moon from 'lucide-solid/icons/moon'
import KahitSanLogoDark from '~/assets/kahitsan-corp-logo-dark.png?w=132;226;263;452&as=picture'
import KahitSanLogoLight from '~/assets/kahitsan-corp-logo-light.png?w=132;226;263;452&as=picture'
import { Picture } from '~/components/ui'
import Button from '~/components/ui/Button/Button'
import { useTheme } from '~/lib/theme'

interface NavItem {
  label: string
  href: string
  external?: boolean
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Coworking', href: '/coworking' },
  { label: 'Hilinga', href: 'https://www.hilinga.com', external: true },
  { label: 'Community', href: '/community' },
  { label: 'News', href: '/announcements' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const moreItems = navItems.filter((item) => ['News', 'About', 'Contact'].includes(item.label))
const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      type="button"
      onClick={toggleTheme}
      class="ks-theme-toggle"
      aria-label={`Switch to ${theme() === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme() === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span class="ks-theme-toggle-track" data-active={theme() === 'light' ? '' : undefined}>
        <span class="ks-theme-toggle-icon ks-theme-toggle-icon-moon">
          <Moon size={12} />
        </span>
        <span class="ks-theme-toggle-icon ks-theme-toggle-icon-sun">
          <Sun size={12} />
        </span>
      </span>
    </button>
  )
}

const Header: Component = () => {
  const { theme } = useTheme()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = createSignal(false)
  const [menuOrigin, setMenuOrigin] = createSignal<'mobile' | null>(null)
  let tabletMenu: HTMLDetailsElement | undefined
  let mobileMoreButton: HTMLButtonElement | undefined
  let mobileMoreDialog: HTMLDialogElement | undefined
  let mobileMoreCloseButton: HTMLButtonElement | undefined

  const closeMenu = (restoreFocus = false) => {
    const shouldRestoreFocus = restoreFocus && menuOrigin() === 'mobile'
    if (tabletMenu) tabletMenu.open = false
    setMenuOpen(false)
    setMenuOrigin(null)

    if (shouldRestoreFocus) {
      queueMicrotask(() => mobileMoreButton?.focus())
    }
  }
  const toggleMobileMore = () => {
    if (menuOpen()) {
      closeMenu(true)
      return
    }

    setMenuOrigin('mobile')
    setMenuOpen(true)
  }
  const getFocusableItems = () =>
    Array.from(mobileMoreDialog?.querySelectorAll<HTMLElement>(focusableSelector) ?? [])
  const handleMoreKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return

    const focusableItems = getFocusableItems()
    const firstItem = focusableItems[0]
    const lastItem = focusableItems.at(-1)

    if (!firstItem || !lastItem) {
      event.preventDefault()
      mobileMoreDialog?.focus()
      return
    }

    if (event.shiftKey && document.activeElement === firstItem) {
      event.preventDefault()
      lastItem.focus()
    } else if (!event.shiftKey && document.activeElement === lastItem) {
      event.preventDefault()
      firstItem.focus()
    }
  }
  const handleMorePointerDown = (event: PointerEvent & { currentTarget: HTMLDialogElement }) => {
    if (event.target !== event.currentTarget) return

    const bounds = event.currentTarget.getBoundingClientRect()
    const outsideDialog =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom

    if (outsideDialog) closeMenu(true)
  }

  createEffect(() => {
    if (!menuOpen() || menuOrigin() !== 'mobile') return

    queueMicrotask(() => {
      if (mobileMoreDialog?.isConnected && !mobileMoreDialog.open) mobileMoreDialog.showModal()
      mobileMoreCloseButton?.focus()
    })
    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return

      event.preventDefault()
      closeMenu(true)
    }

    document.addEventListener('keydown', handleEscape)
    onCleanup(() => {
      document.removeEventListener('keydown', handleEscape)
      document.documentElement.style.overflow = previousOverflow
    })
  })

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)
  const isNavItemActive = (item: NavItem) =>
    !item.external &&
    (isActive(item.href) ||
      (item.href === '/announcements' && location.pathname.startsWith('/announcement/')))
  const isMoreActive = () =>
    ['/announcements', '/announcement', '/about', '/contact', '/privacy', '/terms'].some((path) =>
      location.pathname.startsWith(path)
    )

  return (
    <>
      <header class="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/70 bg-zinc-950/90 backdrop-blur-lg">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
          <div class="flex items-center justify-between h-16">
            <A
              href="/"
              class="flex items-center hover:opacity-80 transition-opacity"
              onClick={() => closeMenu()}
            >
              <Picture
                src={theme() === 'dark' ? KahitSanLogoDark : KahitSanLogoLight}
                alt="KahitSan Solutions Corp."
                class="h-[58px] w-auto"
                sizes="132px"
                decoding="async"
              />
            </A>

            <div class="ks-desktop-navigation items-center gap-2">
              <nav class="flex items-center gap-1" aria-label="Main navigation">
                <For each={navItems}>
                  {(item) => (
                    <Show
                      when={item.external}
                      fallback={
                        <Button
                          as={A}
                          href={item.href}
                          end={item.href === '/'}
                          intent="secondary"
                          variant="clip1"
                          aria-current={isNavItemActive(item) ? 'page' : undefined}
                          class={`px-3 py-2 ${
                            isNavItemActive(item)
                              ? 'ks-nav-active'
                              : '!bg-transparent !border-transparent'
                          }`}
                        >
                          {item.label}
                        </Button>
                      }
                    >
                      <Button
                        as="a"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        intent="secondary"
                        variant="clip1"
                        icon={() => <ExternalLink size={14} aria-hidden="true" />}
                        iconPosition="right"
                        class="!bg-transparent !border-transparent px-3 py-2"
                      >
                        {item.label}
                        <span class="sr-only"> (opens in a new tab)</span>
                      </Button>
                    </Show>
                  )}
                </For>
              </nav>
              <ThemeToggle />
            </div>

            <div class="ks-tablet-navigation-controls items-center gap-3">
              <ThemeToggle />
              <details ref={(element) => (tabletMenu = element)} class="ks-tablet-menu">
                <summary
                  class="ks-tablet-menu-button h-10 w-10 cursor-pointer items-center justify-center border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white transition-colors"
                  aria-label="Navigation menu"
                >
                  <span class="ks-tablet-menu-open-icon">
                    <Menu size={20} aria-hidden="true" />
                  </span>
                  <span class="ks-tablet-menu-close-icon">
                    <X size={20} aria-hidden="true" />
                  </span>
                </summary>
                <nav
                  id="tablet-navigation"
                  class="ks-tablet-navigation border-t border-zinc-800 bg-zinc-950 px-4 py-4"
                  aria-label="Tablet navigation"
                >
                  <div class="max-w-7xl mx-auto grid grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
                    <For each={navItems}>
                      {(item) => (
                        <Show
                          when={item.external}
                          fallback={
                            <A
                              href={item.href}
                              onClick={() => closeMenu()}
                              aria-current={isNavItemActive(item) ? 'page' : undefined}
                              class="flex min-h-12 items-center justify-between bg-zinc-950 px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors"
                            >
                              {item.label}
                            </A>
                          }
                        >
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex min-h-12 items-center justify-between bg-zinc-950 px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors"
                          >
                            {item.label}
                            <ExternalLink size={14} aria-hidden="true" />
                            <span class="sr-only"> (opens in a new tab)</span>
                          </a>
                        </Show>
                      )}
                    </For>
                  </div>
                </nav>
              </details>
            </div>
          </div>
        </div>
      </header>

      <Show when={menuOpen() && menuOrigin() === 'mobile'}>
        <dialog
          id="mobile-more-dialog"
          ref={(element) => (mobileMoreDialog = element)}
          aria-label="More menu"
          class="ks-mobile-dialog fixed inset-x-3 top-auto m-0 w-auto max-w-none border border-zinc-700 bg-zinc-950/98 p-2 text-zinc-200 shadow-2xl backdrop-blur-xl md:hidden clip-corner-both"
          style={{ bottom: 'calc(4.5rem + env(safe-area-inset-bottom))' }}
          onKeyDown={handleMoreKeyDown}
          onPointerDown={handleMorePointerDown}
          onCancel={(event) => {
            event.preventDefault()
            closeMenu(true)
          }}
        >
          <div class="flex min-h-12 items-center justify-between border-b border-zinc-800 px-4">
            <span class="text-xs font-bold uppercase tracking-widest text-zinc-500">More</span>
            <button
              ref={(element) => (mobileMoreCloseButton = element)}
              type="button"
              class="inline-flex h-11 w-11 items-center justify-center text-zinc-300 hover:text-white"
              aria-label="Close more menu"
              onClick={() => closeMenu(true)}
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <nav id="mobile-more-navigation" aria-label="More navigation">
            <For each={moreItems}>
              {(item) => (
                <A
                  href={item.href}
                  onClick={() => closeMenu()}
                  aria-current={isNavItemActive(item) ? 'page' : undefined}
                  class="flex min-h-12 items-center justify-between border-b border-zinc-800 px-4 py-3 text-sm font-semibold text-zinc-200 last:border-b-0 hover:bg-zinc-900"
                >
                  {item.label}
                  <span class="text-amber-500">Open</span>
                </A>
              )}
            </For>
          </nav>
        </dialog>
      </Show>

      <nav
        class="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-xl md:hidden"
        style={{ 'padding-bottom': 'env(safe-area-inset-bottom)' }}
        aria-label="Mobile navigation"
      >
        <div class="grid h-[4.25rem] grid-cols-5">
          <A
            href="/"
            end
            onClick={() => closeMenu()}
            aria-current={isActive('/') ? 'page' : undefined}
            class={`flex flex-col items-center justify-center gap-1 text-[10px] font-semibold ${isActive('/') ? 'text-amber-400' : 'text-zinc-500'}`}
          >
            <Home size={20} aria-hidden="true" />
            Home
          </A>
          <A
            href="/coworking"
            onClick={() => closeMenu()}
            aria-current={isActive('/coworking') ? 'page' : undefined}
            class={`flex flex-col items-center justify-center gap-1 text-[10px] font-semibold ${isActive('/coworking') ? 'text-amber-400' : 'text-zinc-500'}`}
          >
            <Building2 size={20} aria-hidden="true" />
            Coworking
          </A>
          <a
            href="https://www.hilinga.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Hilinga in a new tab"
            class="flex flex-col items-center justify-center gap-1 text-[10px] font-semibold text-zinc-500"
          >
            <AppWindow size={20} aria-hidden="true" />
            <span class="inline-flex items-center gap-1">
              Hilinga
              <ExternalLink size={10} aria-hidden="true" />
            </span>
            <span class="sr-only"> (opens in a new tab)</span>
          </a>
          <A
            href="/community"
            onClick={() => closeMenu()}
            aria-current={isActive('/community') ? 'page' : undefined}
            class={`flex flex-col items-center justify-center gap-1 text-[10px] font-semibold ${isActive('/community') ? 'text-amber-400' : 'text-zinc-500'}`}
          >
            <Users size={20} aria-hidden="true" />
            Community
          </A>
          <button
            ref={(element) => (mobileMoreButton = element)}
            type="button"
            onClick={toggleMobileMore}
            aria-expanded={menuOpen() && menuOrigin() === 'mobile'}
            aria-controls="mobile-more-dialog"
            aria-haspopup="dialog"
            aria-current={isMoreActive() ? 'page' : undefined}
            class={`flex flex-col items-center justify-center gap-1 text-[10px] font-semibold ${isMoreActive() || (menuOpen() && menuOrigin() === 'mobile') ? 'text-amber-400' : 'text-zinc-500'}`}
          >
            <Ellipsis size={20} aria-hidden="true" />
            More
          </button>
        </div>
      </nav>
    </>
  )
}

export default Header
