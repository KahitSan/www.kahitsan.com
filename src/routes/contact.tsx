import { Title, Meta, Link } from "@solidjs/meta"
import { createSignal, Show, type Component } from "solid-js"
import Footer from "~/components/Footer"
import Button from "~/components/ui/Button/Button"
import Mail from "lucide-solid/icons/mail"
import Facebook from "lucide-solid/icons/facebook"
import MapPin from "lucide-solid/icons/map-pin"
import Clock from "lucide-solid/icons/clock"
import Navigation from "lucide-solid/icons/navigation"
import ArrowRight from "lucide-solid/icons/arrow-right"
import Send from "lucide-solid/icons/send"
import User from "lucide-solid/icons/user"
import Phone from "lucide-solid/icons/phone"
import MessageSquare from "lucide-solid/icons/message-square"
import FileText from "lucide-solid/icons/file-text"

const API_URL = import.meta.env.VITE_API_URL as string
const API_KEY = import.meta.env.VITE_API_KEY as string

const ContactForm: Component = () => {
  const [name, setName] = createSignal("")
  const [email, setEmail] = createSignal("")
  const [phone, setPhone] = createSignal("")
  const [subject, setSubject] = createSignal("")
  const [message, setMessage] = createSignal("")
  const [loading, setLoading] = createSignal(false)
  const [success, setSuccess] = createSignal(false)
  const [error, setError] = createSignal("")

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    setError("")

    if (!message()) {
      setError("Message is required")
      return
    }
    if (!email() && !phone()) {
      setError("Please provide an email or phone number")
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/contact-feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": API_KEY,
        },
        body: JSON.stringify({
          name: name() || undefined,
          email: email() || undefined,
          phone: phone() || undefined,
          subject: subject() || undefined,
          message: message(),
        }),
      })

      if (res.status === 429) {
        const data = await res.json()
        setError(data.error || "Too many submissions. Please try again later.")
        setLoading(false)
        return
      }

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || "Something went wrong. Please try again.")
        setLoading(false)
        return
      }

      setSuccess(true)
      setName("")
      setEmail("")
      setPhone("")
      setSubject("")
      setMessage("")
    } catch {
      setError("Unable to send your message. Please try again later.")
    }
    setLoading(false)
  }

  return (
    <Show
      when={!success()}
      fallback={
        <div class="text-center py-12">
          <div class="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
            <Send size={24} class="text-emerald-400" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p class="text-zinc-400 text-sm mb-6">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setSuccess(false)}
            class="text-amber-400 text-sm hover:text-amber-300 transition-colors cursor-pointer"
          >
            Send another message
          </button>
        </div>
      }
    >
      <form onSubmit={handleSubmit} class="space-y-4">
        <div class="relative group">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-amber-500/70 transition-colors">
            <User size={14} />
          </div>
          <input
            type="text"
            value={name()}
            onInput={(e) => setName(e.currentTarget.value)}
            placeholder="Your name (optional)"
            class="w-full bg-zinc-900/60 border border-zinc-800/50 text-white px-10 py-3 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 transition-all rounded-sm"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-amber-500/70 transition-colors">
              <Mail size={14} />
            </div>
            <input
              type="email"
              value={email()}
              onInput={(e) => setEmail(e.currentTarget.value)}
              placeholder="Email"
              class="w-full bg-zinc-900/60 border border-zinc-800/50 text-white px-10 py-3 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 transition-all rounded-sm"
            />
          </div>
          <div class="relative group">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-amber-500/70 transition-colors">
              <Phone size={14} />
            </div>
            <input
              type="tel"
              value={phone()}
              onInput={(e) => setPhone(e.currentTarget.value)}
              placeholder="Phone (optional)"
              class="w-full bg-zinc-900/60 border border-zinc-800/50 text-white px-10 py-3 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 transition-all rounded-sm"
            />
          </div>
        </div>

        <div class="relative group">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-amber-500/70 transition-colors">
            <FileText size={14} />
          </div>
          <input
            type="text"
            value={subject()}
            onInput={(e) => setSubject(e.currentTarget.value)}
            placeholder="Subject (optional)"
            class="w-full bg-zinc-900/60 border border-zinc-800/50 text-white px-10 py-3 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 transition-all rounded-sm"
          />
        </div>

        <div class="relative group">
          <div class="absolute top-3 left-3 pointer-events-none text-zinc-600 group-focus-within:text-amber-500/70 transition-colors">
            <MessageSquare size={14} />
          </div>
          <textarea
            value={message()}
            onInput={(e) => setMessage(e.currentTarget.value)}
            placeholder="Your message *"
            rows={5}
            required
            class="w-full bg-zinc-900/60 border border-zinc-800/50 text-white px-10 py-3 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 transition-all rounded-sm resize-none"
          />
        </div>

        <Show when={error()}>
          <div class="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-sm">
            {error()}
          </div>
        </Show>

        <Button
          type="submit"
          intent="primary"
          variant="clip1"
          disabled={loading()}
          icon={() => <Send size={16} />}
          iconPosition="left"
          class="w-full sm:w-auto"
        >
          {loading() ? "Sending..." : "Send Message"}
        </Button>

        <p class="text-zinc-600 text-xs">
          Email or phone required. We'll respond within 24 hours.
        </p>
      </form>
    </Show>
  )
}

const ContactPage: Component = () => {
  return (
    <>
      <Title>Contact Us - KahitSan</Title>
      <Meta
        name="description"
        content="Get in touch with KahitSan. Email us, message us on social media, or visit our coworking space on Panganiban Drive, Naga City."
      />
      <Meta property="og:title" content="Contact Us - KahitSan" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.kahitsan.com/contact" />
      <Link rel="canonical" href="https://www.kahitsan.com/contact" />

      <div class="min-h-screen page-bg transition-colors duration-300">
        <main class="pt-20 pb-12 md:pt-32 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <section class="mb-12 md:mb-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 clip-corner-both overflow-hidden border border-zinc-800/30">
              {/* Left — Contact info */}
              <div class="bg-zinc-950 p-6 md:p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-4">CONTACT US</div>
                  <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                    Let's <span class="gradient-text">talk</span>.
                  </h1>
                  <p class="text-zinc-400 text-sm md:text-base mb-8 md:mb-12 max-w-md">
                    Have a question, want to book a space, or just want to say hi? Here's how to reach
                    us.
                  </p>

                  <div class="space-y-5 md:space-y-8">
                    <a href="mailto:info@kahitsan.com" class="flex items-start gap-4 group/row">
                      <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 group-hover/row:bg-amber-500/20 transition-colors">
                        <Mail size={18} class="text-amber-400" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <h2 class="text-white font-bold text-sm mb-0.5">Email</h2>
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
                        <h2 class="text-white font-bold text-sm mb-0.5">Facebook</h2>
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
                      <div>
                        <h2 class="text-white font-bold text-sm mb-0.5">Visit us</h2>
                        <p class="text-zinc-400 text-sm leading-relaxed">
                          Panganiban Drive, Naga City
                          <br />
                          Camarines Sur, Philippines
                        </p>
                      </div>
                    </div>

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

              {/* Right — Contact form */}
              <div class="bg-zinc-900/40 p-6 md:p-10 lg:p-14 border-t lg:border-t-0 lg:border-l border-zinc-800/30">
                <div class="text-xs font-bold tracking-[0.3em] gradient-text mb-4">
                  SEND A MESSAGE
                </div>
                <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                  Drop us a <span class="gradient-text">line</span>.
                </h2>
                <p class="text-zinc-400 text-sm mb-8 max-w-md">
                  Fill out the form and we'll get back to you within 24 hours.
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
