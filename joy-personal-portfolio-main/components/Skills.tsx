"use client"

import React from "react"
import { headerLanguageMap, skillsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useLocale } from "next-intl"
import { useTranslations } from "next-intl"
import { FaCode, FaDatabase, FaServer, FaTools, FaLaptopCode, FaCogs } from "react-icons/fa"
import TiltOnHover from "./TiltOnHover"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView("Skills")
  const activeLocale = useLocale()
  const t = useTranslations("SkillsSection")
  
  // 技能分类
  const skillCategories = [
    {
      title: activeLocale === "zh" ? t("frontend_dev") : "Frontend Development",
      icon: FaLaptopCode,
      color: "from-blue-500 to-cyan-500",
      skills: ["HTML", "CSS", "JavaScript", "Vue2", "Vue3"]
    },
    {
      title: activeLocale === "zh" ? t("backend_dev") : "Backend Development", 
      icon: FaServer,
      color: "from-green-500 to-emerald-500",
      skills: ["Java", "C", "C++"]
    },
    {
      title: activeLocale === "zh" ? t("dev_tools") : "Development Tools",
      icon: FaTools,
      color: "from-purple-500 to-pink-500",
      skills: ["Git", "Github"]
    }
  ]
  
  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-[53rem] scroll-mt-28 text-center mb-28 relative"
    >
      {/* iOS风格的背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <SectionHeading>
        {activeLocale === "zh"
          ? headerLanguageMap["Skills"]
          : "My Skills"}
      </SectionHeading>
      
      {/* 技能分类展示 */}
      <div className="tech-grid mb-12">
        {skillCategories.map((category, index) => (
          <TiltOnHover key={index}>
            <div
              className="skill-card hover-lift"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color}/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ios-glow group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className={`text-2xl text-gradient`} />
              </div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="tech-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </TiltOnHover>
        ))}
      </div>

      {/* 所有技能标签 */}
      <div className="ios-glass rounded-[24px] p-8">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          {activeLocale === "zh" ? t("tech_stack_overview") : "Complete Tech Stack"}
        </h3>
        
        <div className="flex flex-wrap justify-center gap-3">
          {skillsData.map((skill, index) => (
            <motion.span
              className="tech-tag cursor-pointer"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* 代码能力指标 */}
      <div className="ios-glass rounded-[24px] p-8 mt-8 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          {activeLocale === "zh" ? t("code_quality_metrics") : "Code Quality Metrics"}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ios-glow">
              <span className="text-2xl font-bold text-green-500">95%</span>
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {activeLocale === "zh" ? t("code_quality") : "Code Quality"}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {activeLocale === "zh" ? t("clean_code") : "Clean, maintainable code"}
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ios-glow">
              <span className="text-2xl font-bold text-blue-500">90%</span>
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {activeLocale === "zh" ? t("performance") : "Performance"}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {activeLocale === "zh" ? t("optimized_scalable") : "Optimized & scalable"}
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-ios-glow">
              <span className="text-2xl font-bold text-purple-500">A+</span>
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {activeLocale === "zh" ? t("best_practices") : "Best Practices"}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {activeLocale === "zh" ? t("industry_standards") : "Industry standards"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
