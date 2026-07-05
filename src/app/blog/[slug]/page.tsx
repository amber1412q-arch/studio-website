/**
 * 博客文章详情页
 *
 * 根据 URL 中的 slug 参数动态加载对应的文章。
 * 每个文章页面的内容在构建时预先生成（静态生成）。
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { getPublishedPosts, getPostBySlug } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { SITE } from "@/lib/constants";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { CopyLinkButton } from "@/components/shared/copy-link-button";

/**
 * 告诉 Next.js 哪些 slug 需要预生成页面
 * 这里我们为所有已发布的文章生成页面
 */
export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({
    slug: post.slug,
  }));
}

/**
 * 为每个文章页面生成独立的 SEO 元数据
 */
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "文章未找到" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | ${SITE.name}`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  // 如果文章不存在或是草稿，显示 404
  if (!post) {
    notFound();
  }

  return (
    <article>
      {/* 顶部封面图（可选） */}
      {post.coverImage && (
        <div className="relative w-full h-64 md:h-96 bg-[var(--color-bg-secondary)]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <Container narrow className="py-8 md:py-12">
        {/* ─── 返回链接 ─── */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          返回博客列表
        </Link>

        {/* ─── 文章头部信息 ─── */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] leading-tight">
            {post.title}
          </h1>

          {/* 元信息行 */}
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-[var(--color-text-muted)]">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readingTime.text}
            </span>
          </div>

          {/* 标签 */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {post.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          )}
        </header>

        {/* ─── 文章正文 ─── */}
        <div
          className="prose prose-stone max-w-none
            prose-headings:text-[var(--color-text-primary)] prose-headings:font-semibold
            prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed
            prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[var(--color-text-primary)]
            prose-blockquote:border-l-[var(--color-accent)] prose-blockquote:bg-[var(--color-accent-light)]/30 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
            prose-li:text-[var(--color-text-secondary)]
            prose-img:rounded-xl
            prose-hr:border-[var(--color-border)]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* ─── 文章底部：分享和 CTA ─── */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border-light)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-[var(--color-text-muted)]">
                分享这篇文章给你的朋友
              </p>
            </div>
            <CopyLinkButton />
          </div>

          {/* 公众号关注提示 */}
          <div className="mt-6 p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-light)]">
            <p className="text-sm text-[var(--color-text-secondary)] text-center">
              📱 更多内容，欢迎关注微信公众号{' '}
              <strong className="text-[var(--color-text-primary)]">
                澄川鸮舍
              </strong>
            </p>
          </div>
        </div>
      </Container>
    </article>
  );
}
