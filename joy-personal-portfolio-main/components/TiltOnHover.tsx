"use client"

import React, { useRef } from "react"

type Props = {
  children: React.ReactNode
  maxTilt?: number // 最大倾斜角度，默认 6 度
}

export default function TiltOnHover({ children, maxTilt = 6 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = x / rect.width
    const py = y / rect.height
    const rx = (py - 0.5) * maxTilt * -2
    const ry = (px - 0.5) * maxTilt * 2
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)"
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-200 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  )
}
