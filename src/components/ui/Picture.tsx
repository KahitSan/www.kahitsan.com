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
  const { src, alt, sizes, loading, decoding, width, height, ...rest } = props as PictureProps & Record<string, any>

  // Plain string URL — just render an <img>
  if (typeof src === "string") {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        width={width}
        height={height}
        {...rest}
      />
    )
  }

  // PictureData from vite-imagetools
  const sources = src.sources
  const img = src.img

  // Ensure AVIF <source> appears first (matches preload), then webp, then others
  const formatOrder = ["avif", "webp"]
  const sortedSources = sources
    ? [
        ...formatOrder.filter((f) => f in sources).map((f) => [f, sources[f]] as [string, string]),
        ...Object.entries(sources).filter(([f]) => !formatOrder.includes(f)),
      ]
    : []

  return (
    <picture>
      {sortedSources.map(([format, srcset]) => (
        <source srcset={srcset} type={`image/${format}`} sizes={sizes} />
      ))}
      <img
        src={img.src}
        alt={alt}
        width={width ?? img.w}
        height={height ?? img.h}
        loading={loading}
        decoding={decoding}
        {...rest}
      />
    </picture>
  )
}
