import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SITE } from "@/lib/constants";

/**
 * 首页大标题区（Hero Section）
 *
 * 用户打开网站看到的第一眼：
 * - 大标题（工作室名字）
 * - Slogan（一川琥珀 万物有灵）
 * - 简短介绍
 * - 两个 CTA 按钮（查看项目 / 阅读博客）
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 背景装饰 — 顶部渐变条 */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/60 via-amber-500 to-amber-400/60" />

      <Container className="py-20 md:py-28 lg:py-32 text-center">
        {/* ─── 工作室名 ─── */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-[var(--color-text-primary)]">
          {SITE.name}
        </h1>

        {/* ─── Slogan ─── */}
        <p className="mt-5 text-xl sm:text-2xl text-[var(--color-accent)] font-serif tracking-widest">
          {SITE.tagline}
        </p>

        {/* ─── 简短介绍 ─── */}
        <p className="mt-6 text-base sm:text-lg text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">
          一个专注文化遗产数字化的小型工作室。
          <br className="hidden sm:block" />
          用技术让老故事被听见，让旧物什被看见。
        </p>

        {/* ─── CTA 按钮 ─── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-colors shadow-sm"
          >
            查看项目
            <span className="ml-2">&rarr;</span>
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-[var(--color-text-primary)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-colors border border-[var(--color-border)]"
          >
            阅读博客
          </Link>
        </div>
      </Container>

      {/* 底部装饰 — 微妙的波浪分隔 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 40"
          className="w-full h-auto text-[var(--color-bg-secondary)]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40 L1200 40 L1200 0 Q600 20 0 0 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
