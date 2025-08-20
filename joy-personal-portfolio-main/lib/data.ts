import React from "react";
import { FaJava, FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuActivity, LuGraduationCap } from "react-icons/lu";
import moonImage from '@/public/moon1.png';
import breadditImage from "@/public/breaddit.png";
import gameHubImage from "@/public/game-hub.png";
import scpcfunImage from "@/public/scpcfun.png";
import visualizationImage from "@/public/d3.png";
import { FaC } from "react-icons/fa6";
import { IM_Fell_English } from "next/font/google";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '相关能力展示',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    {
        title: "Master's degree in Software Engineering",
        location: "University of Southwest University of Science and Technology",
        description:
        "He studied in-depth research in the fields of software engineering, computer networking, and web backend, and graduated from Southwest University of Science and Technology with a bachelor's degree",
        icon: React.createElement(LuGraduationCap),
        date: "2022.7 - 2026.9 ",
    },
    {
        title: "Frontend Intern",
        location: React.createElement(
            "span", {},
            // React.createElement("a", {
            //     href: "https://www.nio.com/",
            //     style: { textDecoration: 'underline' },
            //     target: "_blank"
            // }, "NIO Inc."),
            " Mobile Engineering Laboratory, Southwest University of Science and Technology"
        ),
        description:
            "The back-end payroll calculation document was designed, and through the follow-up with Ms. Li Huizhuo, the database of the website was updated, and the payroll payment of Kingdee API and the payroll calculation functions of several major banks were integrated",
        icon: React.createElement(FaJava),
        date: "2024.4 - 2025.11",
    },
    {
        title: "Mianyang Hospital Companion System",
        location: "Mobile Engineering Laboratory, Southwest University of Science and Technology",
        description:
            "To solve the problems of uneven distribution of companion resources for patients with difficult self-care in multiple hospitals in Mianyang City and information silos, independently designed and developed a B/S architecture resource allocation center. The system realized cross-institutional personnel information synchronization, intelligent dispatching, data dashboard and other functions, improving the utilization efficiency of regional medical resources.",
        icon: React.createElement(FaJava),
        date: "2023.2 - 2024.12",
    },
    {
        title: "Intelligent Instant Messaging System",
        location: "Southwest University of Science and Technology",
        description:
            "Independently designed and implemented a Java-based C/S architecture instant messaging system, simulating QQ core functions, including user management, one-on-one/group chat, online status synchronization, etc. Used thread pool and NIO model to handle high-concurrency client connections and message forwarding, and encapsulated message packets through custom protocols to ensure communication efficiency and reliability.",
        icon: React.createElement(FaJava),
        date: "2023.6 - 2024.2",
    },
    {
        title: "CSP200",
        location: "China",
        description:
            "CSP200",
        icon: React.createElement(FaC),
        date: "2022 May - 2022 July",
    },
    // {
    //     title: "BA in Digital Publishing",
    //     location: "Wuhan University, China",
    //     description:
    //         "Graduated with a Bachelor of Arts in Digital Publishing, securing a GPA of 3.81/4.0. Gained foundational knowledge in digital media and publishing technologies.",
    //     icon: React.createElement(LuGraduationCap),
    //     date: "2019 Sep - 2023 Jun",
    // },

]

export const experiencesDataZn = [
    {
        "title": "即将软件工程学士",
        "location": "西南科技大学",
        "description": "在软件工程，计算机网络，网页后端领域深度研究，即将以学士学位在西南科技大学毕业",
        icon: React.createElement(LuGraduationCap),
        "date": "2022年9月 - 2026年6月"
    },
    {
        "title": "绵阳市医院陪护系统",
        "location": "西南科技大学移动工程实验室",
        "description": `为解决绵阳市多家医院难以自理病人陪护资源分配不均、信息孤岛等问题，独立设计并开发了一个B/S架构的资源调配中心。系统实现了跨机构的人员信息同步、智能派单、数据看板等功能，提升了区域医疗资源的利用效率。`,
        "icon": React.createElement(FaJava),
        "date": "2023年2月 - 2024年12月"
    },
    {
        "title": "智能即时通讯系统",
        "location": "西南科技大学",
        "description": `独立设计并实现了一个基于Java的C/S架构即时通讯系统，模拟QQ核心功能，包括用户管理、单聊/群聊、在线状态同步等。采用线程池与NIO模型处理高并发客户端连接与消息转发，通过自定义协议封装消息包，保障通信效率与可靠性。`,
        "icon": React.createElement(FaJava),
        "date": "2023年6月 - 2024年2月"
    },
    {
        "title": "CSP200分",
        "location": "西南科技大学",
        "description": "在2023年的csp考试中拿到200分",
        "icon": React.createElement(FaC),
        "date": "2023年4月 - 2023年5月"
    },
    {
        "title": "英语四级",
        "location": "西南科技大学",
        "description": "以461分拿到英语四级证书",
        "icon": React.createElement(LuActivity),
        "date": "2022年9月 - 2022年10月"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
	{
		"title": "Personal Portfolio Website",
		"title_zh": "个人介绍网页",
		"description":
			"A modern, responsive personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features include internationalization (i18n), smooth animations, iOS-style frosted glass effects, and a professional design that showcases my development skills and experience.",
		"desc_zh": "一个现代化的响应式个人介绍网页，使用Next.js、React、TypeScript和Tailwind CSS构建。功能包括国际化(i18n)、流畅动画、iOS风格毛玻璃效果，以及展示我开发技能和经验的专业设计。",
		"tags": ["Next.js", "React", "TypeScript", "Tailwind CSS"],
		"imageUrl": moonImage,
		"projectUrl": "https://github.com/creamywqeq/net",
		"demoUrl": "https://net-red-one.vercel.app"
	},
	{
		title: "ACM",
		title_zh: 'ACM',
		description:"Participated in multiple on-campus ACM competitions and won multiple awards in school and college competitions",
		desc_zh: "在校内多次参加校内acm比赛并且多次拿到校赛院赛多个奖项",
		tags: ["ACM", "SCPC"],
		imageUrl: scpcfunImage,
		projectUrl: '',
		demoUrl: '',
		showTechDetails: false,
		hasCode: false,
	},
]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "Vue2",
    "Vue3",
    "Git",
    "Github",
    "Java",
    "C",
    "C++",
] 
