"use client"

import React, { useEffect, useState } from "react"

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const p = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      setProgress(p)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 z-[70]">
      <div className="absolute inset-0 bg-transparent" />
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-r-full shadow-ios-glow transition-[width] duration-200 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
      />
    </div>
  )
}
