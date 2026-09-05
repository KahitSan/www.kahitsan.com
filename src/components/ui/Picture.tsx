import type { JSX } from 'solid-js'
import { For, Show, splitProps } from 'solid-js'

export type PictureData = ImageToolsPicture

export interface PictureProps extends Omit<JSX.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: PictureData | string
  alt: string
  sizes?: string
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
}

export function Picture(props: PictureProps) {
  const [local, imageProps] = splitProps(props, [
    'src',
    'alt',
    'sizes',
    'loading',
    'decoding',
    'width',
    'height',
  ])
  return (
    <Show
      when={typeof local.src === 'string' ? undefined : local.src}
      keyed
      fallback={
        <img
          src={typeof local.src === 'string' ? local.src : local.src.img.src}
          alt={local.alt}
          loading={local.loading}
          decoding={local.decoding}
          width={local.width}
          height={local.height}
          {...imageProps}
        />
      }
    >
      {(picture) => {
        const order = ['avif', 'webp']
        const sources = picture.sources
        const sorted: Array<[string, string]> = sources
          ? [
              ...order
                .filter((format) => format in sources)
                .map((format) => [format, sources[format]] as [string, string]),
              ...Object.entries(sources).filter(([format]) => !order.includes(format)),
            ]
          : []
        return (
          <picture>
            <For each={sorted}>
              {([format, srcset]) => (
                <source srcset={srcset} type={`image/${format}`} sizes={local.sizes} />
              )}
            </For>
            <img
              src={picture.img.src}
              srcset={picture.img.srcset}
              sizes={picture.img.srcset ? local.sizes : undefined}
              alt={local.alt}
              width={local.width ?? picture.img.w}
              height={local.height ?? picture.img.h}
              loading={local.loading}
              decoding={local.decoding}
              {...imageProps}
            />
          </picture>
        )
      }}
    </Show>
  )
}
