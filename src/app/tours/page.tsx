/**
 * 文化导览页面（占位）
 *
 * 以后会放文化导览团课的介绍和预约入口。
 * 目前先放一个预告页面，展示基本信息和联系方式。
 */

import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/shared/page-header";
export const metadata: Metadata = {
  title: "文化导览",
  description: "文化遗产讲解团课，带你走读城市与古迹",
};

export default function ToursPage() {
  return (
    <>
      <PageHeader
        title="文化导览"
        description="线下文化遗产讲解团课，带你走读城市与古迹。"
      />

      <Container narrow className="pb-20">
        {/* 预告卡片 */}
        <div className="text-center py-16 px-8 rounded-2xl border-2 border-dashed border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
          <div className="text-6xl mb-6">🏛️</div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
            即将上线
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-md mx-auto leading-relaxed">
            我正在筹备线下的文化遗产讲解团课。如果你对走读城市、
            探访古迹感兴趣，欢迎关注公众号获取最新消息。
          </p>

          {/* 联系/关注方式 */}
          <div className="mt-8 inline-flex flex-col items-center gap-3 px-8 py-5 rounded-xl bg-white border border-[var(--color-border-light)]">
            <p className="text-sm text-[var(--color-text-secondary)]">
              📱 关注微信公众号
            </p>
            <p className="text-lg font-semibold text-[var(--color-text-primary)]">
              澄川鸮舍
            </p>
            {/* 二维码占位 */}
            <div className="w-28 h-28 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center text-xs text-[var(--color-text-muted)]">
              二维码占位
            </div>
          </div>

          <p className="mt-8 text-sm text-[var(--color-text-muted)]">
            也欢迎直接发邮件聊聊：hello@chengchuan.studio
          </p>
        </div>
      </Container>
    </>
  );
}
