import { expect, type Locator } from '@playwright/test'

interface ResponsivePictureExpectation {
  widths: number[]
  sizes: string
  metadataWidth: number
}

const parseWidths = (srcset: string) =>
  [...srcset.matchAll(/\s(\d+)w(?:,|$)/g)].map((match) => Number(match[1]))

export async function expectResponsivePicture(
  image: Locator,
  expectation: ResponsivePictureExpectation
) {
  await image.scrollIntoViewIfNeeded()
  await expect(image).toBeVisible()
  await expect
    .poll(() =>
      image.evaluate((element) => {
        const renderedImage = element as HTMLImageElement
        return renderedImage.complete && renderedImage.naturalWidth > 0
      })
    )
    .toBe(true)

  const picture = image.locator('xpath=parent::picture')
  await expect(picture).toHaveCount(1)

  for (const format of ['avif', 'webp']) {
    const source = picture.locator(`source[type="image/${format}"]`)
    await expect(source).toHaveCount(1)
    await expect(source).toHaveAttribute('sizes', expectation.sizes)

    const srcset = await source.getAttribute('srcset')
    expect(srcset).not.toBeNull()
    expect(parseWidths(srcset!)).toEqual(expectation.widths)
  }

  await expect(image).toHaveAttribute('width', String(expectation.metadataWidth))
  await expect(image).toHaveAttribute('height', /^\d+$/)

  await expect
    .poll(() =>
      picture.evaluate((element) => {
        const renderedImage = element.querySelector('img')!
        const avifSource = element.querySelector('source[type="image/avif"]')
        const candidates = (avifSource?.getAttribute('srcset') ?? '')
          .split(',')
          .map((candidate) => candidate.trim().split(/\s+/)[0])

        return (
          candidates.some(
            (candidate) => new URL(candidate, document.baseURI).href === renderedImage.currentSrc
          ) && renderedImage.currentSrc !== renderedImage.src
        )
      })
    )
    .toBe(true)
}
