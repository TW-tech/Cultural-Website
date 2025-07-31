"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Navigation } from '@/components';

export default function MainVisual() {
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
      <Navigation variant="main" />

      {/* 背景大圖 */}
      <div className="absolute inset-0">
        <Image
          src="/images/mainvisual/entry_pic.jpg"
          alt="台灣文化記憶庫主視覺圖"
          fill
          className="object-cover"
          priority
        />
        {/* 橘色半透明遮罩層 */}
        <div className="absolute inset-0 bg-orange-500/30"></div>
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
