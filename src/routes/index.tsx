import { Title, Meta, Link } from "@solidjs/meta";
import type { Component } from 'solid-js'
import { createSignal, onMount, onCleanup, For } from 'solid-js'
import { A } from '@solidjs/router'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Button from '~/components/ui/Button/Button'
import Facebook from 'lucide-solid/icons/facebook'
import Instagram from 'lucide-solid/icons/instagram'
import Music from 'lucide-solid/icons/music'
import entranceArea from '~/assets/images/panganiban/entrance-area.jpg'
import innerArea from '~/assets/images/panganiban/inner-area.jpg'
import callBooth from '~/assets/images/panganiban/call-booth.jpg'
import wholeInnerArea from '~/assets/images/panganiban/whole-inner-area.jpg'
import { communityData } from '~/data/community'

const HomePage: Component = () => {
  // Collect all unique logos from partnerships and sponsorships
  const allLogos = () => {
    const seen = new Set<string>()
    const logos: { icon: string; name: string }[] = []
    for (const p of [...communityData.partnerships, ...communityData.sponsorships]) {
      if (!seen.has(p.name)) {
        seen.add(p.name)
        logos.push({ icon: p.icon, name: p.name })
      }
    }
    return logos
  }

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
          class="relative flex items-center pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
          style={{ 'min-height': '600px' }}
        >
          <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div class="md:col-span-7 z-10">
              <div class="inline-block mb-6 px-4 py-1 bg-amber-500/10 border-l-2 border-amber-500 text-amber-400 text-xs font-bold tracking-widest uppercase">
                Coworking Space in Naga City
              </div>
              <h1 class="text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[0.95] tracking-tight mb-8">
                Productivity starts{' '}
                <span class="gradient-text italic">
                  {typedText()}
                  <span class={showCursor() ? 'opacity-100' : 'opacity-0'}>|</span>
                </span>
              </h1>
              <p class="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                Your comfy study tambayan. A fusion of{' '}
                <span class="text-white">premium workspaces</span> and{' '}
                <span class="text-white">vibrant community</span>.{' '}
                KahitSan man pinanggalingan mo.
              </p>
              <div class="flex flex-wrap gap-4">
                <Button as={A} href="/solutions" intent="primary" size="lg" effect="scan-line">
                  Explore Solutions
                </Button>
                <Button as={A} href="/community" intent="secondary" size="lg">
                  View Community
                </Button>
              </div>
            </div>
            <div class="md:col-span-5 relative">
              <div class="clip-corner-both relative aspect-square overflow-hidden shadow-2xl">
                <img
                  src={entranceArea}
                  alt="KahitSan Coworking Space"
                  class="object-cover w-full h-full opacity-80"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div class="absolute -bottom-6 -left-6 bg-zinc-900/80 backdrop-blur-xl clip-corner p-5 border border-amber-500/10">
                <div class="flex items-center gap-4">
                  <div class="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
                  <div>
                    <div class="text-xs text-amber-400 font-bold tracking-widest uppercase">Status</div>
                    <div class="text-sm font-bold text-white">Panganiban Drive — Open</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute right-0 top-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] -z-10" />
        </section>

        {/* Trusted By */}
        <section class="py-16 border-y border-zinc-800/30">
          <div class="text-center mb-10">
            <span class="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase">Trusted By</span>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-12 md:gap-20 px-6">
            <For each={allLogos()}>
              {(org) => (
                <img
                  src={org.icon}
                  alt={org.name}
                  class="h-24 w-auto object-contain opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                  title={org.name}
                />
              )}
            </For>
          </div>
          <div class="text-center mt-8">
            <A href="/community" class="text-amber-400 hover:text-amber-300 text-sm font-bold tracking-widest uppercase transition-colors">
              View Community &rarr;
            </A>
          </div>
        </section>

        {/* Dual Services Section */}
        <section id="services" class="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our <span class="gradient-text">Services</span>
            </h2>
            <div class="w-20 h-1 bg-amber-500 mx-auto mb-6" />
            <p class="text-zinc-400 max-w-2xl mx-auto text-lg">
              We bridge the gap between premium physical spaces and digital solutions for growth.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coworking Spaces */}
            <A href="/solutions" class="group relative clip-corner-both overflow-hidden min-h-[480px] flex items-end">
              <img
                src={innerArea}
                alt="Coworking Spaces"
                class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div class="relative p-10 w-full">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <div class="h-px w-12 bg-amber-500/30" />
                </div>
                <h3 class="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Coworking Spaces</h3>
                <p class="text-zinc-400 max-w-md mb-6 leading-relaxed">
                  Premium workspaces with high-speed internet, unlimited coffee, and flexible hourly rates starting at ₱79.
                </p>
                <span class="clip-corner border border-amber-500/40 text-amber-400 px-8 py-3 text-xs font-bold uppercase tracking-widest inline-block group-hover:bg-amber-500 group-hover:text-black transition-all">
                  Explore Spaces
                </span>
              </div>
            </A>

            {/* Future Services */}
            <div class="group relative clip-corner-both overflow-hidden min-h-[480px] flex items-end" style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)' }}>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div class="relative p-10 w-full">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <div class="h-px w-12 bg-blue-400/30" />
                </div>
                <h3 class="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Software & Digital Solutions</h3>
                <p class="text-zinc-400 max-w-md mb-6 leading-relaxed">
                  Custom software development, business registration support, event management, and real estate consultation — coming soon.
                </p>
                <a
                  href="https://www.facebook.com/KahitSan"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="clip-corner border border-blue-400/40 text-blue-400 px-8 py-3 text-xs font-bold uppercase tracking-widest inline-block hover:bg-blue-400 hover:text-black transition-all"
                >
                  Stay Updated
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Coworking Spaces Bento Grid */}
        <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Our <span class="gradient-text">Spaces</span>
              </h2>
              <p class="text-zinc-400 max-w-md">
                Curated environments designed for deep work, collaboration, and focused productivity.
              </p>
            </div>
            <Button as={A} href="/solutions" intent="primary" variant="clip1" effect="scan-line">
              View All & Pricing
            </Button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Large Feature — Entrance Area */}
            <div class="md:col-span-2 md:row-span-2 relative clip-corner-both overflow-hidden group">
              <img
                src={entranceArea}
                alt="Entrance Area"
                class="w-full h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <span class="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">From ₱99 / 4hrs</span>
                <h3 class="text-2xl font-bold mb-2">Entrance Area</h3>
                <p class="text-zinc-400 text-sm max-w-xs">Prime location near entrance with relaxed vibe and comfortable seating.</p>
              </div>
            </div>

            {/* Inner Area */}
            <div class="clip-corner bg-zinc-900 p-8 flex flex-col justify-between hover:bg-zinc-800/60 transition-colors border border-amber-500/5">
              <div>
                <span class="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">From ₱149 / 4hrs</span>
                <h3 class="text-xl font-bold mb-2">Inner Area</h3>
                <p class="text-zinc-400 text-sm">Premium workspace with ergonomic chairs and dedicated WiFi.</p>
              </div>
            </div>

            {/* Call Booth */}
            <div class="clip-corner bg-zinc-900 p-8 flex flex-col justify-between hover:bg-zinc-800/60 transition-colors border border-amber-500/5">
              <div>
                <span class="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">From ₱298 / 5hrs</span>
                <h3 class="text-xl font-bold mb-2">Call Booths</h3>
                <p class="text-zinc-400 text-sm">Sound-proof private space for meetings and calls.</p>
              </div>
            </div>

            {/* Whole Inner Area — Wide */}
            <div class="md:col-span-2 clip-corner overflow-hidden relative group min-h-[200px]">
              <img
                src={wholeInnerArea}
                alt="Whole Inner Area"
                class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end">
                <span class="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">From ₱1,800 / 2hrs</span>
                <h3 class="text-xl font-bold">Whole Inner Area</h3>
                <p class="text-zinc-400 text-sm">Exclusive space for workshops and large groups.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Services — Numbered Cards */}
        <section class="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4 italic">
              Future <span class="gradient-text">Services</span>
            </h2>
            <div class="w-20 h-1 bg-amber-500 mx-auto mb-6" />
            <p class="text-zinc-400 max-w-2xl mx-auto">
              Expanding our network to bring you comprehensive business solutions beyond coworking.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <For each={[
              { num: '01', title: 'Business Registration', desc: 'Legal support, company formation, and compliance services to help you launch and scale.' },
              { num: '02', title: 'Event Management', desc: 'End-to-end event coordination for workshops, meetups, and corporate gatherings.' },
              { num: '03', title: 'Custom Software', desc: 'Tailored SaaS solutions, AI integration, and enterprise-grade digital infrastructure.' },
            ]}>
              {(service) => (
                <div class="relative group">
                  <div class="absolute inset-0 bg-amber-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div class="relative clip-corner p-[1px] bg-gradient-to-br from-amber-500/30 to-transparent">
                    <div class="bg-zinc-950 p-10 h-full clip-corner">
                      <span class="text-6xl font-black text-amber-500/10 absolute top-4 right-8">{service.num}</span>
                      <div class="w-12 h-12 bg-amber-500/10 flex items-center justify-center clip-corner mb-8">
                        <div class="w-2 h-2 rounded-full bg-amber-500" />
                      </div>
                      <h3 class="text-2xl font-bold mb-4">{service.title}</h3>
                      <p class="text-zinc-400 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
        </section>

        {/* Connect Section */}
        <section id="connect" class="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div class="clip-corner bg-zinc-900/30 p-10 md:p-16 relative border border-amber-500/10 overflow-hidden">
            <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                  Connect <span class="gradient-text">With Us</span>
                </h2>
                <p class="text-zinc-400 text-lg mb-8">
                  Join the KahitSan community. Follow us for updates, events, and workspace tips.
                </p>
                <div class="flex gap-4 mb-10">
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
                        class="w-12 h-12 flex items-center justify-center clip-corner bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-400 transition-all"
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </a>
                    )}
                  </For>
                </div>
                <div class="flex flex-col gap-3">
                  <div class="flex items-center gap-3 p-3 bg-black/40 clip-corner max-w-xs">
                    <div class="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
                    <span class="text-xs font-bold tracking-widest uppercase">Panganiban Drive — Open</span>
                  </div>
                  <div class="flex items-center gap-3 p-3 bg-black/40 clip-corner max-w-xs">
                    <div class="w-3 h-3 bg-red-400 rounded-full" />
                    <span class="text-xs font-bold tracking-widest uppercase text-zinc-500">Diversion Road — Closed</span>
                  </div>
                </div>
              </div>
              <div class="relative aspect-video clip-corner overflow-hidden border border-amber-500/20">
                <iframe
                  src="https://maps.google.com/maps?q=KahitSan+Coworking+Space,+Panganiban+Drive,+Naga+City,+Philippines&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style="border:0;min-height:280px;"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="KahitSan Coworking Space location"
                />
              </div>
            </div>
            <div class="absolute -bottom-16 -right-16 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none uppercase">KHTS</div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default HomePage
