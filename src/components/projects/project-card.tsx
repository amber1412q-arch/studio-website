import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { Project } from "@/types/content";

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

/**
 * 项目卡片组件
 *
 * 用于在列表页和首页展示项目预览。
 * 包含：封面图、分类标签、标题、描述、技术标签
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl overflow-hidden border border-[var(--color-border-light)] bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
    >
      {/* 封面图区域 */}
      <div className="aspect-[4/3] bg-gradient-to-br from-warm-100 via-amber-50 to-warm-50 relative overflow-hidden">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl opacity-30">📦</div>
          </div>
        )}
        {/* 分类标签 — 浮在封面图上方 */}
        <div className="absolute top-3 left-3">
          <Badge variant="accent">
            {categoryLabels[project.category] || project.category}
          </Badge>
        </div>
      </div>

      {/* 文字内容 */}
      <div className="p-5">
        {/* 标题 + 箭头 */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-1">
            {project.title}
          </h3>
          <ArrowUpRight
            size={16}
            className="flex-shrink-0 mt-0.5 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors"
          />
        </div>

        {/* 描述 */}
        <p className="mt-2 text-sm text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* 技术标签 */}
        {project.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* 日期 */}
        <p className="mt-3 text-xs text-[var(--color-text-muted)]">
          {formatDate(project.date)}
        </p>
      </div>
    </Link>
  );
}
