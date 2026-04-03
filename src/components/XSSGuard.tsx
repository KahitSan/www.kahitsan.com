import type { Component, JSX } from 'solid-js'
import { createMemo } from 'solid-js'
import { useLocation } from '@solidjs/router'
import { detectXSS, getXSSMessage } from '~/lib/xssDetection'

interface XSSGuardProps {
  children: JSX.Element
  fallback: (message: string) => JSX.Element
}

export const XSSGuard: Component<XSSGuardProps> = (props) => {
  const location = useLocation()

  const isXSSAttempt = createMemo(() => {
    const fullUrl = location.pathname + location.search + location.hash
    return detectXSS(fullUrl)
  })

  return <>{isXSSAttempt() ? props.fallback(getXSSMessage()) : props.children}</>
}

export default XSSGuard
