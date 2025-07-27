import Image from "next/image";

interface CultureKnowledge {
  id: string;
  title: string;
  image: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function CultureHighlights() {
  // 文化知識數據
  const cultureItems: CultureKnowledge[] = [
    {
      id: "traditional-arts",
      title: "文化蛋糕圖",
      image: "/images/culture/可愛蛋糕圖.JPG",
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

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題區塊 */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            文化知識
          </h2>
        </div>
        
        {/* 文化知識容器 - 長方形 2x2 排列 */}
        <div className="w-full">
          <div className="aspect-[3/2] sm:aspect-[2/1] grid grid-cols-2 grid-rows-2 gap-1 sm:gap-2 lg:gap-4 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
            {cultureItems.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
              >
                {/* 圖片 */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* 遮罩和標題 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                    <h3 className="text-white font-bold text-sm sm:text-lg lg:text-xl text-shadow-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* 懸停效果邊框 */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}