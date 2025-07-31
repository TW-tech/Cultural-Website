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
      id: "cultural-heritage-documentary1",
      title: "阿里山得獎咖啡如何帶地方走出創生？",
      description: "阿里山得獎咖啡結合高山地景、職人技藝與青農返鄉行動，帶動地方產業轉型與文化重塑，成為地方創生的重要實踐案例。",
      thumbnail: "/images/videorecommendations/阿里山咖啡園.jpg",
      duration: "25:30",
      category: "紀錄片"
    },
    {
      id: "traditional-arts-workshop1",
      title: "竹鞘食器：在河床上的原民生態智慧體驗",
      description: "結合魯凱傳統與環境倫理，運用竹鞘製作餐具，在河床野食中實踐無痕生活，展現原民生活智慧與自然共存的永續理念。",
      thumbnail: "/images/videorecommendations/原民生態智慧.jpg",
      duration: "18:45",
      category: "教學"
    },
     {
      id: "cultural-heritage-documentary2",
      title: "菲律賓漁船如何搖身一變成為深度旅遊利器？",
      description: "菲律賓傳統螃蟹船，以其獨特的船舷支架聞名，最初為漁業和交通工具。如今，它搖身一變成為深度旅遊的利器，載著旅客探索島嶼，提供獨特的文化與自然體驗。",
      thumbnail: "/images/videorecommendations/漁船.JPG",
      duration: "17:33",
      category: "紀錄片"
    },
    {
      id: "cultural-heritage-documentary3",
      title: "當傳統文化遇上疫情？談文化彈性與應變",
      description: "當泰國傳統舞蹈遇疫情，舞者戴上防疫面具，展現文化彈性與應變。這不僅是視覺衝擊，更是藝術適應與傳承韌性的象徵。",
      thumbnail: "/images/videorecommendations/疫情泰國.jpg",
      duration: "38:45",
      category: "紀錄片"
    },
    {
      id: "cultural-heritage-documentary4",
      title: "奈及利亞傳統活動展現傳統文化舞蹈",
      description: "奈及利亞傳統活動透過多元的文化舞蹈，不僅展現各族群獨特認同與生活智慧，更是傳承歷史、連結信仰的重要儀式與文化載體。",
      thumbnail: "/images/videorecommendations/奈及利亞.jpg",
      duration: "22:10",
      category: "紀錄片"
    },
    {
      id: "traditional-arts-workshop2",
      title: "：澎湖海港文化體現在傳統漁獲保存方法",
      description: "澎湖海港文化體現在傳統漁獲保存的智慧與實踐中，是承載豐富歷史記憶與文化韌性的重要場域。",
      thumbnail: "/images/videorecommendations/澎湖傳統漁獲.JPG",
      duration: "13:45",
      category: "教學"
    },
    {
      id: "cultural-heritage-documentary5",
      title: "阿里山得獎咖啡如何帶地方走出創生？",
      description: "阿里山得獎咖啡結合高山地景、職人技藝與青農返鄉行動，帶動地方產業轉型與文化重塑，成為地方創生的重要實踐案例。",
      thumbnail: "/images/videorecommendations/阿里山咖啡園.jpg",
      duration: "25:30",
      category: "紀錄片"
    },
    {
      id: "traditional-arts-workshop3",
      title: "竹鞘食器：在河床上的原民生態智慧體驗",
      description: "結合魯凱傳統與環境倫理，運用竹鞘製作餐具，在河床野食中實踐無痕生活，展現原民生活智慧與自然共存的永續理念。",
      thumbnail: "/images/videorecommendations/原民生態智慧.jpg",
      duration: "18:45",
      category: "教學"
    },
     {
      id: "cultural-heritage-documentary6",
      title: "菲律賓漁船如何搖身一變成為深度旅遊利器？",
      description: "菲律賓傳統螃蟹船，以其獨特的船舷支架聞名，最初為漁業和交通工具。如今，它搖身一變成為深度旅遊的利器，載著旅客探索島嶼，提供獨特的文化與自然體驗。",
      thumbnail: "/images/videorecommendations/漁船.JPG",
      duration: "17:33",
      category: "紀錄片"
    },
    {
      id: "cultural-heritage-documentary7",
      title: "當傳統文化遇上疫情？談文化彈性與應變",
      description: "當泰國傳統舞蹈遇疫情，舞者戴上防疫面具，展現文化彈性與應變。這不僅是視覺衝擊，更是藝術適應與傳承韌性的象徵。",
      thumbnail: "/images/videorecommendations/疫情泰國.jpg",
      duration: "38:45",
      category: "紀錄片"
    },
    {
      id: "cultural-heritage-documentary8",
      title: "奈及利亞傳統活動展現傳統文化舞蹈",
      description: "奈及利亞傳統活動透過多元的文化舞蹈，不僅展現各族群獨特認同與生活智慧，更是傳承歷史、連結信仰的重要儀式與文化載體。",
      thumbnail: "/images/videorecommendations/奈及利亞.jpg",
      duration: "22:10",
      category: "紀錄片"
    },
    {
      id: "traditional-arts-workshop4",
      title: "：澎湖海港文化體現在傳統漁獲保存方法",
      description: "澎湖海港文化體現在傳統漁獲保存的智慧與實踐中，是承載豐富歷史記憶與文化韌性的重要場域。",
      thumbnail: "/images/videorecommendations/澎湖傳統漁獲.JPG",
      duration: "13:45",
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

  //move per video width
  /*const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const VidWidth  = (VideoRef.current ? VideoRef.current.offsetWidth : 0) + 24;
    const ContainerWidth = scrollRef.current.clientWidth;
    const amount = Math.floor(ContainerWidth / VidWidth) * VidWidth;
    console.log("vidwith="+VidWidth);

    scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };*/
  //fix movement
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.4;
    scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };
   


  return (
    <section
      className="relative py-8 sm:py-10 lg:py-12 bg-[#CC6915]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {/* 標題區塊 */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-10 text-black text-lg sm:text-xl lg:text-2xl font-semibold">
          影音推薦
        </div>
        <div className=" mx-auto px-0 sm:px-0 lg:px-0 relative">
        {/* 漸層遮罩 */}
        <div className="absolute left-0 w-16 sm:w-12 lg:w-60 h-full bg-gradient-to-r from-[#CC6915] to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 w-16 sm:w-12 lg:w-60 h-full bg-gradient-to-l from-[#CC6915] to-transparent pointer-events-none z-10"></div>
        {/* Arrow buttons */}
        {isHovered && showLeft && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/0 rounded-full shadow hover:bg-white/10"
            onClick={() => scroll("left")}
          >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        {isHovered && showRight && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/0 rounded-full shadow hover:bg-white/10"
            onClick={() => scroll("right")}
          >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
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
              className="group relative min-w-[280px] sm:min-w-[320px] lg:min-w-[400px] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100 first:ml-30 last:mr-30"
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
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/80 md:bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
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

              {/* 詳細描述 - 手機顯示，電腦 hover 顯示 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{video.title}</h3>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-200 line-clamp-3 md:line-clamp-none">{video.description}</p>
                  <div className="mt-3 md:mt-4 flex items-center justify-between">
                    <span className="text-xs md:text-sm bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full">
                      {video.category}
                    </span>
                    <span className="text-xs md:text-sm font-medium">{video.duration}</span>
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
