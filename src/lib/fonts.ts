import localFont from 'next/font/local';
import { Inter } from 'next/font/google';


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
