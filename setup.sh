#!/bin/bash

# Cultural Website 開發環境設置腳本
# 此腳本幫助新貢獻者快速設置開發環境

echo "🏛️  Cultural Website 開發環境設置"
echo "=================================="

# 檢查 Node.js 版本
echo "📋 檢查系統需求..."
node_version=$(node -v 2>/dev/null | cut -d'v' -f2)
npm_version=$(npm -v 2>/dev/null)

if [ -z "$node_version" ]; then
    echo "❌ 未找到 Node.js，請先安裝 Node.js 18.17.0 或更高版本"
    echo "   下載地址: https://nodejs.org/"
    exit 1
fi

required_version="18.17.0"
if [ "$(printf '%s\n' "$required_version" "$node_version" | sort -V | head -n1)" != "$required_version" ]; then
    echo "⚠️  Node.js 版本過舊 (目前: v$node_version，需要: v$required_version+)"
    echo "   請更新 Node.js: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js v$node_version"
echo "✅ npm v$npm_version"

# 安裝依賴
echo ""
echo "📦 安裝專案依賴..."
if npm install; then
    echo "✅ 依賴安裝完成"
else
    echo "❌ 依賴安裝失敗"
    exit 1
fi

# 設置環境變數
echo ""
echo "⚙️  設置環境變數..."
if [ ! -f ".env" ]; then
    if cp .env.example .env; then
        echo "✅ 已創建 .env 文件"
        echo "ℹ️  請編輯 .env 文件並填入您的資料庫連接資訊"
    else
        echo "❌ 無法創建 .env 文件"
        exit 1
    fi
else
    echo "ℹ️  .env 文件已存在"
fi

# 生成 Prisma 客戶端
echo ""
echo "🗄️  設置資料庫..."
if npm run db:generate; then
    echo "✅ Prisma 客戶端生成完成"
else
    echo "⚠️  Prisma 客戶端生成失敗 (可能需要先設置資料庫)"
fi

# 檢查字體文件
echo ""
echo "🎨 檢查字體文件..."
fonts_dir="public/fonts"
missing_fonts=()

if [ ! -f "$fonts_dir/ChenYuluoyan-2.0-Thin.ttf" ]; then
    missing_fonts+=("辰宇落雁體")
fi

if [ ! -f "$fonts_dir/ThePeakFontBeta_V0_102.ttf" ]; then
    missing_fonts+=("隨峰體")
fi

if [ ${#missing_fonts[@]} -eq 0 ]; then
    echo "✅ 所有字體文件已就位"
else
    echo "⚠️  缺少字體文件:"
    for font in "${missing_fonts[@]}"; do
        echo "   - $font"
    done
    echo "   請參考 FONTS.md 了解如何下載字體"
fi

# 完成設置
echo ""
echo "🎉 設置完成！"
echo ""
echo "📝 接下來的步驟:"
echo "   1. 編輯 .env 文件設置資料庫連接"
echo "   2. 如有缺少字體，請按 FONTS.md 指南下載"
echo "   3. 執行 'npm run dev' 啟動開發服務器"
echo "   4. 開啟 http://localhost:3000 查看網站"
echo ""
echo "📚 更多資訊請參考:"
echo "   - README.md: 專案概覽"
echo "   - FONTS.md: 字體設置指南"
echo "   - CONTRIBUTING.md: 貢獻指南"
echo ""
echo "🚀 開始開發: npm run dev"
