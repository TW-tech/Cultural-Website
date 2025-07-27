import Image from "next/image";

export default function Slogan() {
  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* 左側文字敘述 */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              文化是人類智慧的結晶，承載著歷史的記憶與文明的傳承。在這個快速變遷的時代，
              保護和傳承文化遺產顯得格外重要。每一件文物、每一個傳統技藝、每一段歷史故事，
              都是我們共同的珍貴財富。
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              透過現代科技與傳統文化的結合，我們能夠以全新的方式體驗和理解這些珍貴的文化遺產。
              讓文化不再只是博物館中的靜態展品，而是能夠與現代生活產生共鳴的活躍元素。
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              加入我們的文化探索之旅，一同發現世界各地的獨特文化魅力，感受人類文明的多元與美好。
            </p>
          </div>

          {/* 右側圖片區域 */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/globe.svg"
                alt="文化探索"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/window.svg"
                alt="文化視窗"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
