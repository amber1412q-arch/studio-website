/**
 * 项目列表页
 *
 * 展示所有已发布的项目，支持按分类筛选。
 * "use client" 是因为分类筛选需要交互状态。
 */

"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { PageHeader } from "@/components/shared/page-header";
import { getPublishedProjects, getProjectCategories } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const projects = getPublishedProjects();
  const categories = getProjectCategories();

  // 当前选中的分类，"all" 表示全部
  const [activeCategory, setActiveCategory] = useState("all");

  // 按分类筛选项目
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <>
      <PageHeader
        title="项目"
        description="我们做过的数字产品，从博物馆导览小程序到文化遗产记录工具。"
      />

      <Container className="pb-20">
        {/* 分类筛选栏 */}
        {categories.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-colors border",
                activeCategory === "all"
                  ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                  : "bg-white text-[var(--color-text-secondary)] border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]"
              )}
            >
              全部
            </button>
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-colors border",
                  activeCategory === cat.value
                    ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                    : "bg-white text-[var(--color-text-secondary)] border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* 项目卡片网格 */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📦</div>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
              这个分类下还没有项目
            </h2>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              换个分类看看，或者过段时间再来。
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
