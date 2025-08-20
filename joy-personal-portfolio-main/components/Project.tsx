"use client"

import { useRef } from "react"
import { projectsData } from "@/lib/data"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { FaGithubSquare, FaExternalLinkAlt, FaCode, FaServer } from "react-icons/fa"
import Link from "next/link"
import { useLocale } from "next-intl"
import { useTranslations } from "next-intl"
import TiltOnHover from "./TiltOnHover"

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  desc_zh,
  title_zh,
  tags,
  imageUrl,
  projectUrl,
  demoUrl,
  showTechDetails = true,
  hasCode = true,
}: ProjectProps & { showTechDetails?: boolean; hasCode?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  const activeLocale = useLocale()
  const t = useTranslations("ProjectsSection")

  // 使用空值合并，避免字面量比较导致的TS错误，并明确默认显示策略
  const isCodeAvailable = hasCode ?? true
  const shouldShowTechDetails = showTechDetails ?? true

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-8 last:mb-0"
    >
      <TiltOnHover>
        <div className="ios-glass rounded-[24px] overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* 项目信息 */}
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
                  {demoUrl ? (
                    <Link href={demoUrl} target="_blank" className="hover:underline">
                      {activeLocale === "zh" ? title_zh : title}
                    </Link>
                  ) : (
                    <span>{activeLocale === "zh" ? title_zh : title}</span>
                  )}
                </h3>

                {/* 技术栈标签 */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/30 dark:border-blue-400/30 backdrop-blur-[10px]"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* 项目描述 */}
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  {activeLocale === "zh" ? desc_zh : description}
                </p>

                {/* 代码能力展示（可选) */}
                {shouldShowTechDetails && (
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                      <FaCode className="text-green-500 text-lg" />
                      <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {activeLocale === "zh" ? t("frontend") : "Frontend"}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {activeLocale === "zh" ? t("react_vue_typescript") : "React, Vue, TypeScript"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20">
                      <FaServer className="text-blue-500 text-lg" />
                      <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {activeLocale === "zh" ? t("backend") : "Backend"}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {activeLocale === "zh" ? t("java_nodejs_apis") : "Java, Node.js, APIs"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 项目链接（可选） */}
                {isCodeAvailable && (projectUrl || demoUrl) && (
                  <div className="flex gap-4 pt-4">
                    {isCodeAvailable && projectUrl && (
                      <Link
                        href={projectUrl}
                        target="_blank"
                        className="ios-button flex items-center gap-2 text-sm"
                      >
                        <FaGithubSquare />
                        {activeLocale === "zh" ? t("view_code") : "View Code"}
                      </Link>
                    )}
                    
                    {isCodeAvailable && demoUrl && (
                      <Link
                        href={demoUrl}
                        target="_blank"
                        className="ios-glass px-6 py-3 rounded-[16px] text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 flex items-center gap-2 border border-white/20 dark:border-gray-700/30"
                      >
                        <FaExternalLinkAlt />
                        {activeLocale === "zh" ? t("live_demo") : "Live Demo"}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* 项目图片 */}
            <div className="relative group">
              <motion.div
                className="relative overflow-hidden rounded-[20px] shadow-ios dark:shadow-ios-dark"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={imageUrl}
                  alt="Project I worked on"
                  quality={95}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* 图片覆盖层 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* 技术指标（可选） */}
                {isCodeAvailable && (
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-between items-center text-white text-sm">
                      <span className="bg-black/50 px-3 py-1 rounded-full backdrop-blur-[10px]">
                        {activeLocale === "zh" ? "性能: 95%" : "Performance: 95%"}
                      </span>
                      <span className="bg-black/50 px-3 py-1 rounded-full backdrop-blur-[10px]">
                        {activeLocale === "zh" ? "代码质量: A+" : "Code Quality: A+"}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </TiltOnHover>
    </motion.div>
  )
}
