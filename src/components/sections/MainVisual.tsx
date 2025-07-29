"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function MainVisual() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('中文');
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 設定初始狀態
    gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, buttonsRef.current, scrollIndicatorRef.current], {
      opacity: 0,
      y: 50
    });

    // 動畫序列
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3")
    .to(buttonsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3")
    .to(scrollIndicatorRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.2");

  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1080px] overflow-hidden bg-[#A47C52]">
      {/* header */}
      
      {/* 功能列 */}
      <nav className="absolute top-4 left-0 right-0 z-20 flex justify-between items-center px-4 sm:px-6">
        {/* 左側三槓和語言切換 */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* 三槓按鈕 */}
          <button className="flex flex-col justify-center items-center space-y-1 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
            <div className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-white rounded-full"></div>
            <div className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-white rounded-full"></div>
            <div className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-white rounded-full"></div>
          </button>
          
          {/* 語言切換按鈕 - 地球圖標 */}
          <div className="relative">
            <button 
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 flex items-center space-x-1" 
              title="切換語言"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white hover:text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={1.5}/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" strokeWidth={1.5}/>
                <path d="M2 12h20" strokeWidth={1.5}/>
              </svg>
              <span className="text-xs text-white hidden sm:inline">{currentLanguage}</span>
            </button>
            
            {/* 下拉選單 */}
            {isLanguageOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden min-w-[120px] z-30">
                <button
                  className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 transition-colors duration-200 text-sm"
                  onClick={() => {
                    setCurrentLanguage('中文');
                    setIsLanguageOpen(false);
                  }}
                >
                  🇹🇼 中文
                </button>
                <button
                  className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 transition-colors duration-200 text-sm"
                  onClick={() => {
                    setCurrentLanguage('English');
                    setIsLanguageOpen(false);
                  }}
                >
                  🇺🇸 English
                </button>
                <button
                  className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 transition-colors duration-200 text-sm"
                  onClick={() => {
                    setCurrentLanguage('日本語');
                    setIsLanguageOpen(false);
                  }}
                >
                  🇯🇵 日本語
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* 右側功能選項 - 隱藏在小螢幕 */}
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          <a href="/" className="text-white hover:text-white/80 transition-colors duration-300 text-sm font-medium">
            首頁
          </a>
          <a href="/about" className="text-white hover:text-white/80 transition-colors duration-300 text-sm font-medium">
            關於我們
          </a>
          <a href="/culture" className="text-white hover:text-white/80 transition-colors duration-300 text-sm font-medium">
            文化探索
          </a>
          <a href="/gallery" className="text-white hover:text-white/80 transition-colors duration-300 text-sm font-medium">
            影像藝廊
          </a>
          <a href="/contact" className="text-white hover:text-white/80 transition-colors duration-300 text-sm font-medium">
            聯絡我們
          </a>
        </div>
      </nav>

      {/* 背景大圖 */}
      <div className="absolute inset-0">
        <Image
          src="/images/mainvisual/entry_pic2.jpg"
          alt="台灣文化記憶庫主視覺"
          fill
          className="object-cover"
          priority
        />
        {/* 深色遮罩層 */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* 內容層 */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-amber-50 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            ref={titleRef}
            className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-shadow-lg leading-tight text-amber-100"
          >
            文化記憶庫
          </h1>
          {/*<h2 
            ref={subtitleRef}
            className="font-title text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mb-6 sm:mb-8 text-shadow-md text-amber-50"
          >
            探索文化之美
          </h2>8*/}
          <p 
            ref={descriptionRef}
            className="font-body text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 text-shadow-md max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed text-slate-100"
          >
            踏上一段穿越時空的文化旅程，發現各民族獨特的傳統、藝術與智慧
          </p>
          
          
        </div>
        
        {/* 向下滾動指示器 */}
        <div 
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <svg className="w-6 h-6 text-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
