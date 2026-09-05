import { Title, Meta, Link } from '@solidjs/meta'
import type { Component } from 'solid-js'
import { A } from '@solidjs/router'
import Footer from '~/components/Footer'
import Button from '~/components/ui/Button/Button'
import Facebook from 'lucide-solid/icons/facebook'

const AboutPage: Component = () => {
  return (
    <>
      <Title>About KahitSan Solutions Corp.</Title>
      <Meta
        name="description"
        content="KahitSan Solutions Corp. is the Naga City company behind KahitSan Coworking and Hilinga. We are a bootstrapped team building practical physical and digital services."
      />
      <Meta property="og:title" content="About KahitSan Solutions Corp." />
      <Meta
        property="og:description"
        content="Meet the Naga City company behind KahitSan Coworking and Hilinga."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/about" />
      <Link rel="canonical" href="https://www.kahitsan.com/about" />

      <div class="min-h-screen page-bg transition-colors duration-300">
        <main class="pt-20 pb-12 md:pt-32 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <section class="ks-grid-surface mb-16 border-y border-zinc-800/60 px-6 py-10 md:mb-24 md:px-10 md:py-14">
            <div class="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
              <h1 class="ks-display-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:col-span-8 lg:text-7xl">
                KahitSan <span class="ks-heading-accent">Solutions Corp.</span>
              </h1>
              <p class="max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl lg:col-span-4 lg:pt-2">
                We are the Naga City company behind KahitSan Coworking and Hilinga. One serves
                people who need a dependable place to work; the other builds software for running a
                business.
              </p>
            </div>
          </section>

          <section class="mb-16 md:mb-28">
            <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
              <header class="space-y-4 lg:col-span-3 lg:pr-3">
                <h2 class="ks-section-title text-3xl font-bold tracking-tight md:text-4xl">
                  What we operate
                </h2>
                <p class="max-w-sm leading-relaxed text-zinc-400">
                  Our work spans a physical service and a software product. Both come from the same
                  practical goal: make everyday business tools and services easier to access and
                  understand.
                </p>
              </header>

              <div class="grid grid-cols-1 border-y border-zinc-800/60 md:grid-cols-2 lg:col-span-9">
                <article class="py-7 md:pr-7 md:py-9 xl:pr-10">
                  <h3 class="ks-record-title mb-3 text-xl font-bold">KahitSan Coworking</h3>
                  <p class="max-w-3xl leading-relaxed text-zinc-400">
                    An affordable workspace in Naga City for students, professionals, and anyone who
                    needs stable internet, electricity, a desk, and room to focus.
                  </p>
                </article>
                <article class="border-t border-zinc-800/60 py-7 md:border-t-0 md:border-l md:pl-7 md:py-9 xl:pl-10">
                  <h3 class="ks-record-title mb-3 text-xl font-bold">Hilinga</h3>
                  <p class="max-w-3xl leading-relaxed text-zinc-400">
                    Business software shaped by the problems we encounter while operating real
                    services. It is our digital product under KahitSan Solutions Corp.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section class="mb-16 md:mb-28">
            <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
              <header class="space-y-4 lg:col-span-3 lg:pr-3">
                <h2 class="ks-section-title text-3xl font-bold tracking-tight md:text-4xl">
                  How we got here
                </h2>
                <p class="max-w-sm leading-relaxed text-zinc-400">
                  KahitSan grew in small, testable steps. The company remains fully bootstrapped by
                  its founding team.
                </p>
              </header>

              <div class="divide-y divide-zinc-800/60 border-y border-zinc-800/60 lg:col-span-9">
                <article class="grid grid-cols-1 gap-3 py-7 sm:grid-cols-12 sm:gap-6 md:py-9">
                  <p class="text-sm font-bold uppercase tracking-widest text-amber-400 sm:col-span-2">
                    College
                  </p>
                  <div class="max-w-3xl sm:col-span-10">
                    <h3 class="ks-record-title mb-3 text-xl font-bold">
                      A team formed through small projects
                    </h3>
                    <p class="leading-relaxed text-zinc-400">
                      The founding members met in college and kept working on software projects
                      together. Those projects established the working relationship that later
                      became KahitSan.
                    </p>
                  </div>
                </article>
                <article class="grid grid-cols-1 gap-3 py-7 sm:grid-cols-12 sm:gap-6 md:py-9">
                  <p class="text-sm font-bold uppercase tracking-widest text-amber-400 sm:col-span-2">
                    2025
                  </p>
                  <div class="max-w-3xl sm:col-span-10">
                    <h3 class="ks-record-title mb-3 text-xl font-bold">
                      Testing coworking in Naga City
                    </h3>
                    <p class="leading-relaxed text-zinc-400">
                      Before forming the corporation, the team tested whether Naga needed a
                      reasonably priced, reliable place to work. KahitSan Coworking began as that
                      local test.
                    </p>
                  </div>
                </article>
                <article class="grid grid-cols-1 gap-3 py-7 sm:grid-cols-12 sm:gap-6 md:py-9">
                  <p class="text-sm font-bold uppercase tracking-widest text-amber-400 sm:col-span-2">
                    2026
                  </p>
                  <div class="max-w-3xl sm:col-span-10">
                    <h3 class="ks-record-title mb-3 text-xl font-bold">
                      Forming KahitSan Solutions Corp.
                    </h3>
                    <p class="leading-relaxed text-zinc-400">
                      The team registered KahitSan Solutions Corp. in the Philippines and formalized
                      its directors. The company is funded from the team's own pockets, without
                      outside investment.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section class="mb-16 md:mb-28">
            <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
              <header class="space-y-4 lg:col-span-3 lg:pr-3">
                <h2 class="ks-section-title text-3xl font-bold tracking-tight md:text-4xl">
                  How we work
                </h2>
                <p class="max-w-sm leading-relaxed text-zinc-400">
                  Running a physical workspace keeps our plans grounded. We see what customers use,
                  what breaks, and what still needs work.
                </p>
              </header>

              <ul class="divide-y divide-zinc-800/60 border-y border-zinc-800/60 lg:col-span-9">
                <li class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-6 md:py-7">
                  <strong class="ks-record-title font-bold sm:col-span-4">
                    Build for real constraints
                  </strong>
                  <span class="leading-relaxed text-zinc-400 sm:col-span-8">
                    Price, reliability, internet access, and power interruptions matter more than
                    polished claims.
                  </span>
                </li>
                <li class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-6 md:py-7">
                  <strong class="ks-record-title font-bold sm:col-span-4">
                    Use technology where it helps
                  </strong>
                  <span class="leading-relaxed text-zinc-400 sm:col-span-8">
                    We build systems to make bookings, records, and day-to-day operations clearer
                    and easier to track.
                  </span>
                </li>
                <li class="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-6 md:py-7">
                  <strong class="ks-record-title font-bold sm:col-span-4">
                    Grow within our means
                  </strong>
                  <span class="leading-relaxed text-zinc-400 sm:col-span-8">
                    Our facilities are still improving. We listen to customers, set honest
                    expectations, and invest what the business can support.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section id="website-credit" class="mb-16 scroll-mt-28 md:mb-28">
            <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
              <header class="space-y-4 lg:col-span-3 lg:pr-3">
                <h2 class="ks-section-title text-3xl font-bold tracking-tight md:text-4xl">
                  Website credit
                </h2>
              </header>

              <div class="border-y border-zinc-800/60 py-7 lg:col-span-9 md:py-9">
                <p class="max-w-3xl leading-relaxed text-zinc-400 md:text-lg">
                  <strong class="font-semibold text-zinc-200">Luis Edward M. Miranda</strong>{' '}
                  designed and developed this website for KahitSan Solutions Corp. His work covers
                  the site's design, frontend development, accessibility, and technical delivery.
                </p>
              </div>
            </div>
          </section>

          <section class="ks-grid-surface border-y border-zinc-800/60 px-6 py-9 md:px-10 md:py-12">
            <div class="grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
              <h2 class="ks-section-title text-3xl font-bold tracking-tight md:text-4xl lg:col-span-4">
                Talk to the team
              </h2>
              <div class="max-w-2xl lg:col-span-8">
                <p class="mb-7 text-base text-zinc-400 md:text-lg">
                  Ask about KahitSan Coworking, Hilinga, or working with KahitSan Solutions Corp.
                </p>
                <div class="flex flex-wrap gap-3">
                  <Button
                    as={A}
                    href="/contact"
                    intent="primary"
                    variant="clip1"
                    effect="scan-line"
                  >
                    Contact KahitSan
                  </Button>
                  <Button
                    as="a"
                    href="https://www.facebook.com/KahitSan"
                    target="_blank"
                    rel="noopener noreferrer"
                    intent="secondary"
                    variant="clip1"
                    icon={() => <Facebook size={18} aria-hidden="true" />}
                    iconPosition="left"
                  >
                    Message on Facebook
                    <span class="sr-only"> (opens in a new tab)</span>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default AboutPage
