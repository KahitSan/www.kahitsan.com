import { Title, Meta, Link } from "@solidjs/meta";
import { For } from 'solid-js'
import type { Component } from 'solid-js'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Construction from 'lucide-solid/icons/construction'

const AccountPage: Component = () => {
  return (
    <>
      <Title>Account - KahitSan</Title>
      <Meta name="description" content="Manage your KahitSan account, view your membership, and access member-only features." />
      <Meta property="og:title" content="Account - KahitSan" />
      <Meta property="og:url" content="https://www.kahitsan.com/account" />
      <Link rel="canonical" href="https://www.kahitsan.com/account" />

      <div class="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
        <Header />
        <div class="min-h-screen flex items-center justify-center px-4">
          <div class="max-w-2xl mx-auto text-center">
            <div class="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 clip-corner p-12 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full animate-pulse" />
              <div class="relative z-10">
                <div class="flex justify-center mb-6">
                  <div class="p-6 rounded-full bg-amber-500/20 border border-amber-500/30">
                    <Construction size={48} class="text-amber-400" />
                  </div>
                </div>
                <h1 class="text-4xl md:text-5xl font-bold mb-4">
                  Coming <span class="text-amber-500">Soon</span>
                </h1>
                <p class="text-xl text-zinc-400 mb-8">
                  User accounts and authentication are currently under development.
                </p>
                <div class="space-y-4 text-left">
                  <For each={[
                    { title: 'User Registration & Login', desc: 'Create accounts and manage your bookings' },
                    { title: 'Booking Management', desc: 'View and manage your coworking space reservations' },
                    { title: 'Usage History', desc: 'Track your workspace usage and billing' },
                  ]}>
                    {(item) => (
                      <div class="flex items-start gap-3">
                        <span class="text-amber-500 mt-1">→</span>
                        <div>
                          <p class="text-white font-medium">{item.title}</p>
                          <p class="text-sm text-zinc-400">{item.desc}</p>
                        </div>
                      </div>
                    )}
                  </For>
                </div>
                <div class="mt-8 pt-8 border-t border-zinc-800">
                  <p class="text-sm text-zinc-500">
                    For now, please contact us directly through our social media channels or visit
                    our location for bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AccountPage
