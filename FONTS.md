# 字體系統設置指南 (Font System Setup Guide)

本專案使用特殊的中文字體來增強文化真實感和視覺體驗。

## 🎨 字體配置

### 1. 辰宇落雁體 (標題字體)
- **檔案**: `ChenYuluoyan-2.0-Thin.ttf`
- **用途**: 主標題、重要標語
- **CSS 類別**: `font-title`
- **權重**: 300 (Thin)
- **狀態**: ✅ 已配置

### 2. 隨峰體 (內文字體)
- **檔案**: `ThePeakFontBeta_V0_102.ttf`
- **用途**: 正文內容、描述文字
- **CSS 類別**: `font-body`
- **權重**: 400 (Regular)
- **狀態**: ✅ 已配置

### 3. Inter (英文字體)
- **來源**: Google Fonts
- **用途**: 英文內容、介面文字
- **CSS 類別**: `font-english`, `font-sans`
- **權重**: 100-900 (Variable)
- **狀態**: ✅ 已配置

## 📁 檔案結構

```
public/fonts/
├── ChenYuluoyan-2.0-Thin.ttf           # 辰宇落雁體 (已下載)
├── ChenYuluoyan-Thin-Monospaced.ttf   # 等寬版本
├── ThePeakFontBeta_V0_102.ttf          # 隨峰體 (已下載)
├── license.txt                         # 字體授權
└── README.md                           # 字體說明
```

## 🔧 技術實作

### 字體載入 (`src/lib/fonts.ts`)
```typescript
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

// 辰宇落雁體 - 用於標題
export const chenyuluoyan = localFont({
  src: [
    {
      path: './fonts/ChenYuluoyan-2.0-Thin.ttf',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-chenyuluoyan',
  display: 'swap',
});

// 隨峰體 - 用於內文
export const thePeakFont = localFont({
  src: [
    {
      path: './fonts/ThePeakFontBeta_V0_102.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-thepeak',
  display: 'swap',
});

// 英文字體 - Inter
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
```

### Tailwind CSS 配置
```typescript
fontFamily: {
  'title': ['var(--font-chenyuluoyan)', 'serif'],
  'body': ['var(--font-thepeak)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  'english': ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  'sans': ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
}
```

## 🎯 使用方式

### 在 React 組件中使用
```tsx
// 標題
<h1 className="font-title text-4xl">文化遺產</h1>

// 內文
<p className="font-body text-base">傳承文化之美</p>

// 英文內容
<p className="font-english text-base">Cultural Website</p>
```

### CSS 變數
```css
.title {
  font-family: var(--font-chenyuluoyan);
}

.body-text {
  font-family: var(--font-thepeak);
}

.english-text {
  font-family: var(--font-inter);
}
```

## ✅ 字體驗證

### 檢查字體是否正確載入
1. 開啟開發者工具 (F12)
2. 前往 Network 標籤
3. 重新載入頁面
4. 搜尋 `.ttf` 檔案
5. 確認字體檔案成功載入 (狀態碼 200)

### 視覺檢查
- **標題文字**: 應顯示優雅的書法風格 (辰宇落雁體)
- **內文文字**: 應顯示現代化可讀字體 (隨峰體)
- **英文文字**: 應顯示清晰的無襯線字體 (Inter)

## 🔍 故障排除

### 常見問題

1. **字體檔案找不到**
   - 確認檔案路徑: `./fonts/檔案名.ttf`
   - 檢查 `public/fonts/` 目錄中是否有字體檔案

2. **字體未生效**
   - 檢查 CSS 變數是否正確設置
   - 確認 Tailwind 配置中的字體族名稱
   - 重新啟動開發服務器

3. **載入性能問題**
   - 使用 `font-display: swap` 優化載入
   - 考慮字體檔案壓縮
   - 實作字體預載入

### 除錯指令
```bash
# 檢查 Tailwind CSS 編譯
npm run build

# 啟動開發服務器
npm run dev

# 類型檢查
npm run type-check
```

## 📄 字體授權

所有字體都遵循其各自的授權條款：
- **辰宇落雁體**: 開源授權
- **隨峰體**: 參考 `public/fonts/license.txt`
- **Inter**: SIL Open Font License

詳細授權資訊請參考 `public/fonts/license.txt` 檔案。

## 🔗 相關資源

- [辰宇落雁體官網](https://github.com/ChenyuluoyanFont/ChenyuluoyanFont)
- [隨峰體下載](https://cjkfonts.io/blog/ThePeakFont)
- [Inter字體](https://fonts.google.com/specimen/Inter)
- [Next.js 字體優化](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)
