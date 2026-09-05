import { Title, Meta, Link } from '@solidjs/meta'
import { createSignal, Show, type Component } from 'solid-js'
import Footer from '~/components/Footer'
import Button from '~/components/ui/Button/Button'
import Mail from 'lucide-solid/icons/mail'
import Facebook from 'lucide-solid/icons/facebook'
import MapPin from 'lucide-solid/icons/map-pin'
import Clock from 'lucide-solid/icons/clock'
import ArrowRight from 'lucide-solid/icons/arrow-right'
import ExternalLink from 'lucide-solid/icons/external-link'
import Send from 'lucide-solid/icons/send'
import User from 'lucide-solid/icons/user'
import Phone from 'lucide-solid/icons/phone'
import MessageSquare from 'lucide-solid/icons/message-square'
import FileText from 'lucide-solid/icons/file-text'

const ContactForm: Component = () => {
  const [name, setName] = createSignal('')
  const [email, setEmail] = createSignal('')
  const [phone, setPhone] = createSignal('')
  const [subject, setSubject] = createSignal('')
  const [message, setMessage] = createSignal('')
  const [loading, setLoading] = createSignal(false)
  const [success, setSuccess] = createSignal(false)
  const [error, setError] = createSignal('')
  const [replyError, setReplyError] = createSignal('')
  const [messageError, setMessageError] = createSignal('')
  let emailInput: HTMLInputElement | undefined
  let messageInput: HTMLTextAreaElement | undefined

  const resetForm = () => {
    setSuccess(false)
    setError('')
    setReplyError('')
    setMessageError('')
  }

  const handleSubmit = async (event: Event) => {
    event.preventDefault()
    setError('')

    const missingReplyMethod = !email().trim() && !phone().trim()
    const missingMessage = !message().trim()

    setReplyError(
      missingReplyMethod ? 'Enter an email address or phone number so we can reply.' : ''
    )
    setMessageError(missingMessage ? 'Enter a message before sending this form.' : '')

    if (missingReplyMethod) {
      requestAnimationFrame(() => emailInput?.focus())
      return
    }
    if (missingMessage) {
      requestAnimationFrame(() => messageInput?.focus())
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/contact-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name() || undefined,
          email: email() || undefined,
          phone: phone() || undefined,
          subject: subject() || undefined,
          message: message(),
        }),
      })

      if (response.status === 429) {
        const data = await response.json()
        setError(data.error || 'Too many submissions. Please try again later.')
        return
      }

      if (!response.ok) {
        const data = await response.json()
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }

      setSuccess(true)
      setName('')
      setEmail('')
      setPhone('')
      setSubject('')
      setMessage('')
    } catch {
      setError('Unable to send your message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Show
      when={!success()}
      fallback={
        <div class="text-center py-12" role="status" aria-live="polite">
          <div class="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
            <Send size={24} class="text-emerald-400" aria-hidden="true" />
          </div>
          <h3 class="ks-record-title text-xl font-bold mb-2">Message sent</h3>
          <p class="text-zinc-400 text-sm mb-6">
            Thank you for reaching out. We will reply using the contact details you provided.
          </p>
          <Button type="button" intent="secondary" variant="clip1" onClick={resetForm}>
            Send another message
          </Button>
        </div>
      }
    >
      <form onSubmit={handleSubmit} class="space-y-5" noValidate>
        <p id="contact-reply-help" class="text-sm text-zinc-400">
          Provide at least one reply method: email or phone.
        </p>

        <div>
          <label for="contact-name" class="mb-2 block text-sm font-semibold text-zinc-300">
            Name <span class="font-normal text-zinc-500">(optional)</span>
          </label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-amber-500/70 transition-colors">
              <User size={14} aria-hidden="true" />
            </div>
            <input
              id="contact-name"
              name="name"
              autocomplete="name"
              type="text"
              value={name()}
              onInput={(event) => setName(event.currentTarget.value)}
              class="ks-form-control w-full bg-zinc-900/60 border border-zinc-800/50 text-white px-10 py-3 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all rounded-sm"
            />
          </div>
        </div>

        <fieldset>
          <legend class="sr-only">Reply method</legend>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="contact-email" class="mb-2 block text-sm font-semibold text-zinc-300">
                Email
              </label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-amber-500/70 transition-colors">
                  <Mail size={14} aria-hidden="true" />
                </div>
                <input
                  ref={(element) => (emailInput = element)}
                  id="contact-email"
                  name="email"
                  autocomplete="email"
                  type="email"
                  value={email()}
                  onInput={(event) => {
                    setEmail(event.currentTarget.value)
                    if (event.currentTarget.value) setReplyError('')
                  }}
                  aria-describedby={`contact-reply-help${replyError() ? ' contact-reply-error' : ''}`}
                  aria-invalid={replyError() ? 'true' : undefined}
                  class="ks-form-control w-full bg-zinc-900/60 border border-zinc-800/50 text-white px-10 py-3 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all rounded-sm"
                />
              </div>
            </div>

            <div>
              <label for="contact-phone" class="mb-2 block text-sm font-semibold text-zinc-300">
                Phone
              </label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-amber-500/70 transition-colors">
                  <Phone size={14} aria-hidden="true" />
                </div>
                <input
                  id="contact-phone"
                  name="phone"
                  autocomplete="tel"
                  type="tel"
                  value={phone()}
                  onInput={(event) => {
                    setPhone(event.currentTarget.value)
                    if (event.currentTarget.value) setReplyError('')
                  }}
                  aria-describedby={`contact-reply-help${replyError() ? ' contact-reply-error' : ''}`}
                  aria-invalid={replyError() ? 'true' : undefined}
                  class="ks-form-control w-full bg-zinc-900/60 border border-zinc-800/50 text-white px-10 py-3 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all rounded-sm"
                />
              </div>
            </div>
          </div>
          <Show when={replyError()}>
            <p
              id="contact-reply-error"
              class="mt-2 text-sm font-semibold text-red-400"
              role="alert"
            >
              {replyError()}
            </p>
          </Show>
        </fieldset>

        <div>
          <label for="contact-subject" class="mb-2 block text-sm font-semibold text-zinc-300">
            Subject <span class="font-normal text-zinc-500">(optional)</span>
          </label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-amber-500/70 transition-colors">
              <FileText size={14} aria-hidden="true" />
            </div>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              value={subject()}
              onInput={(event) => setSubject(event.currentTarget.value)}
              class="ks-form-control w-full bg-zinc-900/60 border border-zinc-800/50 text-white px-10 py-3 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all rounded-sm"
            />
          </div>
        </div>

        <div>
          <label for="contact-message" class="mb-2 block text-sm font-semibold text-zinc-300">
            Message <span class="text-amber-500">*</span>
          </label>
          <div class="relative group">
            <div class="absolute top-3 left-3 pointer-events-none text-zinc-600 group-focus-within:text-amber-500/70 transition-colors">
              <MessageSquare size={14} aria-hidden="true" />
            </div>
            <textarea
              ref={(element) => (messageInput = element)}
              id="contact-message"
              name="message"
              value={message()}
              onInput={(event) => {
                setMessage(event.currentTarget.value)
                if (event.currentTarget.value.trim()) setMessageError('')
              }}
              rows={5}
              required
              aria-describedby={messageError() ? 'contact-message-error' : undefined}
              aria-invalid={messageError() ? 'true' : undefined}
              class="ks-form-control w-full bg-zinc-900/60 border border-zinc-800/50 text-white px-10 py-3 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all rounded-sm resize-none"
            />
          </div>
          <Show when={messageError()}>
            <p
              id="contact-message-error"
              class="mt-2 text-sm font-semibold text-red-400"
              role="alert"
            >
              {messageError()}
            </p>
          </Show>
        </div>

        <Show when={error()}>
          <div
            class="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-sm"
            role="alert"
          >
            {error()}
          </div>
        </Show>

        <Button
          type="submit"
          intent="primary"
          variant="clip1"
          disabled={loading()}
          icon={() => <Send size={16} aria-hidden="true" />}
          iconPosition="left"
          class="w-full sm:w-auto"
        >
          {loading() ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Show>
  )
}

const ContactPage: Component = () => {
  return (
    <>
      <Title>Contact KahitSan Solutions Corp.</Title>
      <Meta
        name="description"
        content="Contact KahitSan Solutions Corp. about KahitSan Coworking, company partnerships, or visit Hilinga for software inquiries."
      />
      <Meta property="og:title" content="Contact KahitSan Solutions Corp." />
      <Meta
        property="og:description"
        content="Contact KahitSan Solutions Corp. about coworking, partnerships, or company matters."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/contact" />
      <Link rel="canonical" href="https://www.kahitsan.com/contact" />

      <div class="min-h-screen page-bg transition-colors duration-300">
        <main class="pt-20 pb-12 md:pt-32 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <section class="ks-grid-surface mb-10 border-y border-zinc-800/60 py-8 md:mb-16 md:py-12">
            <div class="grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
              <div class="space-y-5 lg:col-span-9 lg:col-start-4">
                <h1 class="ks-display-heading text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight">
                  <span class="ks-heading-accent">Contact</span> KahitSan Solutions Corp.
                </h1>
                <p class="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-3xl">
                  Choose the team you need. We handle coworking and company inquiries here; Hilinga
                  has its own website and contact channels.
                </p>
              </div>
            </div>
          </section>

          <nav
            aria-label="Contact options"
            class="mb-12 md:mb-20 border-y border-zinc-800/60 divide-y divide-zinc-800/60"
          >
            <a
              href="#contact-form"
              class="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 py-6 lg:grid-cols-12 lg:gap-x-10 lg:py-7"
            >
              <h2 class="ks-record-title col-start-1 text-lg font-bold md:text-xl lg:col-span-3">
                KahitSan Coworking
              </h2>
              <p class="col-start-1 text-sm text-zinc-400 md:text-base lg:col-span-6 lg:col-start-4">
                Ask about day passes, workspace access, group visits, or the Naga City location.
              </p>
              <span class="col-start-2 row-span-2 row-start-1 flex items-center gap-2 text-sm font-bold text-amber-400 lg:col-span-3 lg:col-start-10 lg:row-auto lg:justify-self-end">
                Contact us
                <ArrowRight size={16} class="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="https://www.hilinga.com"
              target="_blank"
              rel="noopener noreferrer"
              class="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 py-6 lg:grid-cols-12 lg:gap-x-10 lg:py-7"
            >
              <h2 class="ks-record-title col-start-1 text-lg font-bold md:text-xl lg:col-span-3">
                Hilinga
              </h2>
              <p class="col-start-1 text-sm text-zinc-400 md:text-base lg:col-span-6 lg:col-start-4">
                Get product information, support, and software contact options directly from
                Hilinga.
              </p>
              <span class="col-start-2 row-span-2 row-start-1 flex items-center gap-2 text-sm font-bold text-amber-400 lg:col-span-3 lg:col-start-10 lg:row-auto lg:justify-self-end">
                Visit Hilinga
                <ArrowRight size={16} class="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="#contact-form"
              class="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 py-6 lg:grid-cols-12 lg:gap-x-10 lg:py-7"
            >
              <h2 class="ks-record-title col-start-1 text-lg font-bold md:text-xl lg:col-span-3">
                Company &amp; partnerships
              </h2>
              <p class="col-start-1 text-sm text-zinc-400 md:text-base lg:col-span-6 lg:col-start-4">
                Reach KahitSan Solutions Corp. about partnerships, suppliers, media, or general
                company matters.
              </p>
              <span class="col-start-2 row-span-2 row-start-1 flex items-center gap-2 text-sm font-bold text-amber-400 lg:col-span-3 lg:col-start-10 lg:row-auto lg:justify-self-end">
                Send inquiry
                <ArrowRight size={16} class="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </nav>

          <section class="mb-12 md:mb-24">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 clip-corner-both overflow-hidden border border-zinc-800/30">
              {/* Left: Contact info */}
              <div class="ks-grid-surface bg-zinc-950 p-6 md:p-10 lg:col-span-5 lg:p-14 flex flex-col justify-between">
                <div>
                  <h2 class="ks-section-title text-2xl md:text-3xl font-bold tracking-tight mb-3">
                    KahitSan Coworking
                  </h2>
                  <p class="text-zinc-400 text-sm md:text-base mb-8 md:mb-12 max-w-md leading-relaxed">
                    Visit our workspace on Panganiban Drive or contact the team before you arrive.
                  </p>

                  <div class="space-y-5 md:space-y-8">
                    <a href="mailto:info@kahitsan.com" class="flex items-start gap-4 group/row">
                      <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 group-hover/row:bg-amber-500/20 transition-colors">
                        <Mail size={18} class="text-amber-400" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <h3 class="ks-record-title font-bold text-sm mb-0.5">Email</h3>
                        <p class="text-zinc-400 text-sm group-hover/row:text-amber-400 transition-colors">
                          info@kahitsan.com
                        </p>
                      </div>
                      <ArrowRight
                        size={16}
                        class="text-zinc-600 mt-2.5 group-hover/row:text-amber-400 group-hover/row:translate-x-1 transition-all shrink-0"
                      />
                    </a>

                    <a
                      href="https://www.facebook.com/KahitSan"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-start gap-4 group/row"
                    >
                      <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 group-hover/row:bg-amber-500/20 transition-colors">
                        <Facebook size={18} class="text-amber-400" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <h3 class="ks-record-title font-bold text-sm mb-0.5">Facebook</h3>
                        <p class="text-zinc-400 text-sm group-hover/row:text-amber-400 transition-colors">
                          Message us or follow for updates
                        </p>
                      </div>
                      <ArrowRight
                        size={16}
                        class="text-zinc-600 mt-2.5 group-hover/row:text-amber-400 group-hover/row:translate-x-1 transition-all shrink-0"
                      />
                    </a>

                    <div class="h-px bg-zinc-800/50" />

                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                        <MapPin size={18} class="text-amber-400" />
                      </div>
                      <div class="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 class="ks-record-title font-bold text-sm mb-0.5">Visit us</h3>
                          <p class="text-zinc-400 text-sm leading-relaxed">
                            Panganiban Drive, Naga City
                            <br />
                            Camarines Sur, Philippines
                          </p>
                        </div>
                        <Button
                          as="a"
                          href="https://share.google/TFC9YSJ3R8ExKdnUH"
                          target="_blank"
                          rel="noopener noreferrer"
                          intent="secondary"
                          variant="clip1"
                          size="sm"
                          icon={() => <ExternalLink size={14} aria-hidden="true" />}
                          iconPosition="right"
                          class="shrink-0 self-start"
                        >
                          Open in Google Maps
                          <span class="sr-only"> (opens in a new tab)</span>
                        </Button>
                      </div>
                    </div>

                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                        <Clock size={18} class="text-amber-400" />
                      </div>
                      <div>
                        <h3 class="ks-record-title font-bold text-sm mb-0.5">Hours</h3>
                        <p class="text-zinc-400 text-sm">Open daily &middot; Walk-ins welcome</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact form */}
              <div
                id="contact-form"
                class="bg-zinc-900/40 p-6 md:p-10 lg:col-span-7 lg:p-14 border-t lg:border-t-0 lg:border-l border-zinc-800/30 scroll-mt-24"
              >
                <h2 class="ks-section-title text-2xl md:text-3xl font-bold tracking-tight mb-3">
                  Coworking &amp; company inquiries
                </h2>
                <p class="text-zinc-400 text-sm mb-8 max-w-md leading-relaxed">
                  Send questions about KahitSan Coworking or KahitSan Solutions Corp. For Hilinga,
                  use the contact options on hilinga.com.
                </p>

                <ContactForm />
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
