import { JSX } from "solid-js"

interface PictureSource {
  src: string
  w?: number
  h?: number
}

interface PictureData {
  sources?: Record<string, string> // format -> srcset string
  img: PictureSource
}

interface PictureProps extends Omit<JSX.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: PictureData | string
  alt: string
  sizes?: string
  loading?: "lazy" | "eager"
  decoding?: "async" | "sync" | "auto"
}

/**
 * Responsive image component. Handles vite-imagetools output (PictureData)
 * or plain string URLs. Generates <source> tags for modern formats.
 */
export function Picture(props: PictureProps) {
  const src = props.src

  // Plain string URL — just render an <img>
  if (typeof src === "string") {
    return (
      <img
        src={src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        loading={props.loading}
        decoding={props.decoding}
        class={props.class}
        style={props.style}
      />
    )
  }

  // PictureData from vite-imagetools
  const sources = src.sources
  const img = src.img

  return (
    <picture>
      {sources && Object.entries(sources).map(([format, srcset]) => (
        <source srcset={srcset} type={`image/${format}`} sizes={props.sizes} />
      ))}
      <img
        src={img.src}
        alt={props.alt}
        width={props.width ?? img.w}
        height={props.height ?? img.h}
        loading={props.loading}
        decoding={props.decoding}
        class={props.class}
        style={props.style}
      />
    </picture>
  )
}
