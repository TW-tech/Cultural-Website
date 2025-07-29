# 台灣文化記憶庫 🏛️

展示台灣豐富文化資產、博物館和文化遺址的現代化網站，使用 Next.js 建構。

## ✨ 特色功能

- 🎨 **響應式設計** - 完美適配所有裝置（手機、平板、桌上型電腦）
- 🏛️ **文化展示** - 博物館、文化遺址、文化資產展示
- 🎭 **互動元素** - 圖片輪播、影片推薦、文化亮點
- 📱 **台灣字型** - 使用在地文化特色中文字型提升真實感
- ⚡ **流暢動畫** - 提升使用者體驗的精美動畫效果
- 🌏 **多語言支援** - 繁體中文、英文、日文切換

## 🛠️ 技術架構

- **Next.js 15.4.4** - 使用 App Router 的 React 框架
- **React 19.1.0** - 現代化 UI 程式庫
- **TypeScript** - 型別安全開發
- **Tailwind CSS 4** - 實用優先的 CSS 框架
- **Prisma 6.12.0** - 現代化資料庫 ORM
- **GSAP 3.13.0** - 專業級動畫引擎
- **Framer Motion 12.23.9** - React 動畫效果
- **Radix UI** - 無障礙 UI 元件
- **Zustand** - 輕量級狀態管理

## 🚀 快速開始
1. clone專案到本地端
   ```bash
   git clone [repo link]
   ```

3. **安裝 Node.js 相依套件**
   ```bash
   npm install
   ```

4. **啟動開發伺服器**
   ```bash
   npm run dev
   ```

5. **開啟瀏覽器**
   造訪 [http://localhost:3000](http://localhost:3000) 檢視網站

## 📁 專案結構

```
Cultural-Website/
├── src/
│   ├── app/              # Next.js App Router 頁面
│   ├── components/       # React 組件
│   │   ├── layout/      # 版面佈局組件
│   │   └── sections/    # 頁面區塊組件
│   ├── data/            # 靜態數據
│   ├── hooks/           # 自定義 React Hooks
│   ├── lib/             # 工具函數和配置
│   └── types/           # TypeScript 類型定義
├── public/
│   ├── fonts/           # 自定義字體檔案
│   ├── images/          # 圖片資源 (分類整理)
│   │   ├── culture/    # 文化相關圖片
│   │   ├── mainvisual/ # 主視覺圖片
│   │   └── museums/    # 博物館圖片
│   └── icons/           # 圖標檔案
├── prisma/              # 資料庫 Schema
├── design/              # 設計文檔和規格
├── setup.sh             # Unix/Linux 自動設置腳本
├── setup.bat            # Windows 自動設置腳本
└── .env.example         # 環境變數範例檔案
```

## 🎨 字型系統

本專案使用台灣在地中文字型來增強文化真實感：

- **隨峰體（ThePeak）** - 用於中文內容（`font-thepeak`）
- **Geist Sans** - 用於英文內容（`font-english`）

所有字型皆已針對網頁優化，支援多種字重和樣式。詳細字型設定請參考 [FONTS.md](./FONTS.md)

## 🔧 開發指令

```bash
# 開發模式（支援熱重載）
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

# 資料庫相關指令
npm run db:generate    # 產生 Prisma 用戶端
npm run db:push        # 推送 Schema 到資料庫
npm run db:migrate     # 建立資料庫遷移
npm run db:studio      # 開啟 Prisma Studio 管理介面

# 完整設定（包含相依套件安裝和環境設定）
npm run setup
```

## 📱 響應式支援

所有元件都經過完整的響應式設計測試，確保在各種裝置上都有最佳體驗：

- **手機版**：< 768px（直向、橫向皆支援）
- **平板版**：768px - 1024px（iPad、Android 平板）
- **桌上型電腦版**：> 1024px（筆電、桌機、大螢幕）

### 動畫系統

使用 GSAP 3.13.0 搭配 ScrollTrigger 外掛，提供：
- 進場動畫（Fade in、Scale、Slide）
- 滾動觸發動畫
- 交錯動畫效果（Stagger）
- 響應式動畫適配

## 🤝 貢獻指南

我們歡迎所有形式的貢獻！請閱讀 [CONTRIBUTING.md](./CONTRIBUTING.md) 瞭解：

- 開發環境設定
- 程式碼規範和風格指南
- 提交流程和分支策略
- Bug 回報和功能建議

### 快速貢獻步驟

1. Fork 本專案到您的 GitHub 帳號
2. 複製到本機並執行自動設定腳本
3. 建立功能分支（`git checkout -b feature/amazing-feature`）
4. 提交更改（`git commit -m 'feat: 新增驚豔功能'`）
5. 推送分支（`git push origin feature/amazing-feature`）
6. 建立 Pull Request

## 🐛 問題回報

遇到問題嗎？請：

1. 檢查 [Issues](../../issues) 是否已有相同問題
2. 如果沒有，請建立新的 Issue
3. 提供詳細的錯誤描述和重現步驟
4. 附上您的環境資訊（作業系統、Node.js 版本等）

## 📄 授權條款

本專案採用 MIT 授權條款 - 詳見 [LICENSE](./LICENSE) 檔案

## 🙏 致謝

感謝所有貢獻者和開源社群的支持！

特別感謝：
- 台灣各大博物館提供的文化資源
- 字型設計師們創造的美麗中文字型
- Next.js 和 React 開發團隊

---

**� 讓我們一起保護和推廣台灣的珍貴文化遺產！**
