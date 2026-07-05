/**
 * 项目详情页
 *
 * 展示单个项目的完整信息：封面图、描述、技术标签、链接等。
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { getPublishedProjects, getProjectBySlug } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { SITE } from "@/lib/constants";
import { ArrowLeft, ExternalLink, Code2, Calendar } from "lucide-react";

/**
 * 预生成所有项目的静态页面
 */
export function generateStaticParams() {
  return getPublishedProjects().map((project) => ({
    slug: project.slug,
  }));
}

/**
 * 生成每个项目页面的 SEO 元数据
 */
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "项目未找到" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${SITE.name}`,
      description: project.description,
      type: "article",
      images: project.coverImage ? [{ url: project.coverImage }] : [],
    },
  };
}

/**
 * 分类标签的中文映射
 */
const categoryLabels: Record<string, string> = {
  "mini-program": "小程序",
  web: "网站",
  ai: "AI",
  design: "设计",
  other: "其他",
};

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      {/* 顶部封面图 */}
      {project.coverImage ? (
        <div className="relative w-full h-64 md:h-80 bg-[var(--color-bg-secondary)]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      ) : (
        /* 无封面图时的装饰条 */
        <div className="h-3 bg-gradient-to-r from-amber-400/40 via-amber-500/30 to-amber-400/40" />
      )}

      <Container narrow className="py-8 md:py-12">
        {/* ─── 返回链接 ─── */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          返回项目列表
        </Link>

        {/* ─── 项目头部信息 ─── */}
        <header className="mb-10">
          {/* 分类标签 */}
          <Badge variant="accent" className="mb-3">
            {categoryLabels[project.category] || project.category}
          </Badge>

          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
            {project.title}
          </h1>

          <p className="mt-3 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            {project.description}
          </p>

          {/* 元信息和链接 */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <span className="flex items-center gap-1 text-sm text-[var(--color-text-muted)]">
              <Calendar size={14} />
              {formatDate(project.date)}
            </span>

            {/* 技术标签 */}
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* 外部链接按钮 */}
          <div className="flex flex-wrap gap-3 mt-6">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                <ExternalLink size={14} />
                访问网站
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] transition-colors"
              >
                <Code2 size={14} />
                源代码
              </a>
            )}
          </div>
        </header>

        {/* ─── 项目正文 ─── */}
        <div
          className="prose prose-stone max-w-none
            prose-headings:text-[var(--color-text-primary)] prose-headings:font-semibold
            prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed
            prose-a:text-[var(--color-accent)]
            prose-strong:text-[var(--color-text-primary)]
            prose-li:text-[var(--color-text-secondary)]
            prose-img:rounded-xl
            prose-hr:border-[var(--color-border)]"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />

        {/* ─── 图片集 ─── */}
        {project.images.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-6">
              项目截图
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[var(--color-bg-secondary)]"
                >
                  <Image
                    src={img}
                    alt={`${project.title} 截图 ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── 底部导航 ─── */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border-light)]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline font-medium"
          >
            <ArrowLeft size={14} />
            查看所有项目
          </Link>
        </div>
      </Container>
    </article>
  );
}
