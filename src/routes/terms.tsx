import { Title, Meta, Link } from '@solidjs/meta'
import Footer from '~/components/Footer'

// Legal review is appropriate if these terms or covered services materially change.
export default function TermsPage() {
  return (
    <>
      <Title>Terms of Service - KahitSan Solutions Corp.</Title>
      <Meta
        name="description"
        content="Website and KahitSan Coworking terms of KahitSan Solutions Corp."
      />
      <Meta property="og:title" content="Terms of Service - KahitSan Solutions Corp." />
      <Meta
        property="og:description"
        content="Website and KahitSan Coworking terms of KahitSan Solutions Corp."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/terms" />
      <Link rel="canonical" href="https://www.kahitsan.com/terms" />

      <div class="min-h-screen page-bg transition-colors duration-300">
        <main class="mx-auto max-w-7xl px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-24">
          <header class="ks-grid-surface mb-12 border-y border-zinc-800/60 px-6 py-8 md:mb-16 md:px-10 md:py-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
              <div class="lg:col-span-8 lg:col-start-3">
                <div class="mb-4 text-xs font-bold tracking-[0.3em] text-amber-400">LEGAL</div>
                <h1 class="ks-display-heading mb-4 text-4xl font-bold tracking-tight md:text-6xl">
                  Terms of <span class="ks-heading-accent">Service</span>
                </h1>
                <p class="text-sm text-zinc-500">Last updated: September 4, 2026</p>
              </div>
            </div>
          </header>

          <div class="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
            <article class="space-y-12 leading-relaxed text-zinc-300 lg:col-span-8 lg:col-start-3">
              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">Scope</h2>
                <p class="mb-4">
                  These terms are issued by KahitSan Solutions Corp. ("KahitSan," "we," "us," or
                  "our"). The Website Terms below apply to kahitsan.com. The KahitSan Coworking
                  Terms apply when you visit or use KahitSan Coworking spaces and services.
                </p>
                <p>
                  Hilinga has separate terms and is not governed by this document. For Hilinga,
                  please read{' '}
                  <a
                    href="https://www.hilinga.com/terms"
                    class="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-4"
                  >
                    hilinga.com/terms
                  </a>
                  .
                </p>
              </section>

              <section class="border-t border-zinc-800/60 pt-10">
                <div class="text-xs font-bold tracking-[0.2em] text-amber-400 mb-3">PART I</div>
                <h2 class="ks-section-title mb-4 text-2xl font-bold">Website Terms</h2>
                <p>
                  You may use kahitsan.com to learn about KahitSan Solutions Corp., KahitSan
                  Coworking, and our published updates, and to contact us. Do not use the site for
                  unlawful activity, attempt to interfere with its operation, or attempt to access
                  systems or data without authorization.
                </p>
              </section>

              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">Website Information</h2>
                <p>
                  We may correct or update website content, including descriptions, availability,
                  and pricing. Coworking rates displayed online should be read together with any
                  current information provided at the front desk. Links to third-party websites are
                  provided for convenience; their content and services are governed by their own
                  terms and policies.
                </p>
              </section>

              <section class="border-t border-zinc-800/60 pt-10">
                <div class="text-xs font-bold tracking-[0.2em] text-amber-400 mb-3">PART II</div>
                <h2 class="ks-section-title mb-4 text-2xl font-bold">KahitSan Coworking Terms</h2>
                <p>
                  This Part II applies only to visits, sessions, memberships, bookings, and other
                  services provided through KahitSan Coworking.
                </p>
              </section>

              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">Check-In</h2>
                <p class="mb-3">
                  <strong class="text-white">New clients:</strong> At first check-in, staff may ask
                  for your full name, contact number, email address, and optionally a social media
                  account so the coworking service can be provided and staff can contact you when
                  needed.
                </p>
                <p>
                  <strong class="text-white">Returning clients:</strong> Staff may ask for your name
                  and the service or session you want to use.
                </p>
              </section>

              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">Space Rules</h2>
                <p class="mb-4">KahitSan Coworking is a shared environment. While using it:</p>
                <ul class="list-disc space-y-3 pl-5 marker:text-amber-400">
                  <li>
                    <strong class="text-white">Keep noise levels down.</strong> Use headphones for
                    calls and media, and use available call booths for calls when appropriate.
                  </li>
                  <li>
                    <strong class="text-white">Treat clients and staff respectfully.</strong>
                    Harassment, discrimination, threats, and disruptive behavior are not allowed.
                  </li>
                  <li>
                    <strong class="text-white">Clean as you go.</strong> Return shared items,
                    dispose of trash properly, and leave your workspace tidy.
                  </li>
                  <li>
                    <strong class="text-white">Take care of facilities and equipment.</strong>{' '}
                    Report damage or problems to staff. A client may be responsible for intentional
                    damage they cause.
                  </li>
                  <li>
                    <strong class="text-white">Use the space only for lawful purposes.</strong>
                    Illegal activity may result in removal and may be reported to authorities.
                  </li>
                  <li>
                    <strong class="text-white">Follow food and drink guidance.</strong> Use
                    designated areas for full meals and follow staff instructions for shared areas.
                  </li>
                </ul>
              </section>

              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">Payments and Pricing</h2>
                <p class="mb-3">
                  Rates may be displayed on our Coworking page or at the front desk. Payment is due
                  at check-in, at the end of a session, or as otherwise agreed with staff for the
                  service used. We may update pricing for future purchases or sessions.
                </p>
                <p>
                  Partner pricing may require proof of current membership in the relevant partner
                  organization.
                </p>
              </section>

              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">Personal Belongings</h2>
                <p>
                  Keep your belongings with you and secure them appropriately. KahitSan is not
                  responsible for lost, stolen, or damaged personal property. If staff find an item,
                  they may use contact information provided during check-in to try to reach its
                  owner.
                </p>
              </section>

              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">Internet Use</h2>
                <p>
                  Shared internet access must not be used to distribute illegal content, access
                  another person's devices or accounts without authorization, interfere with the
                  network, or consume bandwidth in a way that materially disrupts other clients.
                </p>
              </section>

              <section class="border-t border-zinc-800/60 pt-10">
                <div class="text-xs font-bold tracking-[0.2em] text-amber-400 mb-3">PART III</div>
                <h2 class="ks-section-title mb-4 text-2xl font-bold">General Terms</h2>
                <p>
                  KahitSan provides the website and coworking services as available. To the extent
                  permitted by applicable law, KahitSan Solutions Corp. is not liable for indirect
                  or consequential loss arising from use of the website or coworking services,
                  including loss caused by data loss, business interruption, or equipment failure.
                </p>
              </section>

              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">Changes to These Terms</h2>
                <p>
                  We may update these terms. The date at the top identifies the latest published
                  version. Updated Website Terms apply to later use of kahitsan.com, and updated
                  KahitSan Coworking Terms apply to later use of coworking spaces and services.
                </p>
              </section>

              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">Agreement and Privacy</h2>
                <p>
                  By using kahitsan.com, you agree to Part I and the applicable General Terms in
                  Part III. By using KahitSan Coworking, you also agree to Part II. Our handling of
                  personal information is described in our{' '}
                  <a
                    href="/privacy"
                    class="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-4"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </section>

              <section class="border-t border-zinc-800/50 pt-8">
                <p class="text-zinc-500 text-sm">
                  Questions about these terms may be sent through our contact form or social media
                  channels, or raised with staff at KahitSan Coworking on Panganiban Drive, Naga
                  City.
                </p>
              </section>
            </article>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
