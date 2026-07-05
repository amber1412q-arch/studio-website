"use client";

/**
 * 复制链接按钮（客户端组件）
 *
 * 点击后将当前页面 URL 复制到剪贴板。
 * 因为需要 onClick 事件处理，所以必须是 "use client"。
 */

import { Share2 } from "lucide-react";

export function CopyLinkButton() {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        alert("链接已复制！");
      }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] transition-colors"
    >
      <Share2 size={14} />
      复制链接
    </button>
  );
}
