"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithubSquare } from "react-icons/fa"
import { Source_Code_Pro } from "next/font/google"
import { useLocale } from "next-intl"
import { useSectionInView } from "@/lib/hooks"
import { TypeAnimation } from "react-type-animation"
import { useActiveSectionContext } from "@/context/action-section-context"
import { useTranslations } from "next-intl"
import useSound from "use-sound"

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "400" })

export default function Intro() {
  const { ref } = useSectionInView("Home")
  const activeLocale = useLocale()
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const t = useTranslations("IntroSection")
  const [playHover] = useSound("/bubble.wav", { volume: 0.5 })

  return (
    <section
      ref={ref}
      className="mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-[7rem] relative"
      id="home"
    >
      {/* iOS风格的背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          {/* iOS风格的毛玻璃头像容器 */}
          <div className="relative p-2 ios-glass rounded-[24px]">
            <Image
              src="/proflie.jpg"
              alt="developer-image"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-[20px] object-cover shadow-ios dark:shadow-ios-dark"
            />
          </div>
          
          {/* iOS风格的问候表情 */}
          <span
            onMouseEnter={() => {
              console.log("sound")
              playHover()
            }}
            className="absolute text-4xl bottom-2 right-2 ios-glass rounded-full p-2 shadow-ios dark:shadow-ios-dark cursor-pointer hover:scale-125 hover:rotate-15 transition-all duration-300"
          >
            👋
          </span>
        </div>
      </div>

      <div className="mb-10 mt-4 px-6 sm:px-8 text-2xl font-medium !leading-[1.6] sm:text-4xl relative">
        {/* iOS风格的问候语 */}
        <span className={`${sourceCodePro.className} text-sm tracking-wider text-gradient font-medium`}>
          {t("hello_im")}
        </span>
        
        {/* iOS风格的名字 */}
        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-gradient">
          {t("name")}
        </h1>

        {/* iOS风格的打字动画容器 */}
        <div className="ios-glass rounded-[24px] p-8 sm:p-10 mb-8 mx-auto max-w-2xl">
          <span
            className={`${sourceCodePro.className} text-sm tracking-wider text-gray-600 dark:text-gray-300 mb-2 block`}
          >
            {activeLocale === "zh" ? t("im_a") : "I'm a"}{" "}
          </span>
          <h2
            id="name"
            className="text-center text-2xl sm:text-4xl lg:text-3xl lg:leading-normal font-extrabold text-gradient"
          >
            <TypeAnimation
              sequence={
                activeLocale === "zh" 
                  ? [
                      "后端开发员",
                      1000,
                      "软件开发工程师",
                      1000,
                    ]
                  : [
                      "Backend Developer",
                      1000,
                      "Software Engineer",
                      1000,
                    ]
              }
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
        </div>
        
        {/* iOS风格的介绍文字 */}
        <p className="ios-glass rounded-[20px] p-6 sm:p-7 text-gray-700 dark:text-gray-300">
          {t("short_intro")}
        </p>
        
        {activeLocale === "en" && (
          <p className="ios-glass rounded-[20px] p-6 sm:p-7 mt-5 text-gray-700 dark:text-gray-300">
            My focus is{" "}
            <span className="text-gradient font-bold">Full-Stack Development</span>.
          </p>
        )}

        {activeLocale === "zh" && (
          <p className="ios-glass rounded-[20px] p-6 sm:p-7 mt-5 text-gray-700 dark:text-gray-300">
            {t("focus_photography")}
          </p>
        )}
      </div>

      {/* iOS风格的按钮组 */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 px-6 text-lg font-medium mt-4">
        <a
          className="ios-button inline-flex items-center gap-2"
          href="https://github.com/creamywqeq"
          target="_blank"
        >
          <FaGithubSquare />
          GitHub
        </a>
        
        <a
          className="ios-glass px-8 py-4 rounded-[18px] text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 flex items-center gap-2"
          href=""
          target="_blank"
        >
          {t("blog")}
        </a>
      </div>
    </section>
  )
}
