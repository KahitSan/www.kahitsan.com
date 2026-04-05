import { createContext, useContext, createSignal, onMount, type ParentComponent } from 'solid-js'
import { isServer } from 'solid-js/web'

type Theme = 'dark' | 'light'

const ThemeContext = createContext<{
  theme: () => Theme
  toggleTheme: () => void
}>()

export const ThemeProvider: ParentComponent = (props) => {
  const [theme, setTheme] = createSignal<Theme>('dark')

  const applyTheme = (t: Theme) => {
    if (isServer) return
    const root = document.documentElement
    if (t === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }

  onMount(() => {
    const stored = localStorage.getItem('kahitsan-theme') as Theme | null
    const initial = stored || 'dark'
    setTheme(initial)
    applyTheme(initial)
  })

  const toggleTheme = () => {
    const next = theme() === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
    localStorage.setItem('kahitsan-theme', next)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
