"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 relative"
      id="about"
    >
      {/* iOS风格的背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <SectionHeading>{sectionLan("about")}</SectionHeading>
      
      {activeLocale == "zh" ? (
        <div className="ios-glass rounded-[24px] p-8 space-y-6">
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            我是一个热爱思考且极有韧性的人。
          </div>
          
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            从2022年到2026年，我在美丽的龙山西南科技大学度过了四个春夏秋冬。在这段时间里，我开启了后端开发的大门，并在移动互联网实验室度过了一段充实且难忘的经历，作为一名后端的选手，我在这段过程当中遇到了很多的困难，但是凭借着我的热爱还是依然坚持下来。
          </div>
          
          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            目前，我在准备2026年秋招。同时在自己的 <a className="underline text-gradient hover:text-blue-600 transition-colors duration-300" href="https://www.xiaohongshu.com/user/profile/65f196c000000000050092a5?m_source=itab">小红书</a> 、个人博客
            和<a className="underline text-gradient hover:text-blue-600 transition-colors duration-300" href="https://space.bilibili.com/398496101/">b站</a>  记录技术和生活。
          </div>
        </div>
      ) : (
        <div className="ios-glass rounded-[24px] p-8 space-y-6">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I am a thoughtful and resilient person.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            From 2022 to 2026, I spent four springs, summers, autumns and winters at the beautiful Yongsan Southwest University of Science and Technology. During this time, I opened the door to back-end development and spent a fulfilling and unforgettable experience in the mobile Internet lab.
          </p>
        </div>
      )}
    </section>
  )
}
