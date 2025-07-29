"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImageCarousel() {
  // 輪播圖片數據 (使用原始尺寸比例)
  const carouselImages = [
    {
      id: 1,
      src: "/images/museums/奇美博物館.jpg",
      alt: "奇美博物館",
      title: "奇美博物館",
      description: "典藏豐富的藝術品與樂器，展現東西方文化的交融之美"
    },
    {
      id: 2,
      src: "/images/museums/富邦美術館.jpg", 
      alt: "富邦美術館",
      title: "富邦美術館",
      description: "當代藝術的殿堂，展示現代與傳統藝術的對話"
    },
    {
      id: 3,
      src: "/images/museums/田中.jpg",
      alt: "田中",
      title: "田中",
      description: "田中達也特展-大師眼中的微型組合"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // 自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // 4秒切換一次

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#FAF9EB]">
      {/* 滿寬輪播容器 */}
      <div className="relative w-full group">
        {/* 三圖輪播區域 - 寬扁比例 */}
        <div className="relative h-[20rem] sm:h-[18rem] lg:h-[26rem] xl:h-[28rem] 2xl:h-[30rem] flex items-center justify-center gap-4 lg:gap-8 px-4 sm:px-6 lg:px-8">
            
            {/* 左側預覽圖 */}
            <div className="hidden sm:block relative w-[18%] h-[60%] lg:h-[70%] opacity-60 hover:opacity-80 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="relative w-full h-full rounded-xl shadow-lg overflow-hidden"
                   onClick={prevSlide}>
                <Image
                  src={carouselImages[(currentSlide - 1 + carouselImages.length) % carouselImages.length].src}
                  alt={carouselImages[(currentSlide - 1 + carouselImages.length) % carouselImages.length].alt}
                  fill
                  className="object-cover"
                  sizes="18vw"
                />
                {/* 左箭頭覆蓋層 */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 中間主圖 */}
            <div className="relative w-full sm:w-[64%] h-full rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src={carouselImages[currentSlide].src}
                alt={carouselImages[currentSlide].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 64vw"
                priority
              />
              
              {/* 主圖標題和描述 */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                  {carouselImages[currentSlide].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  {carouselImages[currentSlide].description}
                </p>
              </div>
            </div>

            {/* 右側預覽圖 */}
            <div className="hidden sm:block relative w-[18%] h-[60%] lg:h-[70%] opacity-60 hover:opacity-80 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="relative w-full h-full rounded-xl shadow-lg overflow-hidden"
                   onClick={nextSlide}>
                <Image
                  src={carouselImages[(currentSlide + 1) % carouselImages.length].src}
                  alt={carouselImages[(currentSlide + 1) % carouselImages.length].alt}
                  fill
                  className="object-cover"
                  sizes="18vw"
                />
                {/* 右箭頭覆蓋層 */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* 手機版控制按鈕 */}
          <button
            onClick={prevSlide}
            className="sm:hidden absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="上一張圖片"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="sm:hidden absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="下一張圖片"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 輪播指示器 */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 h-3 bg-orange-500 rounded-full'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                }`}
                aria-label={`前往第 ${index + 1} 張圖片`}
              />
            ))}
          </div>

        </div>
    </section>
  );
}
