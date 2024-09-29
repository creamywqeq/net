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
    Projects: '我的爱好',
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
        "title": "软件工程硕士学士",
        "location": "西南科技大学大学",
        "description": "在软件工程，计算机网络，网页后端领域深度研究，以学士学位在西南科技大学毕业",
        icon: React.createElement(LuGraduationCap),
        "date": "2022年9月 - 2026年6月"
    },
    {
        "title": "后端学员",
        "location": "西南科技大学移动工程实验室",
        "description": `设计了后端的工资计算文档，通过与李绘卓老师的跟进，更新了网站的数据库，整合了金蝶api的工资发放以及几大银行的工资计算功能`,
        "icon": React.createElement(FaJava),
        "date": "2024年6月 - 2025年12月"
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
        "title": "Digital media and light and shadow narrative expression",
        "title_zh": "数字媒体与光影叙事表达",
        "description":
            "Photography is a visual language that blends art and technology, through the skillful use of light, color, and composition, the moment is solidified into a timeless artistic expression. It is not only a record of reality, but also a deep portrayal of emotions and thoughts, which can show the rich layers of the world in subtle ways. Photographers combine subjective feelings with objective reality through the lens to capture beauty and stories that are difficult for ordinary people to perceive.",
        "desc_zh": "摄影是一门融合艺术与技术的视觉语言，通过光影、色彩与构图的巧妙运用，将瞬间凝固为永恒的艺术表达。它不仅仅是记录现实，更是对情感与思想的深度刻画，能在细微之处展现世界的丰富层次。摄影师通过镜头将主观感受与客观现实结合，捕捉到常人难以察觉的美与故事。",
        "tags": ["Sony", "Canon"],
        "imageUrl": moonImage,
        "projectUrl": "qq.com",
        "demoUrl": "https://baike.baidu.com/item/%E6%91%84%E5%BD%B1/6201#:~:text=%E6%91%84%E5%BD%B1%E6%98%AF%E6%8C%87%E4%BD%BF%E7%94%A8%E6%9F%90%E7%A7%8D%E4%B8%93%E9%97%A8%E8%AE%BE%E5%A4%87%E8%BF%9B%E8%A1%8C%E5%BD%B1%E5%83%8F%20%E8%AE%B0%E5%BD%95%20%E7%9A%84%E8%BF%87%E7%A8%8B%EF%BC%8C%E4%B8%80%E8%88%AC%E6%88%91%E4%BB%AC%E4%BD%BF%E7%94%A8%E6%9C%BA%E6%A2%B0%20%E7%85%A7%E7%9B%B8%E6%9C%BA%20%E6%88%96%E8%80%85%20%E6%95%B0%E7%A0%81%E7%85%A7%E7%9B%B8%E6%9C%BA,%E8%BF%9B%E8%A1%8C%E6%91%84%E5%BD%B1%E3%80%82%20%E6%9C%89%E6%97%B6%E6%91%84%E5%BD%B1%E4%B9%9F%E4%BC%9A%E8%A2%AB%E7%A7%B0%E4%B8%BA%20%E7%85%A7%E7%9B%B8%EF%BC%8C%E4%B9%9F%E5%B0%B1%E6%98%AF%E9%80%9A%E8%BF%87%E7%89%A9%E4%BD%93%E6%89%80%E5%8F%91%E5%B0%84%E6%88%96%E5%8F%8D%E5%B0%84%E7%9A%84%E5%85%89%E7%BA%BF%E4%BD%BF%20%E6%84%9F%E5%85%89%20%E4%BB%8B%E8%B4%A8%20%E6%9B%9D%E5%85%89%20%E7%9A%84%E8%BF%87%E7%A8%8B%E3%80%82"
    },
    {
        title: "ACM",
        title_zh: 'ACM',
        description:"The Olympiad of computing, the pressure programming of a computer, completes some specific task points and test points within a certain period of time",
        desc_zh: "计算机界的奥利匹克，计算机的压力编程，在一定时间内完成一些特定的任务点和测试点",
        tags: ["ACM", "SCPC"],
        imageUrl: scpcfunImage,
        projectUrl: 'https://scpc.fun/',
        demoUrl: 'https://baike.baidu.com/item/ACM%E5%9B%BD%E9%99%85%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E7%AB%9E%E8%B5%9B/3652262',
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
