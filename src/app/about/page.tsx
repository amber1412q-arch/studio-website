/**
 * 关于我页面
 *
 * 展示个人介绍、工作经历等信息。
 * 内容来自 content/pages/about.md
 */

import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/shared/page-header";
import { pages } from "@/lib/content";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "关于",
  description: `了解${SITE.name}的故事`,
};

export default function AboutPage() {
  // 从 content/pages/about.md 获取内容
  const aboutPage = pages.find((p) => p.slug === "about");

  return (
    <>
      <PageHeader title="关于" />

      <Container narrow className="pb-20">
        {aboutPage ? (
          /* 渲染 Markdown 内容 */
          <div
            className="prose prose-stone max-w-none
              prose-headings:text-[var(--color-text-primary)]
              prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed
              prose-a:text-[var(--color-accent)]
              prose-strong:text-[var(--color-text-primary)]
              prose-li:text-[var(--color-text-secondary)]
              prose-hr:border-[var(--color-border)]"
            dangerouslySetInnerHTML={{ __html: aboutPage.content }}
          />
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🦉</div>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
              关于页面还在准备中
            </h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              请稍后再来看看。
            </p>
          </div>
        )}
      </Container>
    </>
  );
}
