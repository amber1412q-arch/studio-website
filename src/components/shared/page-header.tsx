/**
 * 页面标题组件
 *
 * 统一各子页面的标题区样式，包含标题文字和可选的描述。
 *
 * 🧩 用法：
 * <PageHeader title="博客" description="分享关于文化遗产数字化的思考和经验" />
 */

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="py-12 md:py-16 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
