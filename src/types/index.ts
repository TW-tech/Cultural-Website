// 通用類型定義
export interface Partner {
  id: string;
  name: string;
  description: string;
  image: string;
  website?: string;
  established?: string;
  category?: string;
}

export interface CultureItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  date?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  duration?: string;
}

export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

// API 響應類型
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: 'success' | 'error';
}

// 頁面 Props 類型
export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
