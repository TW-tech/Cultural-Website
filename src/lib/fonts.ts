import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

// 辰宇落雁體 - 用於標題
export const chenyuluoyan = localFont({
  src: [
    {
      path: '../../public/fonts/ChenYuluoyan-2.0-Thin.ttf',
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
      path: '../../public/fonts/ThePeakFontBeta_V0_102.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-thepeak',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

// 英文字體 - Inter
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// 導出字體變數用於 Tailwind CSS
export const fontVariables = `${chenyuluoyan.variable} ${thePeakFont.variable} ${inter.variable}`;

// 導出字體類別名稱
export const fonts = {
  title: 'var(--font-chenyuluoyan)',
  body: 'var(--font-thepeak)',
  english: 'var(--font-inter)',
};
