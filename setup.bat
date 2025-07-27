@echo off
chcp 65001 >nul
echo 🏛️ Cultural Website 開發環境設置
echo ==================================
echo.

REM 檢查 Node.js
echo 📋 檢查系統需求...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 未找到 Node.js，請先安裝 Node.js 18.17.0 或更高版本
    echo    下載地址: https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=1" %%i in ('node -v') do set node_version=%%i
echo ✅ Node.js %node_version%

npm -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 未找到 npm
    pause
    exit /b 1
)

for /f "tokens=1" %%i in ('npm -v') do set npm_version=%%i
echo ✅ npm v%npm_version%

REM 安裝依賴
echo.
echo 📦 安裝專案依賴...
call npm install
if %errorlevel% neq 0 (
    echo ❌ 依賴安裝失敗
    pause
    exit /b 1
)
echo ✅ 依賴安裝完成

REM 設置環境變數
echo.
echo ⚙️ 設置環境變數...
if not exist ".env" (
    copy ".env.example" ".env" >nul
    if %errorlevel% equ 0 (
        echo ✅ 已創建 .env 文件
        echo ℹ️ 請編輯 .env 文件並填入您的資料庫連接資訊
    ) else (
        echo ❌ 無法創建 .env 文件
        pause
        exit /b 1
    )
) else (
    echo ℹ️ .env 文件已存在
)

REM 生成 Prisma 客戶端
echo.
echo 🗄️ 設置資料庫...
call npm run db:generate
if %errorlevel% equ 0 (
    echo ✅ Prisma 客戶端生成完成
) else (
    echo ⚠️ Prisma 客戶端生成失敗 ^(可能需要先設置資料庫^)
)

REM 檢查字體文件
echo.
echo 🎨 檢查字體文件...
set missing_fonts=
if not exist "public\fonts\ChenYuluoyan-2.0-Thin.ttf" (
    set missing_fonts=%missing_fonts% 辰宇落雁體
)
if not exist "public\fonts\ThePeakFontBeta_V0_102.ttf" (
    set missing_fonts=%missing_fonts% 隨峰體
)

if "%missing_fonts%"=="" (
    echo ✅ 所有字體文件已就位
) else (
    echo ⚠️ 缺少字體文件: %missing_fonts%
    echo    請參考 FONTS.md 了解如何下載字體
)

REM 完成設置
echo.
echo 🎉 設置完成！
echo.
echo 📝 接下來的步驟:
echo    1. 編輯 .env 文件設置資料庫連接
echo    2. 如有缺少字體，請按 FONTS.md 指南下載
echo    3. 執行 'npm run dev' 啟動開發服務器
echo    4. 開啟 http://localhost:3000 查看網站
echo.
echo 📚 更多資訊請參考:
echo    - README.md: 專案概覽
echo    - FONTS.md: 字體設置指南
echo    - CONTRIBUTING.md: 貢獻指南
echo.
echo 🚀 開始開發: npm run dev
echo.
pause
