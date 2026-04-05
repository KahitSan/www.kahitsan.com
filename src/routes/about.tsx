import { Title, Meta, Link } from "@solidjs/meta";
import type { Component } from 'solid-js'
import Footer from '~/components/Footer'
import Button from '~/components/ui/Button/Button'
import Facebook from 'lucide-solid/icons/facebook'
import Target from 'lucide-solid/icons/target'
import Eye from 'lucide-solid/icons/eye'
import Users from 'lucide-solid/icons/users'
import MapPin from 'lucide-solid/icons/map-pin'
import Rocket from 'lucide-solid/icons/rocket'
import Heart from 'lucide-solid/icons/heart'

const AboutPage: Component = () => {
  return (
    <>
      <Title>About - KahitSan</Title>
      <Meta name="description" content="KahitSan is a tech-driven coworking space in Naga City, Philippines. Affordable workspaces for students, professionals, and anyone who needs productivity." />
      <Meta property="og:title" content="About - KahitSan" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/about" />
      <Link rel="canonical" href="https://www.kahitsan.com/about" />

      <div class="min-h-screen page-bg transition-colors duration-300">
        <main class="pt-20 pb-12 md:pt-32 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          {/* Hero */}
          <section class="mb-12 md:mb-24">
            <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-4">ABOUT US</div>
            <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white mb-4 md:mb-6 max-w-4xl">
              Productivity, made <span class="gradient-text">affordable</span>.
            </h1>
            <p class="text-zinc-400 text-base md:text-lg max-w-2xl">
              KahitSan is a coworking space built for students, professionals, and anyone who needs a reliable place to focus. We started in Naga City, Philippines — and we're just getting started.
            </p>
          </section>

          {/* Mission & Vision */}
          <section class="mb-16 md:mb-32 relative">
            <div class="absolute -top-10 -left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] -z-10" />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Mission */}
              <div class="relative group">
                <div class="absolute inset-0 bg-amber-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div class="relative clip-corner p-[1px] bg-gradient-to-br from-amber-500/20 to-transparent">
                  <div class="bg-zinc-950 p-6 md:p-10 h-full clip-corner">
                    <div class="flex items-center gap-3 mb-6">
                      <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <Target size={20} class="text-amber-400" />
                      </div>
                      <h2 class="text-xl md:text-2xl font-bold text-white">Our Mission</h2>
                    </div>
                    <p class="text-zinc-400 leading-relaxed">
                      To provide affordable, productive workspaces for students, professionals, and anyone who needs a place to get things done. We're built for the days when there's no internet at home, no electricity, or when you just need a real desk and focus. That's why our spaces are designed like offices — not cafés.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div class="relative group">
                <div class="absolute inset-0 bg-amber-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div class="relative clip-corner p-[1px] bg-gradient-to-br from-amber-500/20 to-transparent">
                  <div class="bg-zinc-950 p-6 md:p-10 h-full clip-corner">
                    <div class="flex items-center gap-3 mb-6">
                      <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <Eye size={20} class="text-amber-400" />
                      </div>
                      <h2 class="text-xl md:text-2xl font-bold text-white">Our Vision</h2>
                    </div>
                    <p class="text-zinc-400 leading-relaxed">
                      To deliver trackable, fair services for the community — powered by technology. We sit at the intersection of real estate and software engineering, and we use our technical skills to build systems that are transparent, efficient, and honest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section class="mb-16 md:mb-32 relative">
            <div class="absolute -bottom-10 -right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] -z-10" />
            <div class="mb-8 md:mb-12">
              <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-2">OUR STORY</div>
              <h2 class="text-3xl md:text-4xl font-bold text-white">From college projects to a corporation.</h2>
            </div>

            <div class="space-y-6">
              {/* Timeline items */}
              <div class="relative clip-corner-both bg-zinc-900/40 border border-zinc-800/30 overflow-hidden group hover:border-amber-500/20 transition-all">
                <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0">
                  <div class="flex items-center justify-center p-4 md:p-8 bg-zinc-900/60 border-b md:border-b-0 md:border-r border-zinc-800/30">
                    <div class="flex items-center gap-2">
                      <Users size={16} class="text-amber-400" />
                      <span class="text-amber-400 text-xs font-bold tracking-widest uppercase">Origins</span>
                    </div>
                  </div>
                  <div class="p-5 md:p-10">
                    <h3 class="text-lg md:text-xl font-bold text-white mb-3">Met in college, built for fun</h3>
                    <p class="text-zinc-400 leading-relaxed">
                      The founding members of KahitSan met in college. We started working on fun projects together — building things, breaking things, and learning as we went. That shared energy eventually became the foundation for something bigger.
                    </p>
                  </div>
                </div>
              </div>

              <div class="relative clip-corner-both bg-zinc-900/40 border border-zinc-800/30 overflow-hidden group hover:border-amber-500/20 transition-all">
                <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0">
                  <div class="flex items-center justify-center p-4 md:p-8 bg-zinc-900/60 border-b md:border-b-0 md:border-r border-zinc-800/30">
                    <div class="flex items-center gap-2">
                      <MapPin size={16} class="text-amber-400" />
                      <span class="text-amber-400 text-xs font-bold tracking-widest uppercase">2025</span>
                    </div>
                  </div>
                  <div class="p-5 md:p-10">
                    <h3 class="text-lg md:text-xl font-bold text-white mb-3">Testing the market in Naga City</h3>
                    <p class="text-zinc-400 leading-relaxed">
                      Before any formal business structure, we were already on the ground — testing the coworking space concept in Naga City, Philippines. We wanted to know if there was real demand for an affordable, reliable workspace. There was.
                    </p>
                  </div>
                </div>
              </div>

              <div class="relative clip-corner-both bg-zinc-900/40 border border-zinc-800/30 overflow-hidden group hover:border-amber-500/20 transition-all">
                <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0">
                  <div class="flex items-center justify-center p-4 md:p-8 bg-zinc-900/60 border-b md:border-b-0 md:border-r border-zinc-800/30">
                    <div class="flex items-center gap-2">
                      <Rocket size={16} class="text-amber-400" />
                      <span class="text-amber-400 text-xs font-bold tracking-widest uppercase">2026</span>
                    </div>
                  </div>
                  <div class="p-5 md:p-10">
                    <h3 class="text-lg md:text-xl font-bold text-white mb-3">KahitSan Corporation</h3>
                    <p class="text-zinc-400 leading-relaxed">
                      In 2026, we formalized the team — registering KahitSan as a corporation in the Philippines and establishing the directors who will continue to manage the company. We're fully bootstrapped, funding everything from our own pockets as we explore different target markets and figure out how to scale on our own terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Built by Tech People */}
          <section class="mb-16 md:mb-32">
            <div class="clip-corner-both bg-zinc-900/30 p-6 md:p-12 lg:p-16 relative border border-zinc-800/30 overflow-hidden">
              <span class="text-6xl font-black text-amber-500/10 absolute top-4 right-8">01</span>
              <div class="relative z-10 max-w-3xl">
                <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-4">BUILT DIFFERENT</div>
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
                  A coworking space run by <span class="gradient-text">tech people</span>.
                </h2>
                <p class="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  The founders and the people driving KahitSan are engineers and builders. We don't just rent desks — we use our technical skills to create value at the intersection of real estate and software. From booking systems to space management, everything we build is designed to make the experience better and more transparent.
                </p>
                <p class="text-zinc-400 text-base md:text-lg leading-relaxed">
                  We know there are customers who are unsatisfied with our current facilities. We hear them. But we stay focused on our goal, and honest about the reality: this is what we can provide right now, with the resources we have. Every peso we invest comes from the team — no outside funding, no shortcuts.
                </p>
              </div>
            </div>
          </section>

          {/* Looking Ahead */}
          <section class="mb-16 md:mb-32 relative">
            <div class="absolute -top-10 left-20 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] -z-10" />
            <div class="mb-8 md:mb-12">
              <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-2">WHAT'S NEXT</div>
              <h2 class="text-3xl md:text-4xl font-bold text-white">Looking ahead.</h2>
            </div>

            <div class="relative clip-corner-both bg-zinc-900/40 border border-zinc-800/30 overflow-hidden group hover:border-amber-500/20 transition-all">
              <div class="p-6 md:p-10 lg:p-12">
                <div class="flex items-start gap-4 mb-6">
                  <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 mt-1">
                    <Heart size={20} class="text-amber-400" />
                  </div>
                  <div>
                    <h3 class="text-lg md:text-xl font-bold text-white mb-3">Expanding our reach</h3>
                    <p class="text-zinc-400 leading-relaxed">
                      We're planning to expand to more places across the Philippines — and eventually, beyond. Our goal remains the same: affordable, reliable spaces where people can be productive. As we grow, we'll keep building the tools and systems that make our services fair and trackable for every community we serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div class="clip-corner-both bg-zinc-900/30 p-6 md:p-12 lg:p-20 relative border border-amber-500/10 overflow-hidden">
              <div class="relative z-10 text-center max-w-2xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                  Want to <span class="gradient-text">work with us</span>?
                </h2>
                <p class="text-zinc-400 text-base md:text-lg mb-6 md:mb-8">
                  Whether you need a desk, want to partner, or just want to say hi — reach out. We'd love to hear from you.
                </p>
                <Button
                  as="a"
                  href="https://www.facebook.com/KahitSan"
                  target="_blank"
                  rel="noopener noreferrer"
                  intent="primary"
                  variant="clip1"
                  size="lg"
                  effect="scan-line"
                  icon={() => <Facebook size={18} />}
                  iconPosition="left"
                >
                  Get in Touch
                </Button>
              </div>
              <div class="absolute -bottom-16 -right-16 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none uppercase">KHTS</div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default AboutPage
