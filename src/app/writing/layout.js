'use client';

import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

export default function MdxLayout({ children }) {
  const pathname = usePathname();
  const isWritingIndex = pathname == '/writing';

  return (
    <div className="max-w-2xl w-full mx-auto py-2 sm:py-9 prose relative">
      {isWritingIndex ? (
        <>{children}</>
      ) : (
        <>
          <Link
            href="/writing"
            className="group p-1 size-[34px] absolute -left-16 top-9 flex items-center justify-center bg-purple-50 rounded-md"
          >
            <ArrowLeft
              size={20}
              className="text-gray-400 group-hover:text-violet-600 transition-all"
            />
          </Link>
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween" }}
            className="-mt-12"
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
    </div>
  );
}
