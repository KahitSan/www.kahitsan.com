import MapPin from 'lucide-solid/icons/map-pin'
import { Show, createSignal, type Component } from 'solid-js'
import Button from '~/components/ui/Button/Button'

interface ClickToLoadMapProps {
  address: string
  class?: string
  embedUrl: string
  locationName: string
  testId: string
  title: string
}

const ClickToLoadMap: Component<ClickToLoadMapProps> = (props) => {
  const [isLoaded, setIsLoaded] = createSignal(false)
  const privacyNoteId = () => `${props.testId}-privacy-note`
  let iframeRef: HTMLIFrameElement | undefined

  const loadMap = () => {
    setIsLoaded(true)
    queueMicrotask(() => iframeRef?.focus())
  }

  return (
    <div
      class={`relative overflow-hidden border border-zinc-800 clip-corner-both ${props.class ?? ''}`}
      data-testid={props.testId}
      data-map-state={isLoaded() ? 'loaded' : 'idle'}
    >
      <Show
        when={isLoaded()}
        fallback={
          <div class="ks-grid-surface absolute inset-0 flex items-center justify-center bg-zinc-950/35 p-6 text-center md:p-10">
            <div
              class="pointer-events-none absolute inset-x-8 top-1/2 border-t border-amber-500/10"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute inset-y-8 left-1/2 border-l border-amber-500/10"
              aria-hidden="true"
            />
            <div class="relative z-10 max-w-md">
              <div class="mx-auto mb-5 flex items-center justify-center">
                <MapPin size={24} class="text-amber-500" aria-hidden="true" />
              </div>
              <p class="ks-record-title mb-2">{props.locationName}</p>
              <address class="mb-5 text-sm not-italic leading-relaxed text-zinc-400">
                {props.address}
              </address>
              <p id={privacyNoteId()} class="mb-6 text-sm leading-relaxed text-zinc-500">
                Google Maps stays unloaded until you choose to view the interactive map.
              </p>
              <Button
                type="button"
                intent="secondary"
                variant="clip1"
                aria-describedby={privacyNoteId()}
                onClick={loadMap}
              >
                Load interactive map
              </Button>
              <noscript>
                <p class="mt-4 text-sm text-zinc-500">
                  Interactive map requires JavaScript. Use the Open in Google Maps link for
                  directions.
                </p>
              </noscript>
            </div>
          </div>
        }
      >
        <iframe
          ref={(element) => {
            iframeRef = element
          }}
          src={props.embedUrl}
          width="100%"
          height="100%"
          class="absolute inset-0 h-full w-full opacity-90"
          style={{ border: '0' }}
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          tabIndex={0}
          title={props.title}
        />
      </Show>
      <span class="sr-only" aria-live="polite">
        {isLoaded() ? 'Interactive map loaded.' : ''}
      </span>
    </div>
  )
}

export default ClickToLoadMap
