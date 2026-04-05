import type { Component } from 'solid-js'
import { createSignal, For, Show } from 'solid-js'
import { A } from '@solidjs/router'
import Home from 'lucide-solid/icons/home'
import Users from 'lucide-solid/icons/users'
import Lightbulb from 'lucide-solid/icons/lightbulb'
import Bell from 'lucide-solid/icons/bell'
import Info from 'lucide-solid/icons/info'
import Menu from 'lucide-solid/icons/menu'
import X from 'lucide-solid/icons/x'
import KahitSanLogo from '~/assets/kahitsan-coworking-logo-dark.png'
import Button from '~/components/ui/Button/Button'

interface NavItem {
  icon: any
  label: string
  href: string
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Lightbulb, label: 'Solutions', href: '/solutions' },
  { icon: Users, label: 'Community', href: '/community' },
  { icon: Bell, label: 'Announcements', href: '/announcements' },
  { icon: Info, label: 'About', href: '/about' },
]

const Header: Component = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <header class="fixed top-0 left-0 right-0 z-50 bg-zinc-900/70 backdrop-blur-xl border-b border-zinc-800/50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center justify-between h-16">
            <A href="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={KahitSanLogo} alt="KahitSan" class="h-10 w-auto" />
            </A>

            <nav class="hidden md:flex items-center gap-1">
              <For each={navItems}>
                {(item) => (
                  <Button
                    as={A}
                    href={item.href}
                    end={item.href === '/'}
                    variant="clip1"
                    intent="secondary"
                    icon={item.icon}
                    iconPosition="left"
                    activeClass="!bg-amber-600/20 !border-amber-600/60 !text-amber-400"
                    inactiveClass="!bg-transparent !border-transparent"
                    class="px-4 py-2 transition-all duration-200"
                  >
                    <span class="text-sm font-medium">{item.label}</span>
                  </Button>
                )}
              </For>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen())}
              class="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen() ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <Show when={mobileMenuOpen()}>
        <div
          class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={closeMobileMenu}
        />
      </Show>

      <nav
        class={`fixed top-16 right-0 bottom-0 w-64 z-40 bg-zinc-900/95 backdrop-blur-xl border-l border-zinc-800/50 transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen() ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div class="flex flex-col p-4 gap-2">
          <For each={navItems}>
            {(item) => (
              <Button
                as={A}
                href={item.href}
                end={item.href === '/'}
                variant="clip1"
                intent="secondary"
                icon={item.icon}
                iconPosition="left"
                activeClass="!bg-amber-600/20 !border-amber-600/60 !text-amber-400"
                inactiveClass="!bg-transparent !border-transparent"
                class="w-full justify-start px-4 py-3 transition-all duration-200"
                onClick={closeMobileMenu}
              >
                <span class="text-base font-medium">{item.label}</span>
              </Button>
            )}
          </For>
        </div>
      </nav>
    </>
  )
}

export default Header
