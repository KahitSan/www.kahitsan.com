import { Title, Meta, Link } from '@solidjs/meta'
import Footer from '~/components/Footer'

// Legal review is appropriate if these disclosures or business practices materially change.
export default function PrivacyPage() {
  return (
    <>
      <Title>Privacy Policy - KahitSan Solutions Corp.</Title>
      <Meta
        name="description"
        content="Privacy Policy of KahitSan Solutions Corp. for kahitsan.com and KahitSan Coworking."
      />
      <Meta property="og:title" content="Privacy Policy - KahitSan Solutions Corp." />
      <Meta
        property="og:description"
        content="Privacy Policy of KahitSan Solutions Corp. for kahitsan.com and KahitSan Coworking."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/privacy" />
      <Link rel="canonical" href="https://www.kahitsan.com/privacy" />

      <div class="min-h-screen page-bg transition-colors duration-300">
        <main class="mx-auto max-w-7xl px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-24">
          <header class="ks-grid-surface mb-12 border-y border-zinc-800/60 px-6 py-8 md:mb-16 md:px-10 md:py-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
              <div class="lg:col-span-8 lg:col-start-3">
                <div class="mb-4 text-xs font-bold tracking-[0.3em] text-amber-400">LEGAL</div>
                <h1 class="ks-display-heading mb-4 text-4xl font-bold tracking-tight md:text-6xl">
                  <span class="ks-heading-accent">Privacy</span> Policy
                </h1>
                <p class="text-sm text-zinc-500">Last updated: September 4, 2026</p>
              </div>
            </div>
          </header>

          <div class="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
            <article class="space-y-12 leading-relaxed text-zinc-300 lg:col-span-8 lg:col-start-3">
              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">Who This Policy Covers</h2>
                <p class="mb-4">
                  This Privacy Policy is issued by KahitSan Solutions Corp. ("KahitSan," "we," "us,"
                  or "our"). It covers the website at kahitsan.com and the personal information we
                  handle in connection with KahitSan Coworking.
                </p>
                <p>
                  Hilinga is a separate KahitSan product with its own privacy policy. For Hilinga,
                  please read the policy at{' '}
                  <a
                    href="https://www.hilinga.com/privacy"
                    class="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-4"
                  >
                    hilinga.com/privacy
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">
                  Information You Submit Online
                </h2>
                <p>
                  When you use the contact form on kahitsan.com, you submit a message and either an
                  email address or phone number. You may also provide your name, an additional
                  contact method, and a subject. We use this information to receive, review, and
                  respond to your inquiry.
                </p>
              </section>

              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">
                  KahitSan Coworking Information
                </h2>
                <p class="mb-4">
                  When a new client checks in at KahitSan Coworking, we may ask for:
                </p>
                <ul class="list-disc space-y-3 pl-5 marker:text-amber-400">
                  <li>Full name</li>
                  <li>Contact number</li>
                  <li>Email address</li>
                  <li>Social media account, if you choose to provide one</li>
                </ul>
                <p class="mt-4">
                  Returning clients may be asked for their name and requested service. We use
                  coworking information to provide the requested service, manage client records, and
                  contact clients about service-related matters or belongings left at the space.
                </p>
              </section>

              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">Safety and Security</h2>
                <p>
                  Information relevant to an incident involving theft, property damage, safety, or
                  another matter requiring investigation may be used to review the incident or
                  shared with appropriate authorities when required or appropriate.
                </p>
              </section>

              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">Google Analytics</h2>
                <p>
                  Kahitsan.com uses Google Analytics to measure website visits and page usage.
                  Google Analytics receives usage and technical information generated when a visitor
                  uses the site. This information is handled through Google Analytics rather than
                  the website contact form and may be associated with cookies or similar browser
                  technologies used by that service.
                </p>
              </section>

              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">Questions and Requests</h2>
                <p>
                  To ask about personal information you submitted through kahitsan.com or provided
                  to KahitSan Coworking, use our contact form, reach out through our social media
                  channels, or speak with staff at our Panganiban Drive location in Naga City.
                </p>
              </section>

              <section>
                <h2 class="ks-record-title mb-4 text-xl font-bold">Changes to This Policy</h2>
                <p>
                  We may update this policy when our website, coworking operations, or information
                  practices change. The date at the top identifies the latest published version.
                </p>
              </section>

              <section class="border-t border-zinc-800/50 pt-8">
                <p class="text-zinc-500 text-sm">
                  KahitSan Solutions Corp. · kahitsan.com · KahitSan Coworking, Panganiban Drive,
                  Naga City
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
