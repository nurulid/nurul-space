'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '../sharedUI/Header';
import { Footer } from '../sharedUI/Footer';
import { useBgTheme } from '../hooks/useBgTheme';
import BgThemeSelector from '../sharedUI/BgThemeSelector';

export const Layout = ({ children }) => {
  const currentPath = usePathname();
  const { theme } = useBgTheme();

  if (
    currentPath.startsWith('/landing-page') ||
    currentPath.startsWith('/ui/mail')
  ) {
    return <>{children}</>;
  }

  if (currentPath === '/') {
    return (
      <div className="flex flex-col justify-between min-h-screen">
        <div className="relative trnasition-all z-[2]">
          <div style={{ '--bg': theme }} className="bg-custom" />
          <div className="bg-pattern" />
          <Header />
          <BgThemeSelector />
          <main className="max-w-7xl w-full mx-auto h-full py-6 px-5 lg:px-10">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="relative trnasition-all z-[2]">
        <Header />
        <main className="max-w-7xl w-full mx-auto h-full py-6 px-5 lg:px-10">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};
