/**
 * 澄川鸮舍 — 全局常量
 *
 * 这个文件集中管理网站的名称、描述、社交链接等信息。
 * 修改这里的值，整个网站的相关位置都会自动更新。
 *
 * 你只需改这个文件就能更新：
 * - 网站标题和描述
 * - 导航菜单
 * - 社交媒体链接
 * - 页脚信息
 */

export const SITE = {
  /** 网站名称 — 你的工作室名字 */
  name: "澄川鸮舍",

  /** 一句话口号 — 出现在首页和浏览器标签页 */
  tagline: "一川琥珀 万物有灵",

  /** 网站描述 — 用于 SEO，出现在搜索引擎结果中 */
  description:
    "澄川鸮舍是一个专注于文化遗产数字化的小型工作室。我们开发微信小程序、网站等数字产品，致力于让文化遗产焕发新的生命力。",

  /** 网站 URL — 部署后更新为实际域名 */
  url: "https://chengchuan.vercel.app",

  /** 默认的社交分享图片 */
  ogImage: "/images/og-default.png",

  /** 作者/主理人名字 */
  author: "澄川鸮舍",

  /** 语言 */
  language: "zh-CN",
} as const;

/** 导航菜单项 — 添加/删除/调整顺序都可以在这里改 */
export const NAV_LINKS = [
  { label: "首页", href: "/" },
  { label: "项目", href: "/projects" },
  { label: "博客", href: "/blog" },
  { label: "关于", href: "/about" },
  { label: "文化导览", href: "/tours" },
] as const;

/** 社交媒体和其他外部链接 */
export const SOCIAL_LINKS = {
  /** 微信公众号 ID（以后替换为真实的） */
  wechat: "澄川鸮舍",
  /** GitHub */
  github: "https://github.com",
  /** 邮箱 */
  email: "hello@chengchuan.studio",
} as const;

/** 页脚信息 */
export const FOOTER = {
  /** 版权起始年份 */
  sinceYear: 2026,
  /** ICP 备案号（如果用国内服务器，需要填写） */
  icp: "",
} as const;
