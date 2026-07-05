import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE } from "@/lib/constants";

/**
 * 网站全局元数据（SEO）
 * 这里设置的信息会出现在搜索引擎结果和社交分享中
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [{ url: SITE.ogImage }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * 根布局 — 包裹所有页面的外壳
 *
 * 这个文件定义了整个网站的外框架：
 * 1. HTML 标签（语言设置为中文）
 * 2. 顶部导航栏（Header）
 * 3. 底部页脚（Footer）
 * 4. 中间是每个页面自己的内容（children）
 *
 * 在 Next.js 中，layout.tsx 是所有页面的"壳"，
 * 切换页面时，layout 不会重新渲染，只有 children 会变。
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col antialiased">
        {/* 顶部导航 */}
        <Header />

        {/* 页面主体内容 — flex-1 让 footer 始终在底部 */}
        <main className="flex-1">{children}</main>

        {/* 底部页脚 */}
        <Footer />
      </body>
    </html>
  );
}
