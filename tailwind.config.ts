import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 澄川鸮舍品牌色系
        // 以琥珀色为主调，呼应"一川琥珀 万物有灵"的品牌意境
        background: "var(--color-bg-primary)",
        foreground: "var(--color-text-primary)",
        amber: {
          50: "#fefaf3",
          100: "#fdf3e0",
          200: "#fae4bf",
          300: "#f5cf95",
          400: "#efb668",
          500: "#e8a040",
          600: "#d4892a", // 主色调 - 琥珀金
          700: "#b06d21",
          800: "#8d571e",
          900: "#73471d",
        },
        warm: {
          50: "#fdfbf7", // 暖白底色
          100: "#f7f4eb",
          200: "#ede7d5",
          300: "#e0d7bd",
          400: "#cfc2a2",
          500: "#b8a98a",
          600: "#9b8b6f",
          700: "#7d6f58",
          800: "#655a49",
          900: "#4a4135", // 深棕（文字色）
        },
      },
      fontFamily: {
        // 🀄 中文字体栈：优先使用系统自带字体，不额外下载
        sans: [
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          '"Source Han Sans SC"',
          '"Noto Sans CJK SC"',
          '"WenQuanYi Micro Hei"',
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        serif: [
          '"Noto Serif CJK SC"',
          '"Source Han Serif SC"',
          '"STSong"',
          '"SimSun"',
          "Georgia",
          "serif",
        ],
      },
      lineHeight: {
        // 中文需要更大的行高以保证舒适阅读
        relaxed: "1.8",
        normal: "1.7",
      },
      typography: {
        // 博客文章内容的排版样式
        DEFAULT: {
          css: {
            maxWidth: "72ch",
            color: "var(--color-text-primary)",
            lineHeight: "1.85",
            fontSize: "1.0625rem",
            a: {
              color: "var(--color-accent)",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: "-0.01em",
            },
            h2: {
              fontWeight: "600",
              letterSpacing: "-0.005em",
              marginTop: "2em",
            },
            "h2:first-child": {
              marginTop: "0",
            },
            blockquote: {
              borderLeftColor: "var(--color-accent)",
              fontStyle: "normal",
              color: "var(--color-text-secondary)",
            },
            code: {
              fontWeight: "400",
              backgroundColor: "var(--color-bg-secondary)",
              padding: "0.15rem 0.4rem",
              borderRadius: "0.25rem",
              fontSize: "0.9em",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            img: {
              borderRadius: "0.5rem",
            },
            hr: {
              borderColor: "var(--color-border)",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
export default config;
