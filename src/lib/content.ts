/**
 * 内容加载器
 *
 * 从 Velite 生成的 JSON 数据中导入文章、项目和页面。
 * 所有内容在构建时静态生成，不需要数据库或 API 请求。
 *
 * 使用方式：
 *   import { blog } from "@/lib/content";
 *   const publishedPosts = blog.filter(p => !p.draft);
 *
 * 注意：需要先运行 `npx velite` 生成数据文件。
 * Velite 会在 `next dev` 和 `next build` 时自动运行。
 */

import { blog as _posts, projects as _projects, pages as _pages } from "../../.velite";

/** 所有博客文章（按日期倒序） */
export const blog = [..._posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

/** 所有项目（按日期倒序） */
export const projects = [..._projects].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

/** 所有静态页面 */
export const pages = _pages;

/** 获取已发布的文章（排除草稿） */
export function getPublishedPosts() {
  return blog.filter((p) => !p.draft);
}

/** 获取已发布的项目 */
export function getPublishedProjects() {
  return projects.filter((p) => !p.draft);
}

/** 获取精选文章（在首页展示） */
export function getFeaturedPosts() {
  return getPublishedPosts().filter((p) => p.featured);
}

/** 获取精选项目（在首页展示） */
export function getFeaturedProjects() {
  return getPublishedProjects().filter((p) => p.featured);
}

/** 根据 slug 获取单篇文章 */
export function getPostBySlug(slug: string) {
  return getPublishedPosts().find((p) => p.slug === slug);
}

/** 根据 slug 获取单个项目 */
export function getProjectBySlug(slug: string) {
  return getPublishedProjects().find((p) => p.slug === slug);
}

/** 获取项目的所有分类 */
export function getProjectCategories() {
  const cats = new Set(getPublishedProjects().map((p) => p.category));
  const labels: Record<string, string> = {
    "mini-program": "小程序",
    web: "网站",
    ai: "AI",
    design: "设计",
    other: "其他",
  };
  return Array.from(cats).map((c) => ({ value: c, label: labels[c] || c }));
}
