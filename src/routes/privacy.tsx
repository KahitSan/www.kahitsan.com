import { Title, Meta, Link } from "@solidjs/meta";
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Title>Privacy Policy - KahitSan</Title>
      <Meta name="description" content="Privacy Policy for KahitSan Coworking Space in Naga City." />
      <Meta property="og:title" content="Privacy Policy - KahitSan" />
      <Link rel="canonical" href="https://www.kahitsan.com/privacy" />

      <div class="min-h-screen page-bg transition-colors duration-300">
        <Header />

        <main class="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
          <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-4">LEGAL</div>
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Privacy Policy</h1>
          <p class="text-zinc-500 text-sm mb-12">Last updated: April 4, 2026</p>

          <div class="space-y-12 text-zinc-300 leading-relaxed">
            <section>
              <h2 class="text-xl font-bold text-white mb-4">Our Approach to Privacy</h2>
              <p>
                At KahitSan, we keep things simple. We only collect information that helps us serve you better and keep our space safe for everyone. This policy explains what we collect, why, and how we use it.
              </p>
            </section>

            <section>
              <h2 class="text-xl font-bold text-white mb-4">What We Collect</h2>
              <p class="mb-4">When you check in as a new client, we ask for:</p>
              <ul class="space-y-3 ml-4">
                <li class="flex items-start gap-3">
                  <span class="text-amber-400 mt-1">—</span>
                  <span><strong class="text-white">Full name</strong> — to identify you and personalize your experience.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-amber-400 mt-1">—</span>
                  <span><strong class="text-white">Contact number</strong> — so we can reach you if you leave belongings behind or for urgent matters.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-amber-400 mt-1">—</span>
                  <span><strong class="text-white">Email address</strong> — as an alternative way to contact you when needed.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-amber-400 mt-1">—</span>
                  <span><strong class="text-white">Social media account</strong> (optional) — another way to reach you if primary contact methods don't work.</span>
                </li>
              </ul>
              <p class="mt-4">
                For returning clients, we only ask for your name and the service you'd like to avail. We don't ask you to repeat your details every visit.
              </p>
            </section>

            <section>
              <h2 class="text-xl font-bold text-white mb-4">Why We Collect It</h2>
              <p class="mb-4">We use your information for two main purposes:</p>
              <ul class="space-y-3 ml-4">
                <li class="flex items-start gap-3">
                  <span class="text-amber-400 mt-1">1.</span>
                  <span><strong class="text-white">To contact you when needed.</strong> The most common reason is to let you know you left something behind. We may also reach out about your membership or service-related matters.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-amber-400 mt-1">2.</span>
                  <span><strong class="text-white">For the safety and security of all clients.</strong> In the event of a security incident — such as theft, property damage, or any situation that requires investigation — we may share relevant information with law enforcement authorities. This is to protect you and every other person using our space.</span>
                </li>
              </ul>
              <p class="mt-4">
                We do <strong class="text-white">not</strong> use your information for marketing, sell it to third parties, or share it with anyone outside of the purposes described above.
              </p>
            </section>

            <section>
              <h2 class="text-xl font-bold text-white mb-4">How We Store It</h2>
              <p>
                Your information is stored securely and is only accessible to authorized KahitSan staff. We take reasonable measures to protect it from unauthorized access or disclosure. We retain your information for as long as you remain an active client, and for a reasonable period afterward in case you return or for record-keeping purposes.
              </p>
            </section>

            <section>
              <h2 class="text-xl font-bold text-white mb-4">Website Analytics</h2>
              <p>
                Our website uses Google Analytics to understand how visitors use our pages. This collects anonymous data like pages visited, time spent, and general location (city level). No personal information is tied to this data. You can opt out of Google Analytics by using browser extensions like Google Analytics Opt-out.
              </p>
            </section>

            <section>
              <h2 class="text-xl font-bold text-white mb-4">Your Rights</h2>
              <p class="mb-4">You have the right to:</p>
              <ul class="space-y-3 ml-4">
                <li class="flex items-start gap-3">
                  <span class="text-amber-400 mt-1">—</span>
                  <span><strong class="text-white">Ask what information we have about you.</strong> Just ask any staff member during your visit.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-amber-400 mt-1">—</span>
                  <span><strong class="text-white">Request corrections</strong> if any of your details are wrong or outdated.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-amber-400 mt-1">—</span>
                  <span><strong class="text-white">Request deletion</strong> of your information if you no longer wish to be in our records, subject to any legal obligations we may have to retain it.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 class="text-xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p>
                If we update this policy, we'll change the date at the top. We encourage you to check back occasionally, but we'll keep things largely the same — your privacy matters to us and we don't plan on over-complicating it.
              </p>
            </section>

            <section>
              <h2 class="text-xl font-bold text-white mb-4">Agreement</h2>
              <p>
                By availing any service from KahitSan, you agree to this Privacy Policy and our <a href="/terms" class="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-4">Terms of Service</a>.
              </p>
            </section>

            <section class="border-t border-zinc-800/50 pt-8">
              <p class="text-zinc-500 text-sm">
                Questions about your privacy? Reach out through our social media channels or speak with any staff member at our Panganiban Drive location in Naga City.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
