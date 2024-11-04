import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function MdxLayout({ children }) {
  return (
    <div className="max-w-2xl w-full mx-auto py-2 sm:py-9 prose">
      {children}
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
