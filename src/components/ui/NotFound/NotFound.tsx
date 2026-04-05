import type { Component, JSX } from 'solid-js'
import { splitProps } from 'solid-js'
import { useNavigate } from '@solidjs/router'
import Button from '../Button/Button'

export interface NotFoundProps extends JSX.HTMLAttributes<HTMLDivElement> {
  title?: string
  heading?: string
  message?: string
  buttonText?: string
  navigateTo?: string
  logo?: JSX.Element
  hideButton?: boolean
  onButtonClick?: () => void
}

const NotFound: Component<NotFoundProps> = (props) => {
  const [local, others] = splitProps(props, [
    'title',
    'heading',
    'message',
    'buttonText',
    'navigateTo',
    'logo',
    'hideButton',
    'onButtonClick',
    'class',
  ])

  const navigate = useNavigate()

  const handleButtonClick = () => {
    if (local.onButtonClick) {
      local.onButtonClick()
    } else {
      navigate(local.navigateTo || '/')
    }
  }

  return (
    <div class={`flex items-center justify-center min-h-screen ${local.class || ''}`} {...others}>
      <div class="text-center">
        {local.logo && (
          <div class="flex items-center justify-center mx-auto mb-6">{local.logo}</div>
        )}
        {local.title !== '' && (
          <h1 class="text-4xl md:text-6xl font-bold text-amber-500 mb-4">{local.title || '404'}</h1>
        )}
        <h3 class="text-xl md:text-2xl font-bold text-white mb-3">
          {local.heading || 'Page Not Found'}
        </h3>
        <p class="text-sm text-zinc-400 max-w-md mb-8">
          {local.message || "The page you're looking for doesn't exist or has been moved."}
        </p>
        {!local.hideButton && (
          <Button intent="primary" size="lg" onClick={handleButtonClick}>
            {local.buttonText || 'Go Back Home'}
          </Button>
        )}
      </div>
    </div>
  )
}

export default NotFound
