"use client"

import React, { useEffect, useRef, useState } from "react"

export default function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 })
  const rafRef = useRef<number | null>(null)
  const targetRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    const tick = () => {
      setPos(prev => {
        const dx = targetRef.current.x - prev.x
        const dy = targetRef.current.y - prev.y
        const nx = prev.x + dx * 0.18
        const ny = prev.y + dy * 0.18
        return { x: nx, y: ny }
      })
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] [mask-image:radial-gradient(200px_200px_at_var(--x)_var(--y),#000_20%,transparent_60%)]" style={{
      // 将坐标暴露给CSS自定义属性，以优化性能
      // @ts-ignore
      "--x": pos.x + "px",
      // @ts-ignore
      "--y": pos.y + "px",
    }}>
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-60 transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          width: 360,
          height: 360,
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.20), rgba(147,51,234,0.12), transparent)",
        }}
      />
    </div>
  )
}
