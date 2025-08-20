"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaRocket } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel } from "react-icons/si"
import { useLocale } from "next-intl"
import { useTranslations } from "next-intl"

export default function Footer() {
  const activeLocale = useLocale()
  const t = useTranslations("FooterSection")

  return (
    <footer className="mb-10 px-4 text-center relative">
      {/* iOS风格的背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="ios-glass rounded-[24px] p-8 max-w-4xl mx-auto">
        {/* 技术栈展示 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3 shadow-ios-glow group-hover:scale-110 transition-transform duration-300">
              <FaReact className="text-xl text-blue-500" />
            </div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">React</p>
          </div>
          
          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3 shadow-ios-glow group-hover:scale-110 transition-transform duration-300">
              <SiNextdotjs className="text-xl text-green-500" />
            </div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Next.js</p>
          </div>
          
          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-3 shadow-ios-glow group-hover:scale-110 transition-transform duration-300">
              <SiTypescript className="text-xl text-purple-500" />
            </div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">TypeScript</p>
          </div>
          
          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 shadow-ios-glow group-hover:scale-110 transition-transform duration-300">
              <SiTailwindcss className="text-xl text-cyan-500" />
            </div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Tailwind</p>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-white/20 dark:border-gray-700/30 pt-6">
          <small className="mb-3 block text-sm text-gray-600 dark:text-gray-400">
            &copy; 2024 Yurk. {activeLocale === "zh" ? t("all_rights_reserved") : "All rights reserved"}.
          </small>
          
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
            <FaCode className="text-blue-500" />
            <span className="font-semibold">
              {activeLocale === "zh" ? t("built_with") : "Built with modern web technologies:"}
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <FaReact className="text-blue-500" />
              React
            </span>
            <span className="flex items-center gap-1">
              <SiNextdotjs className="text-green-500" />
              Next.js
            </span>
            <span className="flex items-center gap-1">
              <SiTypescript className="text-purple-500" />
              TypeScript
            </span>
            <span className="flex items-center gap-1">
              <SiTailwindcss className="text-cyan-500" />
              Tailwind CSS
            </span>
            <span className="flex items-center gap-1">
              <FaRocket className="text-orange-500" />
              Framer Motion
            </span>
            <span className="flex items-center gap-1">
              <SiVercel className="text-black dark:text-white" />
              Vercel
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
