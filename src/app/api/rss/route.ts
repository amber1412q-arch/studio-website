/**
 * RSS 订阅源
 *
 * 为博客生成 RSS feed，方便读者用 RSS 阅读器订阅。
 * 访问 /api/rss 即可获取 XML 格式的订阅源。
 */

import { getPublishedPosts } from "@/lib/content";
import { SITE } from "@/lib/constants";

export async function GET() {
  const posts = getPublishedPosts();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE.name} 博客</title>
    <link>${SITE.url}</link>
    <description>${SITE.description}</description>
    <language>zh-CN</language>
    <atom:link href="${SITE.url}/api/rss" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE.url}/blog/${post.slug}</link>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${SITE.url}/blog/${post.slug}</guid>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
