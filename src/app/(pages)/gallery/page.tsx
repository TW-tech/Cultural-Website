import { Metadata } from 'next';
import { PageLayout } from '@/components';

export const metadata: Metadata = {
  title: '影像藝廊 - 文化記憶庫',
  description: '瀏覽豐富的文化影像收藏，包括歷史照片、藝術作品和文物紀錄',
};

export default function GalleryPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header 區域 */}
      <div className="bg-[#833416] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            影像藝廊
          </h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
            透過珍貴的影像資料，重現文化的美好時光與歷史瞬間
          </p>
        </div>
      </div>

      {/* 主要內容區域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 分類篩選 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-[#833416] text-white px-6 py-2 rounded-full hover:bg-[#a0471f] transition-colors">
            全部
          </button>
          <button className="bg-white text-[#833416] border border-[#833416] px-6 py-2 rounded-full hover:bg-[#833416] hover:text-white transition-colors">
            歷史照片
          </button>
          <button className="bg-white text-[#833416] border border-[#833416] px-6 py-2 rounded-full hover:bg-[#833416] hover:text-white transition-colors">
            藝術作品
          </button>
          <button className="bg-white text-[#833416] border border-[#833416] px-6 py-2 rounded-full hover:bg-[#833416] hover:text-white transition-colors">
            文物紀錄
          </button>
          <button className="bg-white text-[#833416] border border-[#833416] px-6 py-2 rounded-full hover:bg-[#833416] hover:text-white transition-colors">
            民俗活動
          </button>
        </div>

        {/* 影像展示區域 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* 示例圖片卡片 */}
          {Array.from({ length: 12 }, (_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#833416]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-[#833416] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    查看詳情
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <p className="text-white text-sm font-medium">文化影像 {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 載入更多按鈕 */}
        <div className="text-center mt-12">
          <button className="bg-[#833416] text-white px-8 py-3 rounded-lg hover:bg-[#a0471f] transition-colors font-semibold">
            載入更多影像
          </button>
        </div>

        {/* 特色說明 */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            影像收藏特色
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#833416] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">珍貴史料</h3>
              <p className="text-gray-600">收錄大量珍貴的歷史照片和文獻資料</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#833416] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">藝術收藏</h3>
              <p className="text-gray-600">展示台灣各時期的藝術作品和創作</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#833416] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">高解析度</h3>
              <p className="text-gray-600">提供高品質的影像檢視和下載服務</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageLayout>
  );
}
