import type { Component } from 'solid-js'
import { For } from 'solid-js'
import { A } from '@solidjs/router'
import ExternalLink from 'lucide-solid/icons/external-link'
import Facebook from 'lucide-solid/icons/facebook'
import Instagram from 'lucide-solid/icons/instagram'
import TikTokIcon from '~/components/icons/TikTokIcon'

const socialLinks = [
  { href: 'https://www.facebook.com/KahitSan', icon: Facebook, label: 'Facebook' },
  { href: 'https://www.instagram.com/kahitsan_com/', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.tiktok.com/@kahitsan21', icon: TikTokIcon, label: 'TikTok' },
]

const Footer: Component = () => {
  return (
    <footer class="border-t border-zinc-800/70 py-12 md:py-16 mt-12 md:mt-24">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div class="md:col-span-5">
            <p class="text-white font-bold text-lg mb-3">KahitSan Solutions Corp.</p>
            <p class="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Naga City company behind KahitSan Coworking and Hilinga.
            </p>
            <div class="flex gap-3 mt-6">
              <For each={socialLinks}>
                {(social) => (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-10 h-10 flex items-center justify-center border border-zinc-800 hover:border-amber-500 hover:text-amber-400 text-zinc-400 transition-colors"
                    aria-label={`${social.label} (opens in a new tab)`}
                  >
                    <social.icon size={18} />
                  </a>
                )}
              </For>
            </div>
          </div>
          <div class="md:col-span-2">
            <h2 class="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
              Offerings
            </h2>
            <div class="flex flex-col gap-3 text-sm">
              <A href="/coworking" class="text-zinc-300 hover:text-white transition-colors">
                Coworking
              </A>
              <a
                href="https://www.hilinga.com"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
              >
                Hilinga <ExternalLink size={13} aria-hidden="true" />
                <span class="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <div class="md:col-span-2">
            <h2 class="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Company</h2>
            <div class="flex flex-col gap-3 text-sm">
              <A href="/about" class="text-zinc-300 hover:text-white transition-colors">
                About
              </A>
              <A href="/announcements" class="text-zinc-300 hover:text-white transition-colors">
                News
              </A>
              <A href="/contact" class="text-zinc-300 hover:text-white transition-colors">
                Contact
              </A>
            </div>
          </div>
          <div class="md:col-span-3">
            <h2 class="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Legal</h2>
            <div class="flex flex-col gap-3 text-sm">
              <A href="/privacy" class="text-zinc-300 hover:text-white transition-colors">
                Privacy
              </A>
              <A href="/terms" class="text-zinc-300 hover:text-white transition-colors">
                Terms
              </A>
            </div>
          </div>
        </div>
        <p class="mt-12 pt-6 border-t border-zinc-800/70 text-xs text-zinc-500">
          © {new Date().getFullYear()} KahitSan Solutions Corp.
        </p>
      </div>
    </footer>
  )
}

export default Footer
