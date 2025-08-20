"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import useSound from "use-sound"

type ThemeContextType = {
  theme: string
  toggleTheme: (x: number, y: number) => void
  isAnimating: boolean
  animationPosition: { x: number; y: number }
}

type ThemeContextProviderProp = {
  children: React.ReactNode
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeContextProvider = ({ children }: ThemeContextProviderProp) => {
  const [theme, setTheme] = useState("light")
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationPosition, setAnimationPosition] = useState({ x: 0, y: 0 })
  const [playLight] = useSound("/light-on.mp3", { volume: 0.5 })
  const [playDark] = useSound("/light-off.mp3", { volume: 0.5 })

  const toggleTheme = (x: number, y: number) => {
    setAnimationPosition({ x, y })
    setIsAnimating(true)
    
    // 延迟主题切换，让动画先开始
    setTimeout(() => {
      if (theme === "light") {
        setTheme("dark")
        playDark()
        window.localStorage.setItem("theme", "dark")
        document.documentElement.classList.add("dark")
      } else {
        setTheme("light")
        playLight()
        window.localStorage.setItem("theme", "light")
        document.documentElement.classList.remove("dark")
      }
      
      // 动画完成后重置状态
      setTimeout(() => {
        setIsAnimating(false)
      }, 600)
    }, 100)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    if (localTheme) {
      setTheme(localTheme)
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isAnimating, animationPosition }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider")
  }
  return context
}

export default ThemeContextProvider
