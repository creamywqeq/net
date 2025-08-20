"use client"

import React from "react"
import { headerLanguageMap, projectsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import SectionHeading from "./SectionHeading"
import Project from "./Project"
import { useLocale } from "next-intl"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { FaAngleRight, FaCode, FaGithub, FaRocket } from "react-icons/fa6"

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1)
  const activeLocale = useLocale()
  const t = useTranslations("ProjectsSection")

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 relative">
      {/* iOS风格的背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-fuchsia-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }} />
      </div>

      <SectionHeading>
        {activeLocale === "zh"
          ? headerLanguageMap["Projects"]
          : "My Projects"}
      </SectionHeading>

      {/* 代码能力展示横幅 */}
      <div className="ios-glass rounded-[24px] p-6 mb-12 mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ios-glow">
              <FaCode className="text-2xl text-blue-500" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {activeLocale === "zh" ? t("fullstack_dev") : "Full-Stack Development"}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {activeLocale === "zh" ? t("react_nextjs_vue") : "React, Next.js, Vue, Java, Node.js"}
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ios-glow">
              <FaGithub className="text-2xl text-green-500" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {activeLocale === "zh" ? t("version_control") : "Version Control"}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {activeLocale === "zh" ? t("git_github_cicd") : "Git, GitHub, CI/CD, Collaboration"}
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ios-glow">
              <FaRocket className="text-2xl text-purple-500" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {activeLocale === "zh" ? t("performance_scalability") : "Performance & Scalability"}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {activeLocale === "zh" ? t("optimization_architecture") : "Optimization, Architecture, Best Practices"}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
          >
            <Project {...project} />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          className="ios-button inline-flex items-center gap-2 group"
          target="_blank"
          href="https://github.com/creamywqeq"
        >
          {activeLocale === "zh" ? t("view_all_projects") : "View All Projects"}
          <FaAngleRight className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  )
}
