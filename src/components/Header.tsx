import type { Component } from 'solid-js'
import { For } from 'solid-js'
import { A } from '@solidjs/router'
import Home from 'lucide-solid/icons/home'
import Users from 'lucide-solid/icons/users'
import Lightbulb from 'lucide-solid/icons/lightbulb'
import Bell from 'lucide-solid/icons/bell'
import Info from 'lucide-solid/icons/info'
import Sun from 'lucide-solid/icons/sun'
import Moon from 'lucide-solid/icons/moon'
import KahitSanLogoDark from '~/assets/kahitsan-corp-logo-dark.png'
import KahitSanLogoLight from '~/assets/kahitsan-corp-logo-light.png'
import Button from '~/components/ui/Button/Button'
import { useTheme } from '~/lib/theme'

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

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      class="ks-theme-toggle"
      aria-label={`Switch to ${theme() === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme() === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span class="ks-theme-toggle-track" data-active={theme() === 'light' ? '' : undefined}>
        <span class="ks-theme-toggle-icon ks-theme-toggle-icon-moon"><Moon size={12} /></span>
        <span class="ks-theme-toggle-icon ks-theme-toggle-icon-sun"><Sun size={12} /></span>
      </span>
    </button>
  )
}

const Header: Component = () => {
  const { theme } = useTheme()

  return (
    <>
      {/* Top header bar */}
      <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 bg-zinc-900/70 border-zinc-800/50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center justify-between h-16">
            <A href="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img
                src={theme() === 'dark' ? KahitSanLogoDark : KahitSanLogoLight}
                alt="KahitSan"
                class="h-[65px] w-auto"
              />
            </A>

            {/* Desktop: full nav + toggle */}
            <div class="hidden lg:flex items-center gap-1">
              <nav class="flex items-center gap-1">
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
                      activeClass="ks-nav-active"
                      inactiveClass="!bg-transparent !border-transparent"
                      class="px-4 py-2 transition-all duration-200"
                    >
                      <span class="text-sm font-medium">{item.label}</span>
                    </Button>
                  )}
                </For>
              </nav>
              <div class="ml-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Tablet/mobile: just the toggle */}
            <div class="flex items-center lg:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Bottom nav bar — tablet: full buttons, mobile: compact icons */}
      <nav class="fixed bottom-0 left-0 right-0 z-50 lg:hidden backdrop-blur-xl border-t transition-colors duration-300 bg-zinc-900/80 border-zinc-800/50">
        {/* Tablet (md–lg): full button-style nav */}
        <div class="hidden md:flex items-center justify-center gap-1 h-14 px-4">
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
                activeClass="ks-nav-active"
                inactiveClass="!bg-transparent !border-transparent"
                class="px-4 py-2 transition-all duration-200"
              >
                <span class="text-sm font-medium">{item.label}</span>
              </Button>
            )}
          </For>
        </div>
        {/* Mobile (< md): compact icon nav */}
        <div class="flex md:hidden items-center justify-around h-14 px-1">
          <For each={navItems}>
            {(item) => (
              <A
                href={item.href}
                end={item.href === '/'}
                activeClass="ks-bottom-nav-active"
                inactiveClass="ks-bottom-nav-inactive"
                class="flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors duration-200"
              >
                <item.icon size={20} />
                <span class="text-[10px] font-medium leading-tight truncate max-w-[60px] text-center">{item.label}</span>
              </A>
            )}
          </For>
        </div>
      </nav>
    </>
  )
}

export default Header
