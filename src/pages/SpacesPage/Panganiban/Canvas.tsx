import { createEffect, createSignal, onCleanup, onMount } from 'solid-js'
import ZoomIn from 'lucide-solid/icons/zoom-in'
import ZoomOut from 'lucide-solid/icons/zoom-out'
import Maximize from 'lucide-solid/icons/maximize'
import Minimize from 'lucide-solid/icons/minimize'
import RotateCcw from 'lucide-solid/icons/rotate-ccw'
import Button from '~/components/ui/Button/Button'

interface PanganibanCanvasProps {
  floorPlanImage: string
  onShowPricing: () => void
}

export default function PanganibanCanvas(props: PanganibanCanvasProps) {
  const [canvasRef, setCanvasRef] = createSignal<HTMLCanvasElement | null>(null)
  const [scale, setScale] = createSignal(1)
  const [translateX, setTranslateX] = createSignal(0)
  const [translateY, setTranslateY] = createSignal(0)
  const [isDragging, setIsDragging] = createSignal(false)
  const [lastMouseX, setLastMouseX] = createSignal(0)
  const [lastMouseY, setLastMouseY] = createSignal(0)
  const [isFullscreen, setIsFullscreen] = createSignal(false)

  let img: HTMLImageElement | null = null
  let ctx: CanvasRenderingContext2D | null = null

  const loadFloorPlan = () => {
    img = new Image()
    img.src = props.floorPlanImage
    img.onload = () => {
      const canvas = canvasRef()
      if (!canvas) return
      ctx = canvas.getContext('2d')
      resizeCanvas(canvas)
      fitToCanvas()
    }
  }

  onMount(() => {
    loadFloorPlan()
    const handleResize = () => {
      const canvas = canvasRef()
      if (canvas) resizeCanvas(canvas)
    }
    window.addEventListener('resize', handleResize)
    onCleanup(() => window.removeEventListener('resize', handleResize))
  })

  const resizeCanvas = (canvas: HTMLCanvasElement) => {
    const container = canvas.parentElement
    if (!container) return
    const { width, height } = container.getBoundingClientRect()
    canvas.width = width
    canvas.height = height
    drawCanvas()
  }

  const fitToCanvas = () => {
    if (!ctx || !img) return
    const canvasWidth = ctx.canvas.width
    const canvasHeight = ctx.canvas.height
    const scaleX = canvasWidth / img.width
    const scaleY = canvasHeight / img.height
    setScale(Math.min(scaleX, scaleY))
    setTranslateX(canvasWidth / 2)
    setTranslateY(canvasHeight / 2)
    drawCanvas()
  }

  const drawCanvas = () => {
    if (!ctx || !img) return
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.save()
    ctx.translate(translateX(), translateY())
    ctx.scale(scale(), scale())
    ctx.drawImage(img, -img.width / 2, -img.height / 2)
    ctx.restore()
  }

  const handleMouseDown = (e: MouseEvent) => {
    if (e.button !== 0) return
    setIsDragging(true)
    setLastMouseX(e.clientX)
    setLastMouseY(e.clientY)
    e.preventDefault()
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging()) return
    setTranslateX(translateX() + e.clientX - lastMouseX())
    setTranslateY(translateY() + e.clientY - lastMouseY())
    setLastMouseX(e.clientX)
    setLastMouseY(e.clientY)
    drawCanvas()
  }

  const handleMouseUp = () => setIsDragging(false)

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    const newScale = Math.min(Math.max(scale() * delta, 0.5), 3)
    const canvas = canvasRef()
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const oldScale = scale()
    const worldX = (mouseX - translateX()) / oldScale
    const worldY = (mouseY - translateY()) / oldScale
    setScale(newScale)
    setTranslateX(mouseX - worldX * newScale)
    setTranslateY(mouseY - worldY * newScale)
    drawCanvas()
  }

  const toggleFullscreen = () => {
    const container = canvasRef()?.parentElement?.parentElement
    if (!container) return
    if (!isFullscreen()) {
      container.requestFullscreen().then(() => setIsFullscreen(true))
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false))
    }
  }

  const zoomIn = () => {
    setScale(Math.min(scale() * 1.2, 3))
    drawCanvas()
  }

  const zoomOut = () => {
    setScale(Math.max(scale() * 0.8, 0.5))
    drawCanvas()
  }

  createEffect(() => {
    const canvas = canvasRef()
    if (!canvas) return
    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseup', handleMouseUp)
    canvas.addEventListener('wheel', handleWheel, { passive: false })
    onCleanup(() => {
      canvas.removeEventListener('mousedown', handleMouseDown)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseup', handleMouseUp)
      canvas.removeEventListener('wheel', handleWheel)
    })
  })

  createEffect(() => loadFloorPlan())
  createEffect(() => drawCanvas())

  return (
    <>
      <div class="w-full h-[600px] bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-lg overflow-hidden relative">
        <div class="absolute top-4 right-4 z-10 flex gap-2 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-2">
          <button onClick={zoomIn} class="p-2 rounded hover:bg-zinc-700 transition-all" title="Zoom In">
            <ZoomIn size={18} class="text-white" />
          </button>
          <button onClick={zoomOut} class="p-2 rounded hover:bg-zinc-700 transition-all" title="Zoom Out">
            <ZoomOut size={18} class="text-white" />
          </button>
          <button onClick={fitToCanvas} class="p-2 rounded hover:bg-zinc-700 transition-all" title="Fit to Screen">
            <RotateCcw size={18} class="text-white" />
          </button>
          <button
            onClick={toggleFullscreen}
            class="p-2 rounded hover:bg-zinc-700 transition-all"
            title={isFullscreen() ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen() ? <Minimize size={18} class="text-white" /> : <Maximize size={18} class="text-white" />}
          </button>
        </div>
        <canvas
          ref={setCanvasRef}
          class="w-full h-full cursor-grab active:cursor-grabbing"
          style={{ 'touch-action': 'none' }}
        />
      </div>
      <div class="flex justify-center mt-8">
        <Button onClick={props.onShowPricing} intent="primary" size="lg">
          Show Pricing
        </Button>
      </div>
    </>
  )
}
