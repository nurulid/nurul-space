import { Dot } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  const dummy = Array.from({ length: 5 });

  return (
    <div className="not-prose space-y-8">
      <div>
        <h2 className="text-2xl font-semibold flex items-center">
          <span>Writings</span> <Dot />
          <span className="text-xs opacity-50">{dummy.length} posts</span>
        </h2>
        <p className='opacity-75'>Sharing some tips that related to frontend web.</p>
      </div>
      <div className="space-y-8">
        {dummy.map((_, i) => {
          return (
            <div key={i} className="space-y-1">
              <span className="uppercase text-xs opacity-50">tailwind</span>
              <div className="space-y-1">
                <Link href="/writing/active-class" className="text-lg font-medium">Title lorem ipsum</Link>
                <p className="opacity-75 text-sm line-clamp-2">
                  Description lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat
                </p>
              </div>
              <span className="opacity-50 text-xs">24 June, 2024</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
