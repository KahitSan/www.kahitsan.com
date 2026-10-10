import type { Partnership } from '~/types/community'

const manilaDay = () => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Manila',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date())
  const value = (type: string) => parts.find((part) => part.type === type)?.value ?? ''
  return `${value('year')}-${value('month')}-${value('day')}`
}

export const getPartnershipStatus = (record: Partnership) => {
  if (!record.date.end) return record.status

  const today = manilaDay()
  if (today > record.date.end) return 'past'
  if (today < (record.date.renewed ?? record.date.start)) return 'upcoming'
  return 'current'
}

export const formatPartnershipDate = (day: string) =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Manila',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${day}T00:00:00+08:00`))
