import { getNewsPost, newsPosts } from '~/generated/news'

export { getNewsPost, newsPosts }

export const formatNewsDate = (date: string) =>
  new Intl.DateTimeFormat('en-PH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Manila',
  }).format(new Date(`${date}T00:00:00+08:00`))
