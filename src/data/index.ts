import type { Partner } from "@/types";

// 合作夥伴數據

export const partnersData: Partner[] = [
  {
    id: "cultural-museum",
    name: "「台語工藝詞庫」網站啟用 有助傳承台灣工藝與文化記憶",
    description: "國立臺灣工藝研究發展中心的臺語網站，提供臺語文創、工藝知識與教學資源，推廣本土語言與文化傳承。",
    image: "/images/partnerrecommendations/台灣工藝研究發展中心.jpg",
    category: "教育機構",
    established: "1985",
    website: "https://kanggesu.ntcri.org.tw/NTCRI_TaigiWebSite/"
  },
  {
    id: "heritage-foundation",
    name: "懷舊列車動起來 鐵道博開放搭藍皮火車賞古蹟 可預約",
    description: "國立鐵道博物館官方網站，呈現臺灣鐵道文化脈絡，典藏珍貴文物，提供豐富導覽與教育資源，傳承歷史記憶",
    image: "/images/partnerrecommendations/國家鐵道博物館.jpg",
    category: "博物館機構",
    established: "1992",
    website: "https://www.nrm.gov.tw/"
  },
  {
    id: "cultural-education",
    name: "百大文化基地計畫 新北黃金山城美學廊帶7月至11月推出「礦事聚作」遊程",
    description: "臺灣煤礦博物館官網，保存煤礦歷史記憶，展現礦業文化風華，結合教育與觀光，深入探索臺灣產業發展的軌跡。",
    image: "/images/partnerrecommendations/新平溪煤礦博物園區.jpg",
    category: "保護機構",
    established: "2001",
    website: "https://www.taiwancoal.com.tw/web/"
  },
//   {
//     id: "cultural-education",
//     name: "電影記憶與工藝技藝 台灣文化永續還差哪一哩路？",
//     description: "究竟傳承路上遇到哪些困難？如何喚醒現代人對影像技藝、工藝的文化記憶？展望未來，傳統該如何與現代接軌，不再讓文化永續淪於道德勸說？",
//     image: "/images/partnerrecommendations/今周大耳朵.jpg",
//     category: "專題報導",
//     established: "2015",
//     website: "https://south.npm.gov.tw/"
//   }
];

// 影音推薦數據
export interface VideoRecommendation {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
}

export const videosData: VideoRecommendation[] = [
  {
    id: "cultural-heritage-documentary",
    title: "阿里山得獎咖啡如何帶地方走出創生？",
    description: "阿里山得獎咖啡結合高山地景、職人技藝與青農返鄉行動，帶動地方產業轉型與文化重塑，成為地方創生的重要實踐案例。",
    thumbnail: "/images/videorecommendations/阿里山咖啡園.jpg",
    duration: "25:30",
    category: "紀錄片"
  },
  {
    id: "traditional-arts-workshop",
    title: "竹鞘食器：在河床上的原民生態智慧體驗",
    description: "結合魯凱傳統與環境倫理，運用竹鞘製作餐具，在河床野食中實踐無痕生活，展現原民生活智慧與自然共存的永續理念。",
    thumbnail: "/images/videorecommendations/原民生態智慧.jpg",
    duration: "18:45",
    category: "教學"
  }
];

// 文化知識數據
export interface CultureKnowledge {
  id: string;
  title: string;
  image: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const cultureItemsData: CultureKnowledge[] = [
  {
    id: "traditional-arts",
    title: "文化蛋糕圖",
    image: "/images/culture/羽化黑熊.png",
    position: "top-left"
  },
  {
    id: "cultural-heritage",
    title: "文化遺產",
    image: "/images/culture/文化資產.png",
    position: "top-right"
  },
  {
    id: "cultural-memory",
    title: "文化記憶",
    image: "/images/culture/文化記憶.JPG",
    position: "bottom-left"
  },
  {
    id: "modern-culture",
    title: "文化品牌",
    image: "/images/culture/文化品牌.jpg",
    position: "bottom-right"
  }
];

// 輪播圖片數據
export interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const carouselImagesData: CarouselImage[] = [
  {
    id: 1,
    src: "/images/museums/故宮_浮世之美.jpg",
    alt: "故宮浮世之美",
    title: "故宮浮世之美",
    description: "故宮博物院經典展覽，展現東方藝術之美"
  },
  {
    id: 2,
    src: "/images/museums/奇美博物館.jpg",
    alt: "奇美博物館",
    title: "奇美博物館",
    description: "台南奇美博物館的精彩展覽與文物收藏"
  },
  {
    id: 3,
    src: "/images/museums/田中.jpg",
    alt: "中正紀念堂",
    title: "田中",
    description: "田中達也特展-大師眼中的微型組合"
  }
];
