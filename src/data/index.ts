import { Partner, CultureItem, VideoItem, CarouselImage } from '@/types';

// 合作夥伴數據
export const partnersData: Partner[] = [
  {
    id: "cultural-heritage-foundation",
    name: "文化遺產基金會",
    description: "致力於保存和推廣台灣傳統文化的非營利組織，透過教育和研究活動傳承文化價值。",
    image: "/images/culture/文化資產.png",
    website: "https://example.com",
    category: "文化保存"
  },
  {
    id: "digital-museum-network",
    name: "數位博物館網絡",
    description: "建構全台灣最大的數位文化資源平台，讓民眾能夠線上探索豐富的文化收藏。",
    image: "/images/culture/文化品牌.jpg",
    website: "https://example.com",
    category: "數位典藏"
  },
  {
    id: "cultural-education-alliance",
    name: "文化教育聯盟",
    description: "結合學校與文化機構，推動創新的文化教育計畫，培養下一代的文化素養。",
    image: "/images/culture/文化記憶.JPG",
    website: "https://example.com",
    category: "教育推廣"
  }
];

// 文化亮點數據
export const cultureHighlightsData: CultureItem[] = [
  {
    id: "traditional-arts",
    title: "傳統工藝",
    description: "探索台灣豐富的傳統工藝文化，從陶瓷製作到織布技藝，每一項都蘊含著深厚的歷史底蘊。",
    image: "/images/culture/文化資產.png",
    category: "工藝文化"
  },
  {
    id: "cultural-festivals",
    title: "文化節慶",
    description: "體驗台灣各地的特色節慶活動，感受不同族群的文化特色與節慶傳統。",
    image: "/images/culture/文化品牌.jpg",
    category: "節慶文化"
  },
  {
    id: "historical-sites",
    title: "歷史古蹟",
    description: "走訪台灣重要的歷史古蹟，了解這片土地的歷史變遷與文化發展脈絡。",
    image: "/images/culture/文化記憶.JPG",
    category: "歷史文化"
  },
  {
    id: "local-cuisine",
    title: "在地美食",
    description: "品味台灣各地的特色美食，從街頭小吃到精緻料理，感受飲食文化的魅力。",
    image: "/images/culture/文化資產.png",
    category: "飲食文化"
  }
];

// 影音推薦數據
export const videoRecommendationsData: VideoItem[] = [
  {
    id: "cultural-documentary-1",
    title: "台灣文化之美",
    description: "深度探索台灣多元文化的紀錄片，帶您了解這片土地的文化故事。",
    thumbnail: "/images/culture/文化品牌.jpg",
    duration: "45:30"
  },
  {
    id: "traditional-craft-tutorial",
    title: "傳統工藝教學",
    description: "跟著老師傅學習傳統工藝技法，體驗手作的溫度與文化傳承的價值。",
    thumbnail: "/images/culture/文化記憶.JPG",
    duration: "32:15"
  }
];

// 輪播圖片數據
export const carouselImagesData: CarouselImage[] = [
  {
    id: "chimei-museum",
    src: "/images/museums/奇美博物館.jpg",
    alt: "奇美博物館",
    title: "奇美博物館",
    description: "典藏豐富的藝術品與樂器，展現東西方文化的交融之美"
  },
  {
    id: "fubon-art-museum",
    src: "/images/museums/富邦美術館.jpg", 
    alt: "富邦美術館",
    title: "富邦美術館",
    description: "當代藝術的殿堂，展示現代與傳統藝術的對話"
  },
  {
    id: "palace-museum",
    src: "/images/museums/故宮_浮世之美.jpg",
    alt: "故宮浮世之美",
    title: "故宮浮世之美",
    description: "故宮博物院特展，呈現東方藝術的深厚底蘊"
  }
];
