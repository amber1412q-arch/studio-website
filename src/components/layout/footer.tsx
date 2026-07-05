/**
 * 底部页脚
 *
 * 出现在每个页面的最下方，包含：
 * - 工作室信息和 slogan
 * - 导航链接
 * - 微信公众号提示
 * - 版权和备案信息
 */

import Link from "next/link";
import { Container } from "./container";
import { SITE, NAV_LINKS, SOCIAL_LINKS, FOOTER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-light)] bg-[var(--color-bg-secondary)] mt-24">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ─── 品牌信息 ─── */}
          <div>
            <h3 className="font-semibold text-lg text-[var(--color-text-primary)]">
              {SITE.name}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {SITE.tagline}
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              {SITE.description.slice(0, 50)}……
            </p>
          </div>

          {/* ─── 导航链接 ─── */}
          <div>
            <h4 className="font-medium text-sm text-[var(--color-text-primary)] mb-3">
              导航
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── 联系和关注 ─── */}
          <div>
            <h4 className="font-medium text-sm text-[var(--color-text-primary)] mb-3">
              联系与关注
            </h4>
            <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <p>
                微信公众号：{SOCIAL_LINKS.wechat}
              </p>
              <p>
                邮箱：{SOCIAL_LINKS.email}
              </p>
              {/* 微信公众号二维码占位 — 以后放二维码图片 */}
              <div className="mt-3 w-24 h-24 rounded-md bg-[var(--color-bg-tertiary)] flex items-center justify-center text-xs text-[var(--color-text-muted)]">
                二维码
                <br />
                占位
              </div>
            </div>
          </div>
        </div>

        {/* ─── 底部版权 ─── */}
        <div className="mt-10 pt-6 border-t border-[var(--color-border-light)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--color-text-muted)]">
          <p>
            &copy; {FOOTER.sinceYear}
            {new Date().getFullYear() > FOOTER.sinceYear
              ? ` - ${new Date().getFullYear()}`
              : ""}{" "}
            {SITE.name}. All rights reserved.
          </p>
          <p>
            由 Next.js 驱动 &middot; 部署在 Vercel
          </p>
        </div>
      </Container>
    </footer>
  );
}
