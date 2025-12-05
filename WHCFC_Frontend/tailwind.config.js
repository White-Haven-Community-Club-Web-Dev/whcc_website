/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // WHCFC Brand Colors（基于 globals.css）
        primary: "#E0010D",           // --primary-red (主品牌红色)
        "primary-dark": "#B30109",    // --primary-red-dark (深红色hover)
        customGreen: "#1BAA76",       // --secondary-green (次要品牌绿色)
        "customGreen-dark": "#158A5E", // --secondary-green-dark (深绿色hover)
        
        // Neutral Colors（中性色）
        gray: "#F8F9FA",              // --background (页面背景)
        foreground: "#212529",        // --foreground (主文字色)
        muted: "#6C757D",             // --text-secondary (次要文字色)
        
        // Component Colors（组件颜色 - 来自globals.css）
        background: "#F8F9FA",
        card: "#FFFFFF",
        "card-foreground": "#212529",
        popover: "#FFFFFF",
        "popover-foreground": "#212529",
        "primary-foreground": "#FFFFFF",
        secondary: "#1BAA76",
        "secondary-foreground": "#FFFFFF",
        "muted-foreground": "#6C757D",
        accent: "#F8F9FA",
        "accent-foreground": "#212529",
        destructive: "#E0010D",
        "destructive-foreground": "#FFFFFF",
        border: "rgba(0, 0, 0, 0.1)",
        input: "rgba(0, 0, 0, 0.1)",
        ring: "#E0010D",
      },
      fontFamily: {
        // 基于 globals.css 字体定义
        main: ["Roboto", "sans-serif"],      // 正文字体
        title: ["Outfit", "sans-serif"],     // 标题字体
        sans: ["Roboto", "sans-serif"],      // 默认sans-serif
      },
      fontSize: {
        // 基于 globals.css 字体大小定义
        // --text-hero: 72px
        hero: "72px",
        // --text-h1: 48px (已有 text-5xl)
        // --text-h2: 36px (已有 text-4xl)
        // --text-h3: 24px (已有 text-2xl)
        // --text-h4: 20px (已有 text-xl)
        // --text-large: 18px (已有 text-lg)
        // --text-base: 16px (已有 text-base)
        // --text-small: 14px (已有 text-sm)
      },
      borderRadius: {
        // 基于 globals.css 圆角定义
        // --radius-sm: 8px (已有 rounded-lg)
        // --radius-md: 10px
        md: "10px",
        // --radius-lg: 12px (已有 rounded-xl = 12px)
        // --radius-xl: 16px (已有 rounded-2xl = 16px)
        // --radius-full: 9999px (已有 rounded-full)
      },
      boxShadow: {
        // 常用阴影（用于卡片等）
        card: "0 2px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
