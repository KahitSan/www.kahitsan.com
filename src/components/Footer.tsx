import type { Component } from 'solid-js'

const Footer: Component = () => {
  return (
    <footer class="border-t border-zinc-800/50 py-8 mt-24">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col items-center gap-6">
          <div class="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" class="text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#" class="text-zinc-400 hover:text-white transition-colors">Contact</a>
            <a href="#" class="text-zinc-400 hover:text-white transition-colors">Terms</a>
            <a href="#" class="text-zinc-400 hover:text-white transition-colors">Privacy</a>
          </div>
          <div class="text-center space-y-2">
            <p class="text-zinc-400 text-sm">© {new Date().getFullYear()} KahitSan Solutions Corp</p>
            <p class="text-zinc-500 text-xs">
              *Pantry access available when no events in the inner area
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
