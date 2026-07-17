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

const authorSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luis Edward Miranda',
  url: 'https://github.com/llupRisinglll',
  sameAs: [
    'https://github.com/llupRisinglll',
    'https://www.linkedin.com/in/lluprisingll',
    'https://www.instagram.com/lluprisingll/',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Kahitsan Corp',
    url: 'https://www.kahitsan.com',
  },
}

const Footer: Component = () => {
  return (
    <footer class="border-t border-zinc-800/50 py-6 md:py-8 mt-12 md:mt-24">
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
            <p class="text-zinc-400 text-sm">
              Created with <span class="text-amber-500" aria-label="love">♥</span> by{' '}
              <a
                href="https://github.com/llupRisinglll"
                target="_blank"
                rel="noopener noreferrer"
                class="text-zinc-300 hover:text-white underline-offset-4 hover:underline transition-colors"
              >
                Luis Edward Miranda
              </a>{' '}
              of Kahitsan Corp
            </p>
          </div>
        </div>
      </div>
      <script type="application/ld+json">{JSON.stringify(authorSchema)}</script>
    </footer>
  )
}

export default Footer
