import { Metadata } from 'next';
import { PageLayout } from '@/components';

export const metadata: Metadata = {
  title: '文化探索 - 文化記憶庫',
  description: '深入探索台灣豐富的文化內涵，發現傳統藝術、民俗文化和歷史故事',
};

export default function CulturePage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header 區域 */}
      <div className="bg-[#833416] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            文化探索
          </h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
            踏上一段穿越時空的文化旅程，發現各民族獨特的傳統、藝術與智慧
          </p>
        </div>
      </div>

      {/* 主要內容區域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 文化分類區域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-[#833416] to-[#a0471f] flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">傳統藝術</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                探索台灣豐富的傳統藝術形式，包括書法、繪畫、雕刻等傳統技藝
              </p>
              <button className="bg-[#833416] text-white px-4 py-2 rounded-lg hover:bg-[#a0471f] transition-colors">
                了解更多
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-[#833416] to-[#a0471f] flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">民俗文化</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                深入了解台灣各地的民俗節慶、傳統習俗和宗教文化
              </p>
              <button className="bg-[#833416] text-white px-4 py-2 rounded-lg hover:bg-[#a0471f] transition-colors">
                了解更多
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-[#833416] to-[#a0471f] flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">歷史故事</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                聆聽台灣歷史的精彩故事，了解這片土地的文化發展軌跡
              </p>
              <button className="bg-[#833416] text-white px-4 py-2 rounded-lg hover:bg-[#a0471f] transition-colors">
                了解更多
              </button>
            </div>
          </div>
        </div>

        {/* 特色內容區域 */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            文化探索亮點
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">互動式體驗</h3>
              <p className="text-gray-600 leading-relaxed">
                透過現代科技打造沉浸式的文化體驗，讓您能夠更深入地理解和感受傳統文化的魅力。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">專家導覽</h3>
              <p className="text-gray-600 leading-relaxed">
                由文化專家和學者提供深度解說，帶您探索文化背後的深層意義和歷史脈絡。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageLayout>
  );
}
