import { createSignal, createEffect } from 'solid-js'
import { useNavigate, useParams, useLocation } from '@solidjs/router'
import MapPin from 'lucide-solid/icons/map-pin'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Dropdown from '~/components/ui/Dropdown/Dropdown'
import FLOOR_PLAN_IMAGE from '~/assets/floor_plan.png'
import PanganibanCanvas from './SpacesPage/Panganiban/Canvas'
import PanganibanPricing from './SpacesPage/Panganiban/Pricing'
import DiversionClosed from './SpacesPage/Diversion'

export default function SpacesPage() {
  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()
  const [selectedSpace, setSelectedSpace] = createSignal('panganiban')

  const isPricingView = () => location.pathname.includes('/pricing')

  createEffect(() => {
    if (params.spaceName) {
      setSelectedSpace(params.spaceName)
    }
  })

  const spaces = [
    {
      id: 'panganiban',
      name: 'Panganiban Drive',
      status: 'open',
      address: 'Panganiban Drive, Naga City',
    },
    {
      id: 'diversion',
      name: 'Diversion Road',
      status: 'closed',
      address: 'Diversion Road, Naga City',
    },
  ]

  const dropdownItems = spaces.map((space) => ({
    id: space.id,
    label: space.name,
    description: space.address,
    status: space.status as 'open' | 'closed',
    badge: space.status === 'closed' ? 'CLOSED' : undefined,
  }))

  const handleShowPricing = () => navigate(`/${selectedSpace()}/pricing`)
  const handleBackToSpaces = () => navigate('/spaces')
  const handleViewPanganiban = () => {
    setSelectedSpace('panganiban')
    navigate(isPricingView() ? '/panganiban/pricing' : '/spaces')
  }

  return (
    <div class="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
      <Header />

      <div class="relative py-17 px-4">
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            class="absolute top-10 left-10 w-80 h-80 opacity-10"
            style={{ background: 'radial-gradient(circle, rgba(201, 169, 97, 0.3) 0%, transparent 70%)' }}
          />
        </div>

        {!isPricingView() ? (
          <div class="relative z-10 max-w-7xl mx-auto">
            <div class="text-center mb-6 pt-7">
              <h1 class="text-3xl md:text-4xl font-bold mb-2">
                Our <span class="gradient-text">Spaces</span>
              </h1>
              <p class="text-base md:text-lg text-zinc-400 mb-4">
                Explore our workspace layout and available areas
              </p>
              <Dropdown
                items={dropdownItems}
                value={selectedSpace()}
                icon={MapPin}
                onSelect={(item) => setSelectedSpace(item.id)}
                minWidth="280px"
              />
            </div>

            {selectedSpace() === 'panganiban' && (
              <PanganibanCanvas
                floorPlanImage={FLOOR_PLAN_IMAGE}
                onShowPricing={handleShowPricing}
              />
            )}

            {selectedSpace() === 'diversion' && (
              <DiversionClosed onViewPanganiban={handleViewPanganiban} />
            )}
          </div>
        ) : (
          <PanganibanPricing onBack={handleBackToSpaces} />
        )}
      </div>

      <Footer />
    </div>
  )
}
