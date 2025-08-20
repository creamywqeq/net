# 个人作品集（Next.js + TypeScript）

一个现代、优雅、强交互的个人作品集网站。项目采用 Next.js 14、TypeScript、Tailwind CSS 与 Framer Motion，整体视觉以 iOS 质感为参考，包含毛玻璃、柔和阴影、渐变文字、丝滑交互与中文/英文双语切换。

代码仓库：`https://github.com/creamywqeq/net`

> 提示：本项目默认中文为主界面（zh），并保证中文界面仅展示中文内容。

---

## 特性概览

- iOS 风格视觉语言
  - 毛玻璃卡片（ios-glass）、柔和阴影（shadow-ios）、渐变文字（text-gradient）
  - 自定义动画：浮动、发光、缓动、旋转、脉冲
- 高级交互
  - 主题切换“从点击点向全屏扩散”的苹果风格动画（ThemeAnimation）
  - 光标聚光灯跟随（CursorSpotlight）
  - 顶部滚动进度条（ScrollProgressBar）
  - 卡片悬浮轻微 3D 倾斜（TiltOnHover）
- 完整的模块化页面
  - 首页（Intro）
  - 关于（About）
  - 项目（Projects + Project）
  - 技能（Skills）
  - 经历（Experience）
  - 头部导航（Header）与页脚（Footer）
- 国际化 i18n（next-intl）
  - `messages/zh.json` 提供中文文案，英文自动对应
  - 中文界面仅展示中文内容
- 组件化数据管理
  - `lib/data.ts` 统一管理导航、经历、项目与技能数据
  - ACM 项目无代码示例时自动隐藏“前端/后端介绍”和“查看代码/在线演示”
- 打字动画（react-type-animation）
  - 中英文分别定制：如“后端开发员 / 软件开发工程师”、“Backend Developer / Software Engineer”

---

## 技术栈

- 框架：Next.js 14（React 18）
- 语言：TypeScript 5
- 样式：Tailwind CSS 3（自定义动画、阴影、毛玻璃、渐变）
- 动画：Framer Motion 11
- 国际化：next-intl
- 其它：
  - react-type-animation（打字动画）
  - react-vertical-timeline-component（时间轴）
  - react-icons（图标）
  - use-sound（交互音效）

---

## 本地运行

### 1. 环境要求
- Node.js ≥ 18.17（建议 18 LTS 或 20 LTS）
- npm、pnpm 或 yarn

### 2. 克隆与安装
```bash
# 克隆仓库
git clone https://github.com/creamywqeq/net.git

# 进入项目目录（注意：请进入子目录）
cd net/joy-personal-portfolio-main

# 安装依赖
npm install
```

### 3. 启动开发环境
```bash
npm run dev
```
默认端口为 3000，如被占用会自动尝试 3001。

### 4. 生产构建与启动
```bash
npm run build
npm run start
```

---

## 目录结构（关键部分）

```
joy-personal-portfolio-main/
├─ app/[locale]/
│  ├─ layout.tsx            # 根布局：主题/语言/Header/Footer/交互注入
│  └─ globals.css           # 全局样式、iOS 风格工具类与动画
├─ components/
│  ├─ Header.tsx            # 顶部导航（iOS 质感、滑动选择）
│  ├─ Intro.tsx             # 首页（头像、打字动画、文案与按钮）
│  ├─ About.tsx             # 关于我
│  ├─ Projects.tsx          # 项目列表
│  ├─ Project.tsx           # 单个项目卡片（条件渲染按钮/指标）
│  ├─ Skills.tsx            # 技能板块（分类卡片、标签云、指标）
│  ├─ Experience.tsx        # 经历时间轴（桌面与移动）
│  ├─ SectionHeading.tsx    # 统一风格的分节标题
│  ├─ Footer.tsx            # 页脚（技术栈展示）
│  ├─ ThemeTwich.tsx        # 主题切换按钮
│  ├─ ThemeAnimation.tsx    # 主题切换苹果风格扩散动画
│  ├─ CursorSpotlight.tsx   # 光标聚光灯交互
│  ├─ ScrollProgressBar.tsx # 顶部滚动进度条
│  └─ TiltOnHover.tsx       # 卡片悬浮轻微 3D 倾斜
├─ context/
│  └─ theme-context.tsx     # 主题状态、扩散动画坐标
├─ lib/
│  ├─ data.ts               # 导航、经历、项目、技能等数据源
│  ├─ hooks.ts              # in-view 等自定义 hooks
│  └─ utils.ts              # 工具方法
├─ messages/
│  └─ zh.json               # 中文文案
├─ public/                  # 静态资源
├─ tailwind.config.ts       # Tailwind 扩展（动画、阴影、径向渐变等）
└─ package.json
```

---

## 关键特性与实现说明

### 1) iOS 风格样式
- 统一封装在 `globals.css`：
  - `.ios-glass` 毛玻璃卡片
  - `.shadow-ios`/`.shadow-ios-dark`/`.shadow-ios-glow` 阴影
  - `.text-gradient` 渐变文字
  - 自定义动画类（float/glow/bounce-subtle/rotate-slow/pulse-slow）
- 在 `tailwind.config.ts` 中扩展了 keyframes、animation、boxShadow、backdropBlur、backgroundImage（径向渐变）

### 2) 主题切换扩散动画（Apple 风格）
- `ThemeSwitch` 捕获点击位置，传入 `theme-context`
- `ThemeAnimation` 使用 Framer Motion 创建从点击点向全屏扩散的单层圆形动画，配合苹果风格缓动（cubic-bezier）与柔和光晕

### 3) 页面交互增强
- `CursorSpotlight`：光标聚光灯遮罩+柔和发光
- `ScrollProgressBar`：顶部渐变进度条；视觉轻盈
- `TiltOnHover`：用于项目与技能分类卡片的轻微 3D 倾斜反馈

### 4) 国际化（next-intl）
- 中文文案集中在 `messages/zh.json`
- 组件中通过 `useLocale()` 与 `useTranslations()` 对应渲染中英内容
- 中文界面仅展示中文文案（含 Intro、Skills、Projects、Footer 等）

### 5) 数据驱动的项目卡片（条件渲染）
- `lib/data.ts` 中可为项目设置：
  - `projectUrl` / `demoUrl`：为空时自动隐藏“查看代码/在线演示”
  - `showTechDetails`：为 `false` 时隐藏“前端/后端”介绍（例如 ACM 项目）
  - `hasCode`：为 `false` 时隐藏图片悬浮的“性能/代码质量”指标

---

## 常见问题（Troubleshooting）

- ENOENT: `Could not read package.json`
  - 需先进入子目录：`cd joy-personal-portfolio-main` 再执行 `npm run dev`
- 端口占用：`Port 3000 is in use, trying 3001 instead.`
  - 非错误，可直接使用 3001
- Windows 构建缓存权限问题：`EPERM: operation not permitted, .next/trace`
  - 删除缓存后重试：PowerShell 执行 `Remove-Item -Recurse -Force .next`
- Tailwind 无效类
  - 请避免使用不存在的工具类（例如 `hover:y-[-2px]`），已经替换为合法属性
- React Hydration 嵌套错误（如 h1 嵌套 h1）
  - 组件语义已修正；如自定义修改组件结构，确保标签语义正确
- Framer Motion SSR 报错（`createContext is not a function`）
  - 仅在客户端使用动画容器；必要时移除 SSR 环境中不兼容的 motion 包裹

---

## 部署

- 推荐使用 Vercel 部署（与 Next.js 原生适配）：
  1. 连接 GitHub 仓库
  2. Root 目录选择 `joy-personal-portfolio-main`
  3. 自动检测 Next.js 并构建
  4. 环境变量（如有）在 Vercel 中配置

---

## 开发脚本

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 未来可拓展
- Header 导航磁吸/跟随动画
- 更丰富的项目详情页与代码统计
- 主题配色编辑器与导出
- SEO/OG 图自动生成

---

## 致谢
- Next.js、Tailwind CSS、Framer Motion、next-intl 等优秀开源生态
- 图标来自 react-icons

如需反馈或建议，欢迎在仓库提交 Issue：`https://github.com/creamywqeq/net`。
