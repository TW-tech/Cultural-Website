import { ReactNode } from 'react';
import { Navigation, Footer } from '@/components';

interface PageLayoutProps {
  children: ReactNode;
  showNavigation?: boolean;
  showFooter?: boolean;
}

export default function PageLayout({ 
  children, 
  showNavigation = true, 
  showFooter = true 
}: PageLayoutProps) {
  return (
    <>
      {showNavigation && <Navigation variant="header" />}
      <main>
        {children}
      </main>
      {showFooter && <Footer />}
    </>
  );
}
