/**
 * Cloudflare Pages 构建后脚本
 *
 * 作用：
 * 1. 把 API 路由文件夹恢复原处（Vercel 部署需要）
 * 2. 生成静态 RSS 订阅文件（替代 API 路由的 /api/rss）
 */

const fs = require("fs");
const path = require("path");

// ─── 1. 恢复 API 路由文件夹 ──────────────────────────────
const apiDir = path.join(__dirname, "..", "src", "app", "api");
const apiBackup = path.join(__dirname, "..", "src", "app", "api.backup");

if (fs.existsSync(apiBackup)) {
  console.log("📦 [postbuild] 恢复 API 路由文件夹…");
  fs.renameSync(apiBackup, apiDir);
  console.log("✅ [postbuild] API 路由已恢复");
}

// ─── 2. 清理构建产物中的冗余文件夹 ─────────────────────
const outApiBackup = path.join(__dirname, "..", "out", "api.backup");
if (fs.existsSync(outApiBackup)) {
  fs.rmSync(outApiBackup, { recursive: true });
  console.log("🧹 [postbuild] 已清理 out/api.backup");
}

// ─── 3. 生成静态 RSS 文件 ────────────────────────────────
try {
  // 从 Velite 生成的 JSON 中直接读取博客文章
  const blogJsonPath = path.join(__dirname, "..", ".velite", "blog.json");
  const allPosts = JSON.parse(fs.readFileSync(blogJsonPath, "utf-8"));

  // 过滤已发布文章，按日期倒序
  const posts = allPosts
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (posts.length > 0) {
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://studio-website-dww96r8ju-hedwig1412.vercel.app";
    const siteName = "澄川鸮舍";

    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteName} 博客</title>
    <link>${siteUrl}</link>
    <description>关于文化遗产数字化的思考和经验分享</description>
    <language>zh-CN</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`;

    // 写入 out/ 目录（静态导出的输出目录）
    const outDir = path.join(__dirname, "..", "out");
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    fs.writeFileSync(path.join(outDir, "rss.xml"), rssXml, "utf-8");
    console.log(`✅ [postbuild] RSS 文件已生成: out/rss.xml（${posts.length} 篇文章）`);
  } else {
    console.log("ℹ️  [postbuild] 暂无已发布文章，跳过 RSS 生成");
  }
} catch (err) {
  console.warn("⚠️  [postbuild] 无法生成 RSS 文件:", err.message);
  console.warn("   （如果这是首次构建，运行一次 npx velite 即可）");
}
