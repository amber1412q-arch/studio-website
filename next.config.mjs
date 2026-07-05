/** @type {import('next').NextConfig} */
const nextConfig = {
  // 允许加载来自这些域名的图片（Next.js Image 组件需要）
  images: {
    remotePatterns: [],
    // 也允许本地图片未设置宽高
    unoptimized: false,
  },
};

export default nextConfig;
