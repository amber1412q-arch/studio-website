/**
 * Cloudflare Pages 构建前脚本
 *
 * 作用：在静态导出前，将 API 路由文件夹临时移开。
 * 因为 Next.js 静态导出（output: 'export'）不支持 API 路由，
 * 如果检测到 route.ts 会导致构建失败。
 *
 * 等构建完成后，postbuild-cloudflare.js 会把它移回来。
 */

const fs = require("fs");
const path = require("path");

const apiDir = path.join(__dirname, "..", "src", "app", "api");
const apiBackup = path.join(__dirname, "..", "src", "app", "api.backup");

if (fs.existsSync(apiDir)) {
  console.log("📦 [prebuild] 临时移动 API 路由文件夹…");
  fs.renameSync(apiDir, apiBackup);
  console.log("✅ [prebuild] 完成，可以开始构建");
} else {
  console.log("ℹ️  [prebuild] API 路由文件夹不存在，跳过");
}
