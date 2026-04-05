import { Title, Meta, Link } from "@solidjs/meta";
import type { Component } from 'solid-js'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Button from '~/components/ui/Button/Button'
import Mail from 'lucide-solid/icons/mail'
import Facebook from 'lucide-solid/icons/facebook'
import MapPin from 'lucide-solid/icons/map-pin'
import Clock from 'lucide-solid/icons/clock'
import Navigation from 'lucide-solid/icons/navigation'
import ArrowRight from 'lucide-solid/icons/arrow-right'

const ContactPage: Component = () => {
  return (
    <>
      <Title>Contact Us - KahitSan</Title>
      <Meta name="description" content="Get in touch with KahitSan. Email us, message us on social media, or visit our coworking space on Panganiban Drive, Naga City." />
      <Meta property="og:title" content="Contact Us - KahitSan" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/contact" />
      <Link rel="canonical" href="https://www.kahitsan.com/contact" />

      <div class="min-h-screen page-bg transition-colors duration-300">
        <Header />

        <main class="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          {/* Two-column split: Info left, Map right */}
          <section class="mb-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 clip-corner-both overflow-hidden border border-zinc-800/30">
              {/* Left — Contact info */}
              <div class="bg-zinc-950 p-10 md:p-14 flex flex-col justify-between">
                <div>
                  <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-4">CONTACT US</div>
                  <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    Let's <span class="gradient-text">talk</span>.
                  </h1>
                  <p class="text-zinc-400 text-base mb-12 max-w-md">
                    Have a question, want to book a space, or just want to say hi? Here's how to reach us.
                  </p>

                  {/* Contact rows */}
                  <div class="space-y-8">
                    {/* Email */}
                    <a href="mailto:info@kahitsan.com" class="flex items-start gap-4 group/row">
                      <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 group-hover/row:bg-amber-500/20 transition-colors">
                        <Mail size={18} class="text-amber-400" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <h2 class="text-white font-bold text-sm mb-0.5">Email</h2>
                        <p class="text-zinc-400 text-sm group-hover/row:text-amber-400 transition-colors">info@kahitsan.com</p>
                      </div>
                      <ArrowRight size={16} class="text-zinc-600 mt-2.5 group-hover/row:text-amber-400 group-hover/row:translate-x-1 transition-all shrink-0" />
                    </a>

                    {/* Facebook */}
                    <a href="https://www.facebook.com/KahitSan" target="_blank" rel="noopener noreferrer" class="flex items-start gap-4 group/row">
                      <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 group-hover/row:bg-amber-500/20 transition-colors">
                        <Facebook size={18} class="text-amber-400" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <h2 class="text-white font-bold text-sm mb-0.5">Facebook</h2>
                        <p class="text-zinc-400 text-sm group-hover/row:text-amber-400 transition-colors">Message us or follow for updates</p>
                      </div>
                      <ArrowRight size={16} class="text-zinc-600 mt-2.5 group-hover/row:text-amber-400 group-hover/row:translate-x-1 transition-all shrink-0" />
                    </a>

                    <div class="h-px bg-zinc-800/50" />

                    {/* Address */}
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                        <MapPin size={18} class="text-amber-400" />
                      </div>
                      <div>
                        <h2 class="text-white font-bold text-sm mb-0.5">Visit us</h2>
                        <p class="text-zinc-400 text-sm leading-relaxed">
                          Panganiban Drive, Naga City<br />
                          Camarines Sur, Philippines
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                        <Clock size={18} class="text-amber-400" />
                      </div>
                      <div>
                        <h2 class="text-white font-bold text-sm mb-0.5">Hours</h2>
                        <p class="text-zinc-400 text-sm">Open daily &middot; Walk-ins welcome</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-12 flex flex-wrap gap-3">
                  <Button
                    as="a"
                    href="https://share.google/TFC9YSJ3R8ExKdnUH"
                    target="_blank"
                    rel="noopener noreferrer"
                    intent="primary"
                    variant="clip1"
                    effect="scan-line"
                    icon={() => <Navigation size={16} />}
                    iconPosition="left"
                  >
                    Get Directions
                  </Button>
                  <Button
                    as="a"
                    href="https://www.facebook.com/KahitSan"
                    target="_blank"
                    rel="noopener noreferrer"
                    intent="secondary"
                    variant="clip2"
                    icon={() => <Facebook size={16} />}
                    iconPosition="left"
                    noPulse
                    noGlow
                  >
                    Message Us
                  </Button>
                </div>
              </div>

              {/* Right — Map */}
              <div class="bg-zinc-900/40 min-h-[480px] lg:min-h-0">
                <iframe
                  src="https://maps.google.com/maps?q=KahitSan+Coworking+Space,+Panganiban+Drive,+Naga+City,+Philippines&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style="border:0; min-height:480px;"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="KahitSan Coworking Space location"
                />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default ContactPage
