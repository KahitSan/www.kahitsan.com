import type { Component } from 'solid-js'
import { A } from '@solidjs/router'

const Footer: Component = () => {
  return (
    <footer class="border-t border-zinc-800/50 py-8 mt-24">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col items-center gap-6">
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
