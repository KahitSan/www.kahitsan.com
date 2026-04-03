import Button from '~/components/ui/Button/Button'

interface DiversionClosedProps {
  onViewPanganiban: () => void
}

export default function DiversionClosed(props: DiversionClosedProps) {
  return (
    <div class="text-center py-16">
      <div class="text-6xl mb-4 opacity-50">🚧</div>
      <h2 class="text-2xl font-bold text-zinc-300 mb-4">Diversion Road is Currently Closed</h2>
      <p class="text-zinc-400 mb-8 max-w-md mx-auto">
        We're not accepting bookings at this location at the moment. Please check our Panganiban
        Drive location for available spaces.
      </p>
      <Button onClick={props.onViewPanganiban} intent="primary" size="md">
        View Panganiban Drive
      </Button>
    </div>
  )
}
