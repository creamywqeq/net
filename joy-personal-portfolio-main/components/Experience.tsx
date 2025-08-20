"use client"

import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import {
  experiencesData,
  experiencesDataZn,
  headerLanguageMap,
} from "@/lib/data"
import SectionHeading from "./SectionHeading"
import { motion } from "framer-motion"
import { useTheme } from "@/context/theme-context"
import { ExperienceLabel } from "./ExperienceLabel"
import { useLocale } from "next-intl"

export default function Experience({ isMobile }: { isMobile: boolean }) {
  const { theme } = useTheme()
  const variants = {
    left: {
      hidden: { x: -200, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    },
    right: {
      hidden: { x: 200, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    },
  }

  const activeLocale = useLocale()

  const experienceDataShown =
    activeLocale == "zh" ? experiencesDataZn : experiencesData

  return (
    <section id="experience" className="sm:mb-40 relative mb-20 scroll-mt-28">
      {/* iOS风格的背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-rose-400/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }} />
      </div>

      <ExperienceLabel />
      <SectionHeading>
        {" "}
        {activeLocale === "zh"
          ? headerLanguageMap["Experiences"]
          : "My Experiences"}
      </SectionHeading>
      
      {!isMobile ? (
        <VerticalTimeline lineColor={theme == "light" ? "#e9e9ea" : "#3b3d4f"}>
          {experienceDataShown.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={variants[index % 2 === 0 ? "right" : "left"]}
              className="mb-20"
            >
              <VerticalTimelineElement
                position={index % 2 === 0 ? "left" : "right"}
                visible={true}
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "20px",
                  textAlign: "left",
                  padding: "1.5rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid rgba(59, 130, 246, 0.6)",
                }}
                date={item.date}
                icon={<>{item.icon}</>}
                iconStyle={{
                  background: "rgba(59, 130, 246, 0.2)",
                  backdropFilter: "blur(10px)",
                  fontSize: "1.5rem",
                  border: "2px solid rgba(59, 130, 246, 0.3)",
                  boxShadow: "0 4px 16px rgba(59, 130, 246, 0.2)",
                }}
              >
                <h3 className="font-bold capitalize text-gradient">{item.title}</h3>
                <p className="font-normal !mt-0 text-gray-600 dark:text-gray-300">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-gray-200 leading-relaxed">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </motion.div>
          ))}
        </VerticalTimeline>
      ) : (
        <div className="flex flex-col gap-6">
          {experienceDataShown.map((item, index) => (
            <motion.div
              key={index}
              className="ios-glass rounded-[20px] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-[10px] border border-white/20 dark:border-gray-700/30 flex items-center justify-center shadow-ios-glow">
                {item.icon}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold capitalize text-lg text-gradient mb-2">{item.title}</h3>
                <p className="font-normal text-gray-600 dark:text-gray-300 mb-2">{item.location}</p>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{item.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}
