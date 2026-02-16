'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { ContentReveal } from '../motion/contentReveal';
import { BgTheme } from '../sharedUI/BgTheme';
import { useBgTheme } from '../hooks/useBgTheme';

export default function WritingLayout({ children }) {
  const pathname = usePathname();
  const { theme } = useBgTheme();
  const isWritingIndex = pathname == '/writings';

  return (
    <>
      {/* <BgTheme theme={theme} isPatternOnly/> */}
      <ContentReveal className="max-w-2xl w-full mx-auto py-2 sm:py-9 prose prose-slate dark:prose-invert dark:prose-headings:text-gray-100 dark:prose-p:text-gray-300 dark:prose-li:text-gray-300 dark:prose-strong:text-gray-100 dark:prose-a:text-violet-300 dark:prose-code:text-gray-200 relative">
        {isWritingIndex ? (
          <>{children}</>
        ) : (
          <>
            <Link
              href="/writing"
              className="group p-1 size-[34px] sticky top-20 md:top-24 inline-flex items-center justify-center bg-purple-50 rounded-md no-underline z-20"
            >
              <ArrowLeft
                size={20}
                className="text-gray-400 group-hover:text-violet-600 transition-all"
              />{' '}
            </Link>
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'tween' }}
              className="px-0 sm:px-10 md:px-16 mt-4 sm:-mt-10"
            >
              {children}
            </motion.article>
          </>
        )}
        <div className="text-right">
          <Link
            className="group mt-10 text-xs inline-block opacity-50 no-underline"
            href="https://dribbble.com/shots/22080456-Blog-Experiment"
            target="_blank"
          >
            Design credit:{' '}
            <span className="underline">
              @ Dribbble{' '}
              <ArrowUpRight
                size={14}
                className="inline-block ml group-hover:rotate-45 transition-all"
              />
            </span>
          </Link>
        </div>
      </ContentReveal>
    </>
  );
}
