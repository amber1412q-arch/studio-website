"use client";

/**
 * 顶部导航栏
 *
 * 包含：
 * - Logo + 工作室名字（左侧）
 * - 导航菜单（桌面端：水平排列；移动端：汉堡菜单）
 *
 * "use client" 是因为移动端菜单需要 useState 来管理开关状态。
 * 这是整个网站中少有的交互逻辑。
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { Container } from "./container";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border-light)]">
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* ─── Logo 区 ─── */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/images/logo.png"
              alt={SITE.name}
              width={36}
              height={36}
              className="rounded-lg"
              priority
            />
            <span className="text-lg font-semibold tracking-wide text-[var(--color-text-primary)]">
              {SITE.name}
            </span>
          </Link>

          {/* ─── 桌面端导航 ─── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm transition-colors",
                    isActive
                      ? "text-[var(--color-accent)] bg-[var(--color-accent-light)] font-medium"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* ─── 移动端汉堡按钮 ─── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
            aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* ─── 移动端下拉菜单 ─── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-border-light)] bg-[var(--color-bg-primary)]">
          <Container className="py-3 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 rounded-md text-base transition-colors",
                    isActive
                      ? "text-[var(--color-accent)] bg-[var(--color-accent-light)] font-medium"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </Container>
        </div>
      )}
    </header>
  );
}
