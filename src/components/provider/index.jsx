'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { BgThemeProvider } from '../context/BgThemeContext';

export const Provider = ({ children }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <BgThemeProvider>{children}</BgThemeProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
};
