interface ImageToolsPictureSource {
  src: string
  srcset?: string
  w?: number
  h?: number
}

interface ImageToolsPicture {
  sources?: Readonly<Record<string, string>>
  img: ImageToolsPictureSource
}

declare module '*&as=picture' {
  const picture: ImageToolsPicture
  export default picture
}
