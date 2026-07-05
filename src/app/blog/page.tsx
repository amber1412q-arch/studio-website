/**
 * 博客列表页
 *
 * 展示所有已发布的博客文章，按日期倒序排列。
 * 每篇文章显示为一张卡片。
 */

import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { BlogCard } from "@/components/blog/blog-card";
import { PageHeader } from "@/components/shared/page-header";
import { getPublishedPosts } from "@/lib/content";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "博客",
  description: "关于文化遗产数字化的思考和经验分享",
  openGraph: {
    title: `博客 | ${SITE.name}`,
    description: "关于文化遗产数字化的思考和经验分享",
  },
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <PageHeader
        title="博客"
        description="关于文化遗产数字化的思考和经验，和公众号同步更新。"
      />

      <Container className="pb-20">
        {posts.length === 0 ? (
          /* 暂无文章时的占位 */
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📝</div>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
              还没有文章
            </h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              第一篇文章正在路上，敬请期待！
            </p>
          </div>
        ) : (
          /* 文章卡片网格 */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
