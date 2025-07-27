"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Partner {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  established: string;
  website: string;
}

export default function PartnerRecommendations() {
  const router = useRouter();
  
  // 合作夥伴數據
  const partners: Partner[] = [
    {
      id: "cultural-museum",
      name: "國際文化博物館",
      description: "致力於保存和展示世界各地的珍貴文化遺產，擁有超過50萬件藏品，是全球最重要的文化研究機構之一。",
      image: "/globe.svg", // 主要展示圖片
      category: "博物館機構",
      established: "1985",
      website: "www.cultural-museum.org"
    },
    {
      id: "heritage-foundation",
      name: "世界遺產保護基金會",
      description: "專注於世界文化遺產的保護與修復工作，已成功保護超過200個重要文化遺址，為後代保留珍貴的文化資產。",
      image: "/window.svg", // 主要展示圖片
      category: "保護機構",
      established: "1992",
      website: "www.heritage-foundation.org"
    },
    {
      id: "cultural-education",
      name: "文化教育推廣聯盟",
      description: "推動文化教育普及化，開發創新的文化學習課程，已與全球500多所學校建立合作關係，影響超過100萬學生。",
      image: "/vercel.svg", // 主要展示圖片
      category: "教育機構",
      established: "2001",
      website: "www.cultural-education.org"
    }
  ];

  const handlePartnerClick = (partnerId: string) => {
    // 導航到合作夥伴詳細頁面
    router.push(`/partners/${partnerId}`);
  };

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題區塊 */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            合作夥伴推薦
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            與我們攜手合作的優秀機構，共同致力於文化傳承與推廣的重要使命
          </p>
        </div>
        
        {/* 合作夥伴卡片 - 3個大格子 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              onClick={() => handlePartnerClick(partner.id)}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer overflow-hidden border border-gray-100"
            >
              {/* 主要圖片區域 */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* 漸變遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* 分類標籤 */}
                <div className="absolute top-6 left-6 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  {partner.category}
                </div>
              </div>

              {/* 內容區域 */}
              <div className="p-3 sm:p-4">
                <div className="mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {partner.description}
                  </p>
                </div>

                {/* 機構資訊 */}
                <div className="flex items-center justify-end text-xs sm:text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    <span className="text-xs">{partner.website}</span>
                  </span>
                </div>

                {/* 了解更多按鈕 */}
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors duration-300">
                    了解更多詳情
                  </span>
                  <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* 懸停效果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* 底部說明 */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-base text-gray-600 mb-4">
            想成為我們的合作夥伴？
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            聯繫我們
          </button>
        </div>
      </div>
    </section>
  );
}
