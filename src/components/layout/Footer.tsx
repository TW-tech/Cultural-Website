import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#833416] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-2 sm:mb-3 lg:mb-4">
              <Image
                src="/icons/globe.svg"
                alt="台灣文化記憶庫標誌"
                width={20}
                height={20}
                className="sm:w-6 sm:h-6 lg:w-8 lg:h-8 mr-2 sm:mr-3 filter invert"
              />
              <h3 className="text-base sm:text-lg lg:text-xl font-bold">台灣文化記憶庫</h3>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-2 sm:mb-3 lg:mb-4 leading-relaxed">
              保存和分享世界文化多樣性，透過數位說故事和社群參與來傳承文化。
            </p>
            <div className="flex space-x-2 sm:space-x-3 lg:space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z"/>
                </svg>
              </a>
            </div>
            <div className="flex items-center mb-2 sm:mb-3 lg:mb-4">
              <Image
                src="/icons/草山_logo_text.png"
                alt="Cultural Website Logo"
                width={140}
                height={20}
                className="w-[300px] sm:w-[140px] lg:w-[300px] h-auto mt-4 "
              />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4">快速連結</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#" className="text-xs sm:text-sm lg:text-base text-gray-400 hover:text-white transition-colors">首頁</a></li>
              <li><a href="#" className="text-xs sm:text-sm lg:text-base text-gray-400 hover:text-white transition-colors">文化探索</a></li>
              <li><a href="#" className="text-xs sm:text-sm lg:text-base text-gray-400 hover:text-white transition-colors">活動資訊</a></li>
              <li><a href="#" className="text-xs sm:text-sm lg:text-base text-gray-400 hover:text-white transition-colors">關於我們</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4">資源中心</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#" className="text-xs sm:text-sm lg:text-base text-gray-400 hover:text-white transition-colors">部落格</a></li>
              <li><a href="#" className="text-xs sm:text-sm lg:text-base text-gray-400 hover:text-white transition-colors">圖片庫</a></li>
              <li><a href="#" className="text-xs sm:text-sm lg:text-base text-gray-400 hover:text-white transition-colors">聯絡我們</a></li>
              <li><a href="#" className="text-xs sm:text-sm lg:text-base text-gray-400 hover:text-white transition-colors">客戶支援</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © 2025 台灣文化記憶庫. 版權所有.
          </p>
        </div>
      </div>
    </footer>
  );
}
