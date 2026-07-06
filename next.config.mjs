/**
 * Next.js 配置文件
 *
 * 支持两种部署模式：
 * 1. Vercel（默认）：标准 Next.js 模式，API 路由正常工作
 * 2. Cloudflare Pages：设置环境变量 NEXT_STATIC_EXPORT=true 启用静态导出
 *
 * 静态导出模式下：
 * - 所有页面预渲染为 HTML
 * - API 路由不可用（会由构建脚本处理）
 * - next/image 优化不可用（设为 unoptimized）
 */

const isStaticExport = process.env.NEXT_STATIC_EXPORT === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出模式（Cloudflare Pages 使用）
  output: isStaticExport ? "export" : undefined,

  // 图片设置
  images: {
    remotePatterns: [],
    // 静态导出时必须禁用图片优化
    unoptimized: isStaticExport ? true : false,
  },
};

export default nextConfig;
