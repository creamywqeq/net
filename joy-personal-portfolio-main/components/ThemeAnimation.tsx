"use client"

import { useTheme } from "@/context/theme-context"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"

export default function ThemeAnimation() {
  const { isAnimating, animationPosition, theme } = useTheme()

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          {/* 主扩散圆圈 - 苹果风格 */}
          <motion.div
            className={`absolute rounded-full ${
              theme === "light" 
                ? "bg-gray-900" 
                : "bg-gray-50"
            }`}
            style={{
              left: animationPosition.x,
              top: animationPosition.y,
              transform: "translate(-50%, -50%)"
            }}
            initial={{ 
              width: 0, 
              height: 0,
              opacity: 0.95,
              scale: 0
            }}
            animate={{ 
              width: "700vmax", 
              height: "700vmax",
              opacity: 0,
              scale: 1
            }}
            transition={{
              duration: 0.85,
              ease: [0.25, 0.1, 0.25, 1], // 苹果风格的缓动函数
              opacity: {
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1]
              },
              scale: {
                duration: 0.85,
                ease: [0.25, 0.1, 0.25, 1]
              }
            }}
          />
          
          {/* 精致的边缘光晕效果 */}
          <motion.div
            className={`absolute rounded-full ${
              theme === "light" 
                ? "bg-gradient-radial from-gray-800/40 via-gray-900/20 to-transparent" 
                : "bg-gradient-radial from-gray-100/40 via-gray-50/20 to-transparent"
            }`}
            style={{
              left: animationPosition.x,
              top: animationPosition.y,
              transform: "translate(-50%, -50%)"
            }}
            initial={{ 
              width: 0, 
              height: 0,
              opacity: 0.3,
              scale: 0
            }}
            animate={{ 
              width: "800vmax", 
              height: "800vmax",
              opacity: 0,
              scale: 1
            }}
            transition={{
              duration: 1.1,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.05
            }}
          />
          
          {/* 微妙的波纹效果 */}
          <motion.div
            className={`absolute rounded-full border ${
              theme === "light" 
                ? "border-gray-700/20" 
                : "border-gray-300/20"
            }`}
            style={{
              left: animationPosition.x,
              top: animationPosition.y,
              transform: "translate(-50%, -50%)"
            }}
            initial={{ 
              width: 0, 
              height: 0,
              opacity: 0.2,
              scale: 0
            }}
            animate={{ 
              width: "900vmax", 
              height: "900vmax",
              opacity: 0,
              scale: 1
            }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.1
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
