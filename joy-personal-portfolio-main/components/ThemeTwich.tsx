"use client"

import { useTheme } from "@/context/theme-context"
import React from "react"
import { BsMoon, BsSun } from "react-icons/bs"

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // 转换为相对于视口的坐标
    const viewportX = e.clientX
    const viewportY = e.clientY
    
    toggleTheme(viewportX, viewportY)
  }

  return (
    <button
      className="w-[2.5rem] h-[2.5rem] bg-opacity-80 flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all relative overflow-hidden"
      onClick={handleClick}
    >
      <span className="sr-only">change dark mode</span>
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  )
}
