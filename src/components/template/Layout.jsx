'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import { Header } from '../sharedUI/Header';
import { Footer } from '../sharedUI/Footer';
import { useBgTheme } from '../hooks/useBgTheme';
import BgThemeSelector from '../sharedUI/BgThemeSelector';
import { BgTheme } from '../sharedUI/BgTheme';

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
        <div className="relative transition-all z-[2]">
          <BgTheme theme={theme}/>
          <Header />
          {/* <BgThemeSelector /> */}
          <motion.main
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween' }}
            className="max-w-[1020px] w-full mx-auto h-full py-6 px-5 lg:px-10"
          >
            {children}
          </motion.main>
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
