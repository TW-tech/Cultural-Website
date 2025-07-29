"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface VideoRecommendation {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
}

export default function VideoRecommendations() {
  const videos: VideoRecommendation[] = [
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
    // ➕ Add more if needed
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const VideoRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Check if arrows should show
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const VidWidth  = (VideoRef.current ? VideoRef.current.offsetWidth : 0) + 24;
    const ContainerWidth = scrollRef.current.clientWidth;
    const amount = Math.floor(ContainerWidth / VidWidth) * VidWidth;
    console.log("vidwith="+VidWidth);

    scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section
      className="py-8 sm:py-10 lg:py-12 bg-[#122617]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Arrow buttons */}
        {isHovered && showLeft && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/0 rounded-full shadow hover:bg-white/70"
            onClick={() => scroll("left")}
          >
            ←
          </button>
        )}
        {isHovered && showRight && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/0 rounded-full shadow hover:bg-white/70"
            onClick={() => scroll("right")}
          >
            →
          </button>
        )}

        {/* Scrollable video list */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scrollbar-hide"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              ref={VideoRef}
              className="group relative min-w-[280px] sm:min-w-[320px] lg:min-w-[400px] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
            >
              {/* 影片縮圖區域 */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* 影片播放圖示 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* 影片資訊標籤 */}
                <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {video.category}
                </div>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {video.duration}
                </div>
              </div>

              {/* Hover 顯示詳細描述 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">{video.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-200">{video.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {video.category}
                    </span>
                    <span className="text-sm font-medium">{video.duration}</span>
                  </div>
                </div>
              </div>

              {/* 懸停效果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
