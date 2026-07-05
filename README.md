# 澄川鸮舍 — 工作室官网

> 一川琥珀 万物有灵

澄川鸮舍是一个专注文化遗产数字化的小型工作室。这个网站展示我们的项目和文章。

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 生成内容数据
npx velite

# 启动开发服务器
npm run dev

# 浏览器打开 http://localhost:3000
```

## 📁 项目结构

```
content/          ← ✏️ 日常编辑内容（Markdown 文件）
src/
├── app/          ← 页面路由
├── components/   ← UI 组件
└── lib/          ← 工具函数
public/images/    ← 图片资源
```

## 📝 如何更新内容

请阅读 **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)**，里面有详细的中文教程。

简言之：在 `content/` 下创建/修改 `.md` 文件 → 推送 → Vercel 自动部署。

## 🛠️ 技术栈

- [Next.js 14](https://nextjs.org/) — React 框架
- [Tailwind CSS 3](https://tailwindcss.com/) — CSS 工具
- [Velite](https://velite.js.org/) — Markdown 内容处理
- 部署在 [Vercel](https://vercel.com/)

## 📦 部署

### Vercel（推荐）

1. 把项目推送到 GitHub
2. 在 [vercel.com](https://vercel.com) 导入仓库
3. 构建命令设为：`npx velite && next build`
4. 点击 Deploy

每次 `git push` 后 Vercel 会自动重新部署。
