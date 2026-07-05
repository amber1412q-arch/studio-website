/**
 * 类型定义 — 由 Velite 自动生成的类型镜像
 *
 * 这些类型对应 velite.config.ts 中定义的 schema。
 * 手动维护以确保在 velite 生成之前 TypeScript 不会报错。
 */

/** 博客文章 */
export interface Post {
  title: string;
  date: string;
  description: string;
  tags: string[];
  coverImage?: string;
  draft: boolean;
  featured: boolean;
  slug: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  path: string;
  content: string; // 编译后的 MDX HTML
}

/** 项目 */
export interface Project {
  title: string;
  date: string;
  description: string;
  tags: string[];
  category: "mini-program" | "web" | "ai" | "design" | "other";
  coverImage?: string;
  images: string[];
  demoUrl?: string;
  sourceUrl?: string;
  draft: boolean;
  featured: boolean;
  slug: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  path: string;
  content: string;
}

/** 静态页面 */
export interface Page {
  title: string;
  description?: string;
  slug: string;
  content: string;
}
