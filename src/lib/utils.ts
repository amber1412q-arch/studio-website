import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 合并 CSS 类名的工具函数
 *
 * 有了它，我们可以放心地写条件类名，不用担心冲突。
 * 比如：cn("px-4", isActive && "bg-blue-500", className)
 *
 * clsx 负责合并（处理条件、数组、对象等）
 * twMerge 负责解决 Tailwind 类名冲突（后面的覆盖前面的）
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 格式化日期为中文格式
 * 例如：2026年7月6日
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * 截取字符串并加省略号
 * 用于在卡片中显示文章摘要
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length).replace(/\s+\S*$/, "") + "…";
}
