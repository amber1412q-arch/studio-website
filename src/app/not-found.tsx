/**
 * 自定义 404 页面
 *
 * 当用户访问不存在的页面时显示。
 */

import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container narrow className="py-20 text-center">
      <div className="text-7xl mb-6">🦉</div>
      <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">
        404 — 页面未找到
      </h1>
      <p className="mt-4 text-[var(--color-text-secondary)] max-w-md mx-auto leading-relaxed">
        你访问的页面不存在，或者已经被移走了。
        <br />
        猫头鹰说，不如回到首页看看。
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-colors"
      >
        返回首页
      </Link>
    </Container>
  );
}
