"use client"

import React from 'react';
import { ContentReveal } from '../motion/contentReveal';
import { useBgTheme } from '../hooks/useBgTheme';
import { BgTheme } from '../sharedUI/BgTheme';

export default function ContentLayout({ children }) {
  const { theme } = useBgTheme();

  return (
    <>
      {/* <BgTheme theme={theme} isPatternOnly/> */}
      <ContentReveal className="max-w-2xl w-full mx-auto pt-4 pb-10 sm:py-10">
        {children}
      </ContentReveal>
    </>
  );
}
