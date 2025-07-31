'use client';
import Link from 'next/link';
import { useState } from 'react';

interface NavigationProps {
  variant?: 'main' | 'header';
  className?: string;
}

export default function Navigation({ variant = 'header', className = '' }: NavigationProps) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('中文');

  const navItems = [
    { href: '/', label: '首頁' },
    { href: '/about', label: '關於我們' },
    { href: '/culture', label: '文化探索' },
    { href: '/gallery', label: '影像藝廊' },
    { href: '/contact', label: '聯絡我們' },
  ];

  if (variant === 'main') {
    // MainVisual 中的完整導航
    return (
      <nav className={`absolute top-4 left-0 right-0 z-20 flex justify-between items-center px-4 sm:px-6 ${className}`}>
        {/* 左側三槓和語言切換 */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* 三槓按鈕 */}
          <button className="flex flex-col justify-center items-center space-y-1 p-2 hover:bg-amber-900/20 rounded-lg transition-colors duration-200">
            <div className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-amber-900 rounded-full"></div>
            <div className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-amber-900 rounded-full"></div>
            <div className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-amber-900 rounded-full"></div>
          </button>
          
          {/* 語言切換按鈕 - 地球圖標 */}
          <div className="relative">
            <button 
              className="p-2 hover:bg-amber-900/20 rounded-lg transition-colors duration-200 flex items-center space-x-1" 
              title="切換語言"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-900 hover:text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={1.5}/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" strokeWidth={1.5}/>
                <path d="M2 12h20" strokeWidth={1.5}/>
              </svg>
              <span className="text-xs text-amber-900 hidden sm:inline font-bold">{currentLanguage}</span>
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
                  🇯🇵 日文
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* 右側功能選項 - 隱藏在小螢幕 */}
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-amber-900 hover:text-amber-800 transition-colors duration-300 text-sm font-bold"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    );
  }

  // 一般頁面的簡化導航
  return (
    <nav className={`bg-white shadow-md ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-[#833416]">
            文化記憶庫
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#833416] transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* 移動端選單按鈕 */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-[#833416]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
