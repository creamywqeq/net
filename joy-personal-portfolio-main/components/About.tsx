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
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        // <p>{t("desc")}</p> //这样一段话没法分段
        <div className="flex flex-col gap-2">
          <div>我是一个热爱思考且极有韧性的人。</div>
          <div>
            从2022年到2026年，我在美丽的龙山西南科技大学度过了四个春夏秋冬。在这段时间里，我开启了后端开发的大门，并在移动互联网实验室度过了一段充实且难忘的经历，作为一名后端的选手，我在这段过程当中遇到了很多的困难，但是凭借着我的热爱还是依然坚持下来。
          </div>
          

          <div>
            目前，我在准备2025年秋招。同时在自己的 <a className="underline" href="https://www.xiaohongshu.com/user/profile/65f196c000000000050092a5?m_source=itab">小红书</a> 、个人博客
            和<a className="underline" href="https://space.bilibili.com/398496101/">b站</a>  记录技术和生活。
          </div>
        </div>
      ) : (
        <>
          <p className="mb-3">
          I am a thoughtful and resilient person.
          </p>

          <p className="mb-3">
          From 2022 to 2026, I spent four springs, summers, autumns and winters at the beautiful Yongsan Southwest University of Science and Technology. During this time, I opened the door to back-end development and spent a fulfilling and unforgettable experience in the mobile Internet lab.
          </p>

          {/* <p className="mb-3">
            I’m now doing my Masters in
            <span className="font-medium italic"> Computing and IT</span> at the{" "}
            <span className="italic underline">
              <a href="https://www.st-andrews.ac.uk/" target="_blank">
                University of St Andrews.{" "}
              </a>
            </span>
            I thrive on programming challenges and enjoy working with teams to
            solve complex problems. I specialize in technologies such as
            <span className="font-medium italic"> React, Next.js and Vue</span>,
            and have a solid understanding of{" "}
            <span className="font-medium italic">
              JavaScript, TypeScript and HTML/CSS
            </span>
            .{" "}
          </p> */}

          {/* <p>
            In my spare time, I enjoy exploring new technologies and building
            interesting projects. I also run my social media accounts on
            platforms like Bilibili and Xiaohongshu, where I share tech tips and
            tricks. And when I’m not at the computer, you’ll find me
            <span className="font-medium italic">
              {" "}
              cooking up a storm, catching a movie, or keeping fit with regular
              workouts.
            </span>
          </p> */}
        </>
      )}
    </motion.section>
  )
}
