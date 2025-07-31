import { Metadata } from 'next';
import { PageLayout } from '@/components';

export const metadata: Metadata = {
  title: '聯絡我們 - 文化記憶庫',
  description: '聯絡文化記憶庫團隊，分享您的想法或尋求協助',
};

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header 區域 */}
      <div className="bg-[#833416] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            聯絡我們
          </h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
            有任何問題或建議嗎？我們很樂意聽到您的聲音
          </p>
        </div>
      </div>

      {/* 主要內容區域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 聯絡表單 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">發送訊息</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#833416] focus:border-transparent outline-none transition-colors"
                  placeholder="請輸入您的姓名"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  電子郵件 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#833416] focus:border-transparent outline-none transition-colors"
                  placeholder="請輸入您的電子郵件"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  主旨
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#833416] focus:border-transparent outline-none transition-colors"
                  placeholder="請輸入訊息主旨"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  訊息內容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#833416] focus:border-transparent outline-none transition-colors resize-vertical"
                  placeholder="請輸入您的訊息內容"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#833416] text-white py-3 px-6 rounded-lg hover:bg-[#a0471f] transition-colors font-semibold"
              >
                發送訊息
              </button>
            </form>
          </div>

          {/* 聯絡資訊 */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">聯絡資訊</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#833416] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">電子郵件</h3>
                    <p className="text-gray-600">info@culturememory.tw</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#833416] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">電話</h3>
                    <p className="text-gray-600">+886-2-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#833416] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">地址</h3>
                    <p className="text-gray-600">台北市中正區重慶南路一段122號</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#833416] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">服務時間</h3>
                    <p className="text-gray-600">週一至週五 09:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">關注我們</h2>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-[#833416] rounded-lg flex items-center justify-center text-white hover:bg-[#a0471f] transition-colors">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="w-12 h-12 bg-[#833416] rounded-lg flex items-center justify-center text-white hover:bg-[#a0471f] transition-colors">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="w-12 h-12 bg-[#833416] rounded-lg flex items-center justify-center text-white hover:bg-[#a0471f] transition-colors">
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageLayout>
  );
}
