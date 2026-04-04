import { Title, Meta, Link } from "@solidjs/meta";
import type { Component } from 'solid-js'
import { createSignal, onMount, onCleanup, For } from 'solid-js'
import { A } from '@solidjs/router'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Button from '~/components/ui/Button/Button'
import Coffee from 'lucide-solid/icons/coffee'
import Building from 'lucide-solid/icons/building'
import Facebook from 'lucide-solid/icons/facebook'
import Instagram from 'lucide-solid/icons/instagram'
import Music from 'lucide-solid/icons/music'

const HomePage: Component = () => {
  const [typedText, setTypedText] = createSignal('')
  const words = ['anywhere', 'KahitSan']
  const [showCursor, setShowCursor] = createSignal(true)

  onMount(() => {
    let currentIndex = 0
    let isDeleting = false
    let typingSpeed = 150
    let wordIndex = 0
    let timeoutId: ReturnType<typeof setTimeout>

    const typeWriter = () => {
      const currentWord = words[wordIndex]
      if (!isDeleting && currentIndex < currentWord.length) {
        setTypedText(currentWord.substring(0, currentIndex + 1))
        currentIndex++
        typingSpeed = 150
      } else if (isDeleting && currentIndex > 0) {
        setTypedText(currentWord.substring(0, currentIndex - 1))
        currentIndex--
        typingSpeed = 100
      } else if (currentIndex === currentWord.length && !isDeleting) {
        typingSpeed = 2000
        isDeleting = true
      } else if (currentIndex === 0 && isDeleting) {
        isDeleting = false
        wordIndex = (wordIndex + 1) % words.length
        typingSpeed = 500
      }
      timeoutId = setTimeout(typeWriter, typingSpeed)
    }

    typeWriter()

    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 500)

    onCleanup(() => {
      clearTimeout(timeoutId)
      clearInterval(cursorInterval)
    })
  })

  return (
    <>
      <Title>KahitSan - Coworking Space in Naga City</Title>
      <Meta name="description" content="Your productive workspace in the heart of Naga City. Premium coworking spaces with flexible memberships, high-speed internet, and a vibrant community." />
      <Meta name="keywords" content="coworking space, naga city, workspace, office rental, kahitsan, shared office" />
      <Meta property="og:title" content="KahitSan - Coworking Space in Naga City" />
      <Meta property="og:description" content="Your productive workspace in the heart of Naga City." />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com" />
      <Link rel="canonical" href="https://www.kahitsan.com" />

      <div class="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
        <Header />

        {/* Hero Section */}
        <section
          id="hero"
          class="relative flex items-center justify-center px-4"
          style={{ 'min-height': '600px', 'padding-top': '4rem' }}
        >
          <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              class="absolute inset-0 opacity-10"
              style="background:radial-gradient(ellipse at center, rgba(201, 169, 97, 0.4) 0%, rgba(201, 169, 97, 0.1) 40%, transparent 70%)"
            />
            <div
              class="absolute top-1/4 left-1/4 w-32 h-32 opacity-5 rotate-45"
              style="background:linear-gradient(45deg, #C9A961, transparent);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
            />
            <div
              class="absolute bottom-1/4 right-1/4 w-24 h-24 opacity-5 -rotate-12"
              style="background:linear-gradient(135deg, #E5D4A1, transparent);clip-path:polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
            />
          </div>

          <div class="relative z-10 max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Productivity starts{' '}
              <span class="gradient-text">
                {typedText()}
                <span class={showCursor() ? 'opacity-100' : 'opacity-0'}>|</span>
              </span>
            </h1>
            <p class="text-lg md:text-xl text-zinc-400 mb-6">
              Your comfy study tambayan. KahitSan man pinanggalingan mo.
            </p>
            <div class="flex flex-wrap justify-center gap-3">
              <Button as={A} href="/solutions" intent="primary" size="lg">
                Explore Solutions
              </Button>
              <Button as={A} href="/community" intent="secondary" size="lg">
                View Community
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          class="relative py-24"
          style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #252525 100%)' }}
        >
          <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              class="absolute top-0 right-0 w-64 h-64 opacity-5"
              style="background:radial-gradient(circle, rgba(201, 169, 97, 0.3) 0%, transparent 70%)"
            />
          </div>

          <div class="relative z-10 max-w-6xl mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span class="gradient-text">Services</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Coworking Spaces */}
              <div
                class="backdrop-blur-sm border border-zinc-800/50 clip-corner p-8 relative overflow-hidden group hover:border-zinc-700/50 hover:scale-[1.02] transition-all"
                style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)' }}
              >
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div class="relative z-10">
                  <div class="flex items-center justify-center w-20 h-20">
                    <Coffee size={40} class="text-amber-400" />
                  </div>
                  <div class="flex items-center justify-between mb-6">
                    <h3 class="text-2xl font-bold text-white">Coworking Spaces</h3>
                    <div class="inline-flex flex-col items-end gap-2">
                      <div class="flex items-baseline gap-2">
                        <span class="text-sm text-zinc-400">starts at</span>
                        <span class="text-3xl font-bold text-amber-500">₱79</span>
                        <span class="text-sm text-zinc-400">for first 4 hours</span>
                      </div>
                      <div class="flex items-center gap-3 text-xs">
                        <div class="flex items-center gap-1">
                          <span class="text-amber-400 font-medium">₱24 / ₱30</span>
                          <span class="text-zinc-400"> only per hour extension</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="text-base text-zinc-400 mb-6 leading-relaxed">
                    Premium workspace solutions designed for productivity and comfort
                  </p>
                  <div class="space-y-4 mb-8">
                    <For each={[
                      { icon: '🏢', text: '4 areas: Entrance, Inner, Call Booth & Whole Inner' },
                      { icon: '💰', text: 'Partner discounts available (20% off)' },
                      { icon: '📶', text: 'High-speed fiber internet connection' },
                      { icon: '☕', text: 'Free pantry access with coffee & water' },
                      { icon: '⏰', text: 'Flexible 4-hour, 8-hour & extension rates' },
                    ]}>
                      {(feature) => (
                        <div class="flex items-center gap-3">
                          <span class="text-2xl flex-shrink-0">{feature.icon}</span>
                          <span class="text-zinc-300 text-sm">{feature.text}</span>
                        </div>
                      )}
                    </For>
                  </div>
                  <Button as={A} href="/solutions" intent="primary" size="lg" class="w-full">
                    View Solutions & Pricing
                  </Button>
                </div>
              </div>

              {/* Future Services */}
              <div
                class="backdrop-blur-sm border border-zinc-800/50 clip-corner p-8 relative overflow-hidden group hover:border-zinc-700/50 hover:scale-[1.02] transition-all"
                style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)' }}
              >
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div class="relative z-10">
                  <div class="flex items-center justify-center w-20 h-20">
                    <Building size={40} class="text-blue-400" />
                  </div>
                  <div class="flex items-center justify-between mb-6">
                    <h3 class="text-2xl font-bold text-white">Future Services</h3>
                    <div class="inline-flex items-baseline gap-2">
                      <span class="text-xs font-medium text-zinc-400 uppercase tracking-wide">Coming</span>
                      <span class="text-xl font-bold text-blue-400">Soon</span>
                    </div>
                  </div>
                  <p class="text-base text-zinc-400 mb-6 leading-relaxed">
                    Expanding our network to bring you more comprehensive business solutions
                  </p>
                  <div class="space-y-4 mb-8">
                    <For each={[
                      { icon: '📋', text: 'Business registration & legal support' },
                      { icon: '🎉', text: 'Event management & coordination' },
                      { icon: '💻', text: 'Custom software development' },
                      { icon: '🏢', text: 'Real estate consultation services' },
                    ]}>
                      {(feature) => (
                        <div class="flex items-center gap-3">
                          <span class="text-2xl flex-shrink-0">{feature.icon}</span>
                          <span class="text-zinc-300 text-sm">{feature.text}</span>
                        </div>
                      )}
                    </For>
                  </div>
                  <Button
                    as="a"
                    href="https://www.facebook.com/KahitSan"
                    target="_blank"
                    rel="noopener noreferrer"
                    intent="secondary"
                    size="lg"
                    class="w-full"
                  >
                    Stay Updated on Facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section
          id="connect"
          class="relative py-24"
          style={{ background: 'linear-gradient(135deg, #151515 0%, #1f1f1f 100%)' }}
        >
          <div class="relative z-10 max-w-4xl mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
              Connect <span class="gradient-text">With Us</span>
            </h2>
            <div class="flex justify-center gap-8">
              <For each={[
                { href: 'https://www.facebook.com/KahitSan', icon: Facebook, label: 'Facebook' },
                { href: 'https://www.instagram.com/kahitsan_com/', icon: Instagram, label: 'Instagram' },
                { href: 'https://www.tiktok.com/@kahitsan21', icon: Music, label: 'TikTok' },
              ]}>
                {(social) => (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center w-20 h-20 rounded-full bg-zinc-900/30 border border-zinc-800/50 hover:scale-110 hover:bg-zinc-900/50 hover:border-zinc-700/50 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={32} class="text-zinc-400" />
                  </a>
                )}
              </For>
            </div>
            <div class="mt-12 text-center">
              <p class="text-zinc-400 mb-2">Visit our locations:</p>
              <div class="flex justify-center gap-6 text-sm">
                <div class="flex items-center gap-2">
                  <span class="text-emerald-400">●</span>
                  <span>Panganiban Drive - Open</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-red-400">●</span>
                  <span class="text-zinc-500">Diversion Road - Closed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default HomePage
