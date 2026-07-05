/**
 * Velite 配置文件 — 内容处理引擎
 *
 * 这个文件定义了如何将 Markdown 文件转换为网站可用的数据。
 * 它读取 content/ 目录下的 .md 文件，按 schema 验证和提取信息，
 * 生成带完整 TypeScript 类型的 JSON 数据。
 *
 * 👉 对网站使用者来说，你不需要改这个文件。
 *    你只需要在 content/ 目录下写 .md 文件即可。
 */

import { defineConfig, defineCollection, s } from "velite";
import readingTime from "reading-time";
import rehypePrettyCode from "rehype-pretty-code";
import path from "node:path";

/**
 * 从文件路径中提取安全的 slug（URL 标识）
 *
 * 例如：
 *   "blog/2026-07-hello-world.md" → "2026-07-hello-world"
 *   Windows 绝对路径也会被正确处理
 */
function extractSlug(filePath: string): string {
  // path.basename 取文件名，去掉扩展名
  return path.basename(filePath, path.extname(filePath));
}

// ─── 博客文章 Schema ───────────────────────────────────
const blog = defineCollection({
  name: "Post",
  pattern: "blog/**/*.md",
  schema: s
    .object({
      title: s.string(),
      date: s.isodate(),
      description: s.string(),
      tags: s.array(s.string()).default([]),
      coverImage: s.string().optional(),
      draft: s.boolean().default(false),
      featured: s.boolean().default(false),
      content: s.mdx(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slug: extractSlug(meta.path),
      readingTime: readingTime(meta.plain || ""),
      path: meta.path,
    })),
});

// ─── 项目展示 Schema ───────────────────────────────────
const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.md",
  schema: s
    .object({
      title: s.string(),
      date: s.isodate(),
      description: s.string(),
      tags: s.array(s.string()).default([]),
      category: s
        .union([
          s.literal("mini-program"),
          s.literal("web"),
          s.literal("ai"),
          s.literal("design"),
          s.literal("other"),
        ])
        .default("other"),
      coverImage: s.string().optional(),
      images: s.array(s.string()).default([]),
      demoUrl: s.string().optional(),
      sourceUrl: s.string().optional(),
      draft: s.boolean().default(false),
      featured: s.boolean().default(false),
      content: s.mdx(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slug: extractSlug(meta.path),
      readingTime: readingTime(meta.plain || ""),
      path: meta.path,
    })),
});

// ─── 静态页面 Schema（关于我、导览等） ────────────────
const pages = defineCollection({
  name: "Page",
  pattern: "pages/**/*.md",
  schema: s
    .object({
      title: s.string(),
      description: s.string().optional(),
      content: s.mdx(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slug: extractSlug(meta.path),
    })),
});

export default defineConfig({
  root: "./content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    clean: true,
  },
  collections: { blog, projects, pages },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, { theme: "github-light" }]],
  },
});
