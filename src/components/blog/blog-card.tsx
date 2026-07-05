import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/types/content";

/**
 * 博客卡片组件
 *
 * 用于在列表页和首页展示文章预览。
 * 包含：封面图、日期、标题、摘要、标签、阅读时间
 */
export function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl overflow-hidden border border-[var(--color-border-light)] bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
    >
      {/* 封面图区域 */}
      <div className="aspect-[16/9] bg-gradient-to-br from-amber-100 via-amber-50 to-warm-100 relative overflow-hidden">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* 没有封面图时的默认装饰 */
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl opacity-30">🦉</div>
          </div>
        )}
      </div>

      {/* 文字内容 */}
      <div className="p-5">
        {/* 日期和阅读时间 */}
        <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)] mb-2">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readingTime.text}
          </span>
        </div>

        {/* 标题 */}
        <h3 className="font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2 leading-snug">
          {post.title}
        </h3>

        {/* 摘要 */}
        <p className="mt-2 text-sm text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
          {post.description}
        </p>

        {/* 标签 */}
        {post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
