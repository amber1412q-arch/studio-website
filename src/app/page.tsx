/**
 * 首页
 *
 * 由几个区块组成：
 * 1. Hero — 大标题 + slogan + CTA 按钮
 * 2. 工作室简介 — 几句话说清楚我们是做什么的
 * 3. 精选项目 — 3 张项目卡片
 * 4. 最新文章 — 3 张博客卡片
 */

import { Hero } from "@/components/home/hero";
import { Container } from "@/components/layout/container";
import { BlogCard } from "@/components/blog/blog-card";
import { ProjectCard } from "@/components/projects/project-card";
import { getFeaturedPosts, getFeaturedProjects } from "@/lib/content";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);
  const latestPosts = getFeaturedPosts().slice(0, 3);

  return (
    <>
      {/* ─── 大标题区 ─── */}
      <Hero />

      {/* ─── 工作室简介 ─── */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
        <Container narrow>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
              用数字技术，为文化遗产注入新的生命力
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
              我们是一个专注文化遗产数字化的小型工作室。五年行业经验，让我们懂得文博机构的真实需求；
              对技术的热情，让我们能把想法变成好用的产品。小程序、网站、内容策划——
              我们在技术和文化之间搭桥。
            </p>
          </div>
        </Container>
      </section>

      {/* ─── 精选项目 ─── */}
      {featuredProjects.length > 0 && (
        <section className="py-16 md:py-20">
          <Container>
            {/* 区块标题 */}
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
                  精选项目
                </h2>
                <p className="mt-2 text-[var(--color-text-secondary)]">
                  我们做过的一些东西
                </p>
              </div>
              <Link
                href="/projects"
                className="hidden sm:flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline font-medium"
              >
                查看全部 <ArrowRight size={14} />
              </Link>
            </div>

            {/* 项目卡片网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>

            {/* 移动端查看全部链接 */}
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/projects"
                className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline font-medium"
              >
                查看全部项目 <ArrowRight size={14} />
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* ─── 最新文章 ─── */}
      {latestPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            {/* 区块标题 */}
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
                  最新文章
                </h2>
                <p className="mt-2 text-[var(--color-text-secondary)]">
                  关于文化遗产数字化的思考和经验
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline font-medium"
              >
                查看全部 <ArrowRight size={14} />
              </Link>
            </div>

            {/* 文章卡片网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {/* 移动端查看全部链接 */}
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline font-medium"
              >
                阅读更多文章 <ArrowRight size={14} />
              </Link>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
