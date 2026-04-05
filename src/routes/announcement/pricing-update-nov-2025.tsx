import { Title, Meta, Link } from "@solidjs/meta";
import { For, Show } from 'solid-js'
import type { Component } from 'solid-js'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

const PricingUpdateAnnouncementPage: Component = () => {
  return (
    <>
      <Title>Pricing Update - November 2025 - KahitSan</Title>
      <Meta name="description" content="Important pricing update effective November 1, 2025. View our new rates and special partner discounts." />
      <Meta property="og:title" content="Pricing Update - November 2025 - KahitSan" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://www.kahitsan.com/announcement/pricing-update-nov-2025" />
      <Link rel="canonical" href="https://www.kahitsan.com/announcement/pricing-update-nov-2025" />

      <div class="min-h-screen page-bg transition-colors duration-300">
        <Header />

        <div class="relative max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-16">
          <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div class="absolute top-40 right-0 w-64 h-64 opacity-8" style="background:radial-gradient(circle, rgba(201, 169, 97, 0.2) 0%, transparent 70%)" />
          </div>

          <div class="relative z-10">
            <div class="mb-12">
              <h1 class="text-3xl md:text-4xl font-bold mb-3 text-amber-500">
                Pricing Update - Effective November 1, 2025
              </h1>
              <p class="text-sm text-zinc-500">Announcement Date: October 16, 2025</p>
            </div>

            <div class="bg-zinc-900/50 rounded-lg p-6 md:p-8 mb-12 border border-amber-500/20 backdrop-blur-sm">
              <p class="text-zinc-300 mb-4 font-light">Dear Partners and Community,</p>
              <p class="text-zinc-400 mb-4 leading-relaxed font-light">
                After careful consideration and planning since early October, we are announcing a pricing update for KahitSan—effective November 1, 2025.
              </p>
              <p class="text-zinc-400 mb-4 leading-relaxed font-light">
                We've encountered challenges that taught us the importance of continuous improvement. Problems like intermittent WiFi disruptions, weather control issues, and facility wear have impacted your experience. While we've recently resolved these core issues, we recognize there's still much to improve—upgraded blinds, better partitions, expanded amenities, and more.
              </p>
              <p class="text-zinc-400 mb-4 leading-relaxed font-light">
                Our progress has been limited by resources, and we're moving too slowly to deliver the facility you deserve. This pricing adjustment accelerates our growth, enabling us to invest in improvements and strengthen KahitSan's infrastructure for long-term sustainability.
              </p>
              <p class="text-zinc-400 leading-relaxed font-light">
                We're committing to hasten KahitSan's development with your support.{' '}
                <span class="text-amber-500">
                  We've balanced profitability with affordability—keeping KahitSan sustainable while staying accessible to you.
                </span>{' '}
                Your continued support enables us to invest in improvements, better facilities, and a stronger KahitSan for all.
              </p>
            </div>

            <div class="mb-12">
              <h2 class="text-2xl font-light text-zinc-100 mb-8 pb-4 border-b border-amber-500/30">
                New Pricing Structure
              </h2>

              <For each={[
                {
                  title: 'Entrance Area',
                  cols: ['4 hrs', '8 hrs', '1hr ext'],
                  rows: [
                    { label: 'Walk-in (Old)', vals: ['N/A', '₱99', '₱15'], old: [false, true, true] },
                    { label: 'Walk-in (New)', vals: ['₱99', '₱118', '₱30'], bold: true },
                    { label: 'Partner (20% off)', vals: ['₱79', '₱94', '₱24'], partner: true },
                  ],
                },
                {
                  title: 'Inner Area',
                  cols: ['4 hrs', '8 hrs', '1hr ext'],
                  rows: [
                    { label: 'Walk-in (Old)', vals: ['N/A', '₱149', '₱15'], old: [false, true, true] },
                    { label: 'Walk-in (New)', vals: ['₱149', '₱178', '₱30'], bold: true },
                    { label: 'Partner (20% off)', vals: ['₱119', '₱142', '₱24'], partner: true },
                  ],
                },
                {
                  title: 'Call Booth',
                  cols: ['5 hrs', '1hr ext'],
                  rows: [
                    { label: 'Walk-in (Old)', vals: ['₱250', '₱60'], old: [true, true] },
                    { label: 'Walk-in (New)', vals: ['₱298', '₱71'], bold: true },
                    { label: 'Partner (20% off)', vals: ['₱238', '₱71'], partner: true },
                  ],
                },
                {
                  title: 'Whole Inner Area',
                  cols: ['2 hrs min', '1hr ext'],
                  rows: [
                    { label: 'Walk-in (Old)', vals: ['₱500', '₱350'], old: [true, true] },
                    { label: 'Walk-in (New)', vals: ['₱1,800', '₱900'], bold: true },
                    { label: 'Partner (20% off)', vals: ['₱1,440', '₱720'], partner: true },
                  ],
                  note: 'Based on our analytics, sudden walk-in bookings for the entire inner area disrupt other clients\' work. *Walk-in requires ₱1,800 minimum OR 5-day advance booking. Partners enjoy preferential rates.',
                },
                {
                  title: 'All-Access Membership',
                  cols: ['1 Month', '3 Months'],
                  rows: [
                    { label: 'Entrance Only (Old)', vals: ['₱1,499/mo', 'N/A'], old: [true, false] },
                    { label: 'All-Access (Old)', vals: ['₱2,499/mo', 'N/A'], old: [true, false] },
                    { label: 'Walk-in (New)', vals: ['₱3,500/mo', '₱9,371'], bold: true },
                    { label: 'Partner (20% off)', vals: ['₱2,800/mo', '₱7,497'], partner: true },
                  ],
                  note: 'All current members renewing their subscription will maintain the same pricing—no increase.',
                },
              ]}>{(section) => (
                <div class="mb-12">
                  <h3 class="text-lg font-semibold text-amber-500 mb-4">{section.title}</h3>
                  <div class="overflow-x-auto rounded-lg border border-amber-500/30 mb-4">
                    <table class="w-full">
                      <thead>
                        <tr class="border-b border-amber-500/30 bg-amber-500/10">
                          <th class="px-3 py-2 text-left text-xs md:text-sm font-semibold text-amber-500" />
                          <For each={section.cols}>{(col) => (
                            <th class="px-3 py-2 text-left text-xs md:text-sm font-semibold text-amber-500">{col}</th>
                          )}</For>
                        </tr>
                      </thead>
                      <tbody>
                        <For each={section.rows}>{(row) => (
                          <tr class={`border-b border-amber-500/20 ${(row as any).partner ? 'bg-amber-500/5' : ''}`}>
                            <td class={`px-3 py-2 text-xs md:text-sm text-zinc-300 ${(row as any).bold ? 'font-bold' : (row as any).partner ? 'font-semibold' : ''}`}>
                              {row.label}
                            </td>
                            <For each={row.vals}>{(val, i) => (
                              <td class={`px-3 py-2 text-xs md:text-sm ${(row as any).bold ? 'text-amber-400 font-bold' : (row as any).partner ? 'text-zinc-200 font-semibold' : `text-zinc-500 ${(row as any).old?.[i()] ? 'line-through' : ''}`}`}>
                                {val}
                              </td>
                            )}</For>
                          </tr>
                        )}</For>
                      </tbody>
                    </table>
                  </div>
                  <Show when={(section as any).note}>
                    <p class="text-xs md:text-sm text-zinc-400 leading-relaxed">{(section as any).note}</p>
                  </Show>
                </div>
              )}</For>
            </div>

            <div class="bg-zinc-900/50 rounded-lg p-6 md:p-8 border border-amber-500/20 backdrop-blur-sm">
              <h2 class="text-2xl font-light text-zinc-100 mb-8 pb-4 border-b border-amber-500/30">
                Why This Change?
              </h2>
              <div class="space-y-6">
                <For each={[
                  { title: '1. Hasten KahitSan Development', body: 'Revenue increases directly support facility expansion and improvements.' },
                  { title: '2. Competitive & Affordable', body: "Our pricing remains competitive within Naga City's coworking market—even below many alternatives—keeping KahitSan accessible to students." },
                  { title: '3. Sustainable Model', body: 'Revenue is pooled to balance company profitability with community affordability. This ensures KahitSan remains operational long-term.' },
                  { title: '4. Service Excellence & Future Improvements', body: 'Management remains the same with continued focus on customer satisfaction. 24/7 operations maintained.' },
                  { title: '5. Future Adjustments', body: 'Pricing may adjust based on growth and availability to maintain this balance.' },
                ]}>{(item) => (
                  <div class="border-l-2 border-amber-500/40 pl-4">
                    <h3 class="font-semibold text-amber-500 mb-2">{item.title}</h3>
                    <p class="text-zinc-400 text-sm font-light">{item.body}</p>
                  </div>
                )}</For>
              </div>
            </div>

            <div class="mt-12 text-center text-zinc-600 text-sm border-t border-amber-500/20 pt-8">
              <p class="mb-2">Thank you for your continued support of KahitSan.</p>
              <p style={{ color: '#b38728' }}>KahitSan Solutions Corp.</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default PricingUpdateAnnouncementPage
