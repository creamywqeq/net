"use client"

import { motion } from "framer-motion"
import { links } from "@/lib/data"
import Link from "next/link"
import clsx from "clsx"
import { headerLanguageMap } from "@/lib/data"
import { useActiveSectionContext } from "@/context/action-section-context"
import { useLocale } from "next-intl"

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  const activeLocale = useLocale()
  return (
    <header className="z-[999] relative">
      {/* iOS 26风格的毛玻璃背景 */}
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none 
        bg-white/10 dark:bg-gray-950/10 backdrop-blur-[20px] 
        border border-white/20 dark:border-gray-800/20
        shadow-2xl shadow-black/[0.08] dark:shadow-black/[0.3]
        sm:top-6 sm:h-[3.25rem] sm:w-[32rem] sm:rounded-[20px]
        before:absolute before:inset-0 before:rounded-[20px] before:bg-gradient-to-r before:from-white/5 before:to-white/10 before:dark:from-gray-800/5 before:dark:to-gray-800/10"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      ></motion.div>
      
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-600 dark:text-gray-300 sm:w-[initial] sm:flex-nowrap sm:gap-6">
          {links.map((link, index) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative break-keep"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex w-full items-center justify-center px-4 py-2.5 no-wrap rounded-[12px] transition-all duration-300 ease-out relative overflow-hidden group",
                  {
                    "text-gray-900 dark:text-white font-semibold": activeSection === link.name,
                    "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200": activeSection !== link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {/* iOS 26风格的活跃状态指示器 */}
                {link.name === activeSection && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-400/20 dark:to-purple-400/20 rounded-[12px] backdrop-blur-[10px] border border-white/20 dark:border-gray-700/30"
                    layoutId="activeSection"
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 30,
                      mass: 0.8
                    }}
                  />
                )}
                
                {/* 文字内容 */}
                <span className="relative z-10 transition-all duration-300">
                  {activeLocale === "zh"
                    ? headerLanguageMap[link.name]
                    : link.name}
                </span>
                
                {/* 悬停效果 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
