# Cultural Website 🏛️

一個展示台灣豐富文化資產、博物館和文化遺址的現代化網站，使用 Next.js 構建。

## ✨ 特色功能

- 🎨 **響應式設計** - 完美適配所有設備 (手機、平板、桌面)
- 🏛️ **文化展示** - 博物館、文化遺址、文化資產展示
- 🎭 **互動元素** - 圖片輪播、影片推薦、文化亮點
- 📱 **現代字體** - 使用文化特色中文字體提升真實感
- ⚡ **流暢動畫** - 提升使用者體驗的精美動畫效果

## 🛠️ 技術棧

- **Next.js 15.4.4** - 使用 App Router 的 React 框架
- **React 19.1.0** - 現代化 UI 函式庫
- **TypeScript** - 類型安全開發
- **Tailwind CSS 4** - 實用優先的 CSS 框架
- **Prisma 6.12.0** - 現代化資料庫 ORM
- **Framer Motion 12.23.9** - 動畫效果
- **GSAP** - 進階動畫處理
- **Radix UI** - 無障礙 UI 組件

## 🚀 快速開始

### 自動設置 (推薦)

**macOS/Linux 用戶:**
```bash
# Clone 專案
git clone [repository-url]
cd Cultural-Website

# 執行自動設置腳本
./setup.sh
```

**Windows 用戶:**
```cmd
# Clone 專案
git clone [repository-url]
cd Cultural-Website

# 執行自動設置腳本
setup.bat
```

### 手動設置

如果自動設置失敗，請按照以下步驟：

1. **安裝 Node.js 依賴**
   ```bash
   npm install
   ```

2. **設置環境變數**
   ```bash
   cp .env.example .env
   # 編輯 .env 文件，設置資料庫連接字串
   ```

3. **生成 Prisma 客戶端**
   ```bash
   npm run db:generate
   ```

4. **啟動開發服務器**
   ```bash
   npm run dev
   ```

5. **開啟瀏覽器**
   訪問 [http://localhost:3000](http://localhost:3000) 查看網站

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

## 🎨 字體系統

本專案使用特殊的中文字體來增強文化真實感：

- **辰宇落雁體** - 用於標題 (`font-title`)
- **隨峰體** - 用於內文 (`font-body`)
- **Geist Sans** - 用於英文內容 (`font-english`)

詳細字體設置請參考 [FONTS.md](./FONTS.md)

## 🔧 開發指令

```bash
# 開發模式
npm run dev

# 建置專案
npm run build

# 啟動正式環境
npm start

# 類型檢查
npm run type-check

# 代碼檢查
npm run lint

# 修復代碼問題
npm run lint:fix

# 資料庫相關
npm run db:generate    # 生成 Prisma 客戶端
npm run db:push        # 推送 Schema 到資料庫
npm run db:migrate     # 建立資料庫遷移
npm run db:studio      # 開啟 Prisma Studio

# 完整設置 (包含依賴安裝和環境配置)
npm run setup
```

## 📱 響應式支援

所有組件都經過完整的響應式設計測試：

- **手機版**: < 768px
- **平板版**: 768px - 1024px  
- **桌面版**: > 1024px

## 🤝 貢獻指南

我們歡迎所有形式的貢獻！請閱讀 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解：

- 開發環境設置
- 代碼規範和風格指南
- 提交流程和分支策略
- Bug 回報和功能建議

### 快速貢獻步驟

1. Fork 本專案
2. 執行自動設置腳本
3. 創建功能分支 (`git checkout -b feature/amazing-feature`)
4. 提交更改 (`git commit -m 'feat: 添加驚人功能'`)
5. 推送分支 (`git push origin feature/amazing-feature`)
6. 創建 Pull Request

## 🐛 問題回報

遇到問題？請：

1. 查看 [Issues](../../issues) 是否已有相同問題
2. 如果沒有，請創建新的 Issue
3. 提供詳細的錯誤描述和重現步驟
4. 附上您的環境資訊 (OS, Node.js 版本等)

## 📄 授權

本專案採用 MIT 授權條款 - 詳見 [LICENSE](./LICENSE) 文件

## 🙏 致謝

感謝所有貢獻者和開源社群的支持！

---

**🌐 讓我們一起保護和推廣台灣的珍貴文化遺產！**
