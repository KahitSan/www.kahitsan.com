import type { Component } from 'solid-js'
import { A } from '@solidjs/router'
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
    <footer class="border-t border-zinc-800/50 py-8 mt-24">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col items-center gap-6">
          <div class="flex gap-4">
            {socialLinks.map((social) => (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-400 transition-all"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
          <div class="flex flex-wrap justify-center gap-6 text-sm">
            <A href="/about" class="text-zinc-400 hover:text-white transition-colors">About</A>
            <A href="/contact" class="text-zinc-400 hover:text-white transition-colors">Contact</A>
            <A href="/terms" class="text-zinc-400 hover:text-white transition-colors">Terms</A>
            <A href="/privacy" class="text-zinc-400 hover:text-white transition-colors">Privacy</A>
          </div>
          <div class="text-center">
            <p class="text-zinc-400 text-sm">© {new Date().getFullYear()} KahitSan Solutions Corp</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
