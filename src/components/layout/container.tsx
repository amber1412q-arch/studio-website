import { cn } from "@/lib/utils";

/**
 * 内容容器组件
 *
 * 统一控制页面内容的宽度和边距。
 * 确保所有页面的左右留白一致，且内容不会过宽（max-w-6xl = 1152px）。
 *
 * 🧩 用法：
 * <Container>你的内容</Container>
 * <Container narrow>窄版内容（适合文章）</Container>
 */
export function Container({
  children,
  className,
  narrow = false,
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-3xl" : "max-w-6xl",
        className
      )}
    >
      {children}
    </div>
  );
}
