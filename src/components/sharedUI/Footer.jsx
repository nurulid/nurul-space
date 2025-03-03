import React from 'react';
import { getCurrentYear } from '@/lib/utils';

export const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="p-5 text-center border-t-[.5px] border-purple-300 text-gray-400 bg-gray-500/10 text-xs">
      <div className="max-w-7xl w-full mx-auto flex justify-center xs:justify-between gap-2 flex-col xs:flex-row px-5 lg:px-10">
        <p>ⓒ {currentYear} Made with 💜 by Nurul</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
};
