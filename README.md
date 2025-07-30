# 台灣文化記憶庫 🏛️

展示台灣豐富文化資產、博物館和文化遺址的現代化網站，使用 Next.js 建構。

## ✨ 特色功能

- 🎨 **完全響應式設計** - 完美適配所有裝置（手機、平板、桌上型電腦）
- 🖼️ **三圖片輪播展示** - 主圖片居中展示，左右預覽圖片
- 🏛️ **文化展示區塊** - 博物館、文化遺址、文化資產展示
- 🎭 **影音推薦** - 橫向滑動的影片推薦區塊
- 🤝 **合作夥伴展示** - 三欄式合作夥伴推薦
- 📱 **台灣字型** - 使用辰宇落雁體與隨峰體等在地文化特色中文字型
- ⚡ **流暢動畫** - GSAP 動畫引擎提升使用者體驗
- � **優化依賴** - 精簡的依賴包，更快的載入速度

## 🛠️ 技術架構

- **Next.js 15.4.4** - 使用 App Router 的 React 框架（支援 Turbopack）
- **React 19.1.0** - 最新版本 React UI 程式庫
- **TypeScript 5** - 型別安全開發
- **Tailwind CSS 4** - 最新版實用優先的 CSS 框架
- **GSAP 3.13.0** - 專業級動畫引擎
- **Sharp 0.34.3** - 高效能圖片優化
- **Clsx & Tailwind-merge** - 動態 CSS 類別管理

## 🚀 快速開始

1. **複製專案到本地端**
   ```bash
   git clone https://github.com/TW-tech/Cultural-Website.git
   cd Cultural-Website
   ```

2. **安裝 Node.js 相依套件**
   ```bash
   npm install
   ```

3. **啟動開發伺服器**
   ```bash
   npm run dev
   ```

4. **開啟瀏覽器**
   造訪 [http://localhost:3000](http://localhost:3000) 檢視網站

## 📁 專案結構

```
Cultural-Website/
├── src/
│   ├── app/              # Next.js App Router 頁面
│   │   ├── globals.css  # 全域樣式與字型設定
│   │   ├── layout.tsx   # 根佈局組件
│   │   └── page.tsx     # 首頁
│   ├── components/       # React 組件
│   │   ├── layout/      # 版面佈局組件
│   │   │   └── Footer.tsx
│   │   └── sections/    # 頁面區塊組件
│   │       ├── ImageCarousel.tsx       # 三圖片輪播
│   │       ├── Slogan.tsx             # 標語區塊
│   │       ├── CultureHighlights.tsx  # 文化亮點
│   │       ├── VideoRecommendations.tsx # 影音推薦
│   │       └── PartnerRecommendations.tsx # 合作夥伴
│   ├── data/            # 靜態數據與型別定義
│   ├── hooks/           # 自定義 React Hooks
│   ├── lib/             # 工具函數和配置
│   │   ├── fonts.ts     # 字型設定
│   │   └── utils.ts     # 實用工具函數
│   └── types/           # TypeScript 類型定義
├── public/
│   ├── fonts/           # 自定義字體檔案
│   │   ├── ChenYuluoyan-2.0-Thin.ttf    # 辰宇落雁體
│   │   ├── ChenYuluoyan-Thin-Monospaced.ttf
│   │   └── ThePeakFontBeta_V0_102.ttf   # 隨峰體
│   ├── images/          # 圖片資源 (分類整理)
│   │   ├── culture/        # 文化相關圖片
│   │   ├── mainvisual/     # 主視覺圖片
│   │   ├── museums/        # 博物館圖片
│   │   ├── videorecommendations/ # 影音推薦縮圖
│   │   ├── partnerrecommendations/ # 合作夥伴圖片
│   │   └── oldpic/         # 舊照片資源
│   └── icons/           # 圖標檔案
├── design/              # 設計文檔和規格
└── .env.example         # 環境變數範例檔案
```

## 🎨 字型系統

本專案使用台灣在地中文字型來增強文化真實感：

- **辰宇落雁體（ChenYuluoyan）** - 主要標題和裝飾文字（`font-chenyuluoyan`）
- **隨峰體（ThePeak）** - 內文和說明文字（`font-thepeak`）

所有字型皆已針對網頁優化，支援完整的繁體中文字集。詳細字型設定請參考 [FONTS.md](./FONTS.md)

## 📱 響應式設計重點

### 主要斷點
- **手機版**：< 640px
- **小平板**：640px - 1024px  
- **大平板/桌面**：1024px - 1280px
- **大桌面**：≥ 1280px
- **超大螢幕**：≥ 1536px

### 組件響應式特色
- **ImageCarousel**: 手機單圖、桌面三圖佈局，高度自適應
- **PartnerRecommendations**: 手機1欄→平板2欄→桌面3欄
- **VideoRecommendations**: 橫向滑動設計，支援觸控和滑鼠滾輪
- **字型**: 各斷點下的文字大小自動調整

## 🔧 開發指令

```bash
# 開發模式（支援 Turbopack 熱重載）
npm run dev

# 建置專案（正式環境）
npm run build

# 啟動正式環境
npm start

# TypeScript 型別檢查
npm run type-check

# 程式碼檢查（ESLint）
npm run lint

# 自動修復程式碼問題
npm run lint:fix
```

## 🎯 專案優化重點

### 依賴精簡化
本專案已優化依賴包結構，從原本的 17+ 個依賴精簡至 7 個核心依賴：
- ✅ 移除 Framer Motion，改用輕量化 GSAP
- ✅ 移除 Prisma（目前無需資料庫）
- ✅ 移除 Radix UI 和 Zustand（簡化狀態管理）
- ✅ 保留核心功能：Next.js、React、TypeScript、Tailwind CSS、GSAP

### 效能優化
- **圖片優化**: 使用 Sharp 進行高效能圖片處理
- **字型優化**: 自訂字型檔案經過網頁優化
- **程式碼分割**: Next.js 自動程式碼分割
- **CSS 優化**: Tailwind CSS 4 提供更小的打包體積

## 📱 響應式支援詳細說明

### ImageCarousel 組件
- **手機版**: 單圖片展示，高度 14rem，簡潔版面
- **平板版**: 開始顯示左右預覽圖片，高度 18rem
- **桌面版**: 完整三圖片佈局（主圖 64% + 左右預覽各 18%）

### 合作夥伴區塊
- **手機版**: 單欄顯示
- **平板版**: 雙欄顯示  
- **桌面版**: 三欄顯示，寬度對齊 Slogan 區塊（82%）

### 影音推薦區塊
- 橫向滑動設計，支援觸控滑動
- 桌面版支援滑鼠滾輪操作
- 動態顯示左右滑動箭頭

## 🤝 貢獻指南

我們歡迎所有形式的貢獻！請閱讀 [CONTRIBUTING.md](./CONTRIBUTING.md) 瞭解詳細資訊。

### 快速貢獻步驟

1. Fork 本專案到您的 GitHub 帳號
2. 複製到本機：`git clone https://github.com/YOUR_USERNAME/Cultural-Website.git`
3. 安裝依賴：`npm install`
4. 建立功能分支：`git checkout -b feature/amazing-feature`
5. 開發並測試您的功能
6. 提交更改：`git commit -m 'feat: 新增驚豔功能'`
7. 推送分支：`git push origin feature/amazing-feature`
8. 建立 Pull Request

### 程式碼規範
- 使用 TypeScript 進行開發
- 遵循 ESLint 規範
- 組件名稱使用 PascalCase
- 檔案名稱使用 kebab-case
- 提交訊息遵循 [Conventional Commits](https://www.conventionalcommits.org/) 規範

## 🐛 問題回報

遇到問題嗎？請：

1. 檢查 [Issues](../../issues) 是否已有相同問題
2. 如果沒有，請建立新的 Issue
3. 提供詳細的錯誤描述和重現步驟
4. 附上您的環境資訊（作業系統、Node.js 版本、瀏覽器版本）

## � 專案狀態

- ✅ **響應式設計** - 完成所有斷點適配
- ✅ **核心組件** - 圖片輪播、影音推薦、合作夥伴展示
- ✅ **字型系統** - 台灣在地字型整合
- ✅ **效能優化** - 依賴精簡化、圖片優化
- 🚧 **多語言支援** - 規劃中
- 🚧 **內容管理系統** - 規劃中

## �📄 授權條款

本專案採用 MIT 授權條款 - 詳見 [LICENSE](./LICENSE) 檔案

## 🙏 致謝

感謝所有貢獻者和開源社群的支持！

特別感謝：
- 台灣各大博物館提供的文化資源和圖片
- 辰宇落雁體與隨峰體字型設計師
- Next.js、React 和 Tailwind CSS 開發團隊
- GSAP 動畫引擎提供的強大功能

---

**🏛️ 讓我們一起保護和推廣台灣的珍貴文化遺產！**
