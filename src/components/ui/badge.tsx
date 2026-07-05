import { cn } from "@/lib/utils";

/**
 * 标签/徽章组件
 *
 * 用于显示分类、标签等信息。
 * 一个小巧的装饰元素，让卡片和列表更有层次。
 *
 * 🧩 用法：
 * <Badge>小程序</Badge>
 * <Badge variant="accent">精选</Badge>
 */

type BadgeVariant = "default" | "accent" | "outline";

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border-[var(--color-border-light)]",
  accent:
    "bg-[var(--color-accent-light)] text-[var(--color-accent)] border-[var(--color-accent-light)]",
  outline:
    "bg-transparent text-[var(--color-text-secondary)] border-[var(--color-border)]",
};

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
