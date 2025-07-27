// 網站配置
export const siteConfig = {
  name: "Cultural Website",
  title: "Cultural Website - 文化傳承網站",
  description: "保存和分享世界文化多樣性，透過數位說故事和社群參與來傳承文化",
  url: "https://cultural-heritage.example.com",
  ogImage: "/images/mainvisual/entry_pic.jpg",
  links: {
    facebook: "https://facebook.com/cultural-heritage",
    twitter: "https://twitter.com/cultural-heritage", 
    instagram: "https://instagram.com/cultural-heritage"
  }
};

// 導航配置
export const navConfig = {
  mainNav: [
    {
      title: "首頁",
      href: "/",
    },
    {
      title: "文化探索",
      href: "/culture",
    },
    {
      title: "博物館",
      href: "/museums",
    },
    {
      title: "活動資訊",
      href: "/events",
    },
    {
      title: "關於我們",
      href: "/about",
    },
  ],
  sidebarNav: [
    {
      title: "快速連結",
      items: [
        {
          title: "首頁",
          href: "/",
        },
        {
          title: "文化探索",
          href: "/culture",
        },
        {
          title: "活動資訊",
          href: "/events",
        },
        {
          title: "關於我們",
          href: "/about",
        },
      ],
    },
    {
      title: "資源中心",
      items: [
        {
          title: "部落格",
          href: "/blog",
        },
        {
          title: "圖片庫",
          href: "/gallery",
        },
        {
          title: "聯絡我們",
          href: "/contact",
        },
        {
          title: "客戶支援",
          href: "/support",
        },
      ],
    },
  ],
};

// 圖片配置
export const imageConfig = {
  domains: ['localhost', 'cultural-heritage.example.com'],
  formats: ['image/webp', 'image/avif'],
  sizes: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
};

// API 配置
export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000,
  retries: 3,
};
