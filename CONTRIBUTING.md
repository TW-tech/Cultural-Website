# 貢獻指南 (Contributing Guide)

感謝您對 Cultural Heritage 專案的興趣！這份指南將幫助您開始貢獻代碼。

## 🚀 快速開始

### 系統需求
- **Node.js**: 18.17.0 或更高版本
- **npm**: 9.0.0 或更高版本
- **Git**: 最新版本
- **資料庫**: PostgreSQL (推薦) 或 SQLite (開發用)

### 1. Fork 和 Clone 專案

```bash
# Fork 專案到您的 GitHub 帳號，然後 clone
git clone https://github.com/YOUR_USERNAME/Cultural-Website.git
cd Cultural-Website
```

### 2. 自動設置開發環境

**macOS/Linux:**
```bash
# 執行自動設置腳本
./setup.sh
```

**Windows:**
```cmd
# 執行自動設置腳本
setup.bat
```

### 3. 手動設置 (如果自動設置失敗)

```bash
# 1. 安裝依賴
npm install

# 2. 複製環境變數檔案
cp .env.example .env

# 3. 編輯 .env 文件並設置資料庫連接
# DATABASE_URL="postgresql://username:password@localhost:5432/cultural_website"

# 4. 生成 Prisma 客戶端
npm run db:generate

# 5. 啟動開發服務器
npm run dev
```

### 4. 字體設置

本專案使用特殊字體，請按照以下步驟設置：

1. **辰宇落雁體** (已自動下載)
2. **隨峰體** (需手動下載)：
   - 訪問：https://cjkfonts.io/blog/ThePeakFont
   - 下載字體文件
   - 放置到 `public/fonts/` 資料夾

詳細指南請參考 [FONTS.md](./FONTS.md)

## 🛠️ 開發工作流程

### 分支策略
- `main`: 主分支，穩定版本
- `develop`: 開發分支
- `feature/功能名稱`: 功能分支
- `fix/問題描述`: 修復分支

### 開發步驟

1. **創建功能分支**
```bash
git checkout -b feature/your-feature-name
```

2. **開發和測試**
```bash
# 啟動開發服務器
npm run dev

# 運行類型檢查
npm run type-check

# 運行 linting
npm run lint

# 修復 linting 問題
npm run lint:fix
```

3. **提交代碼**
```bash
git add .
git commit -m "feat: 添加新功能描述"
```

4. **推送分支**
```bash
git push origin feature/your-feature-name
```

5. **創建 Pull Request**
- 到 GitHub 上創建 PR
- 填寫詳細的描述
- 等待代碼審查

## 📋 代碼規範

### Commit 訊息格式
使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```
type(scope): description

例如：
feat(auth): 添加用戶登入功能
fix(ui): 修復響應式設計問題
docs(readme): 更新安裝指南
style(components): 調整按鈕樣式
refactor(api): 重構 API 結構
test(unit): 添加單元測試
chore(deps): 更新依賴版本
```

### 代碼風格
- 使用 TypeScript
- 遵循 ESLint 規則
- 使用 Tailwind CSS 進行樣式設計
- 組件使用 PascalCase 命名
- 檔案名使用 camelCase

### 檔案結構
```
src/
├── app/              # Next.js App Router
├── components/       # React 組件
│   ├── layout/      # 佈局組件
│   └── sections/    # 頁面區塊組件
├── data/            # 靜態數據
├── hooks/           # 自定義 Hooks
├── lib/             # 工具函數和配置
└── types/           # TypeScript 類型定義
```

## 🧪 測試

目前專案使用基本的類型檢查和 linting：

```bash
# 類型檢查
npm run type-check

# 代碼檢查
npm run lint

# 修復代碼問題
npm run lint:fix
```

## 📱 響應式開發

確保所有新功能都支援響應式設計：
- 手機版: < 768px
- 平板版: 768px - 1024px
- 桌面版: > 1024px

使用 Tailwind CSS 的響應式前綴：
```html
<div className="text-sm sm:text-base lg:text-lg">
  響應式文字
</div>
```

## 🎨 字體使用

- **標題**: `font-title` (辰宇落雁體)
- **內文**: `font-body` (隨峰體)
- **英文**: `font-english` (Geist Sans)

## 🐛 Bug 回報

請使用 GitHub Issues 回報問題：

1. 使用清楚的標題描述問題
2. 提供重現步驟
3. 包含錯誤訊息和截圖
4. 說明您的環境 (OS, Node.js 版本等)

## 💡 功能建議

歡迎提出新功能建議：

1. 先檢查 Issues 是否已有類似建議
2. 創建新的 Issue 並使用 "enhancement" 標籤
3. 詳細描述功能和使用場景
4. 如果可能，提供設計草圖或參考

## 📞 聯絡方式

如果您有任何問題，歡迎：
- 創建 GitHub Issue
- 參與 GitHub Discussions
- 發送電子郵件 (如果有提供)

## 📄 授權

本專案採用 MIT 授權，詳見 [LICENSE](./LICENSE) 文件。

---

再次感謝您的貢獻！🎉
