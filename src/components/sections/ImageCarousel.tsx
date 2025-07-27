"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
}

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
      src: "/images/museums/故宮_浮世之美.jpg",
      alt: "故宮浮世之美",
      title: "故宮浮世之美",
      description: "故宮博物院特展，呈現東方藝術的深厚底蘊"
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
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題區塊 */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-chenyuluoyan text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            精選活動
          </h2>
          {/* <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            精選文化影像，展現世界各地的豐富文化內涵
          </p> */}
        </div>

        {/* 輪播容器 */}
        <div className="relative max-w-6xl mx-auto">
          {/* 主要輪播區域 */}
          <div className="relative h-[18rem] sm:h-[24rem] lg:h-[28rem] bg-white rounded-2xl shadow-2xl overflow-hidden">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center p-6 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* 圖片容器 - 保持原比例 */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain rounded-lg shadow-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 控制按鈕 */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="上一張圖片"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="下一張圖片"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* 縮圖預覽 */}
          <div className="hidden md:flex justify-center mt-6 space-x-4">
            {carouselImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentSlide
                    ? 'ring-4 ring-orange-500 scale-110'
                    : 'ring-2 ring-gray-200 hover:ring-gray-300 opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
