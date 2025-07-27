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
  // 影音推薦數據
  const videos: VideoRecommendation[] = [
    {
      id: "cultural-heritage-documentary",
      title: "文化遺產探索紀錄片",
      description: "深入探訪台灣各地珍貴的文化遺產，從古蹟建築到傳統工藝，用鏡頭記錄下這些承載歷史記憶的珍貴資產。透過專家學者的深度解說，帶您瞭解文化保存的重要性與挑戰。",
      thumbnail: "/globe.svg",
      duration: "25:30",
      category: "紀錄片"
    },
    {
      id: "traditional-arts-workshop",
      title: "傳統藝術工作坊實錄",
      description: "跟隨傳統工藝大師的腳步，學習陶藝、書法、刺繡等傳統技藝。這部影片記錄了年輕學徒與老師傅之間的技藝傳承過程，展現傳統文化在現代社會中的活力與創新。",
      thumbnail: "/window.svg",
      duration: "18:45",
      category: "教學"
    }
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題區塊 */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            影音推薦
          </h2>
        </div>
        
        {/* 影音卡片 - 2個格子 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
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
                      <path d="M8 5v14l11-7z"/>
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
                  <p className="text-sm leading-relaxed text-gray-200">
                    {video.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {video.category}
                    </span>
                    <span className="text-sm font-medium">
                      {video.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* 懸停效果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* 底部更多影片區塊 */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-base text-gray-600 mb-4">
            還有更多精彩的文化影音內容等您探索
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            觀看更多影片
          </button>
        </div>
      </div>
    </section>
  );
}
