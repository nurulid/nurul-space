'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const LinkMenu = ({ title, link, isExternal }) => {
  const currentPath = usePathname();
  // Check if the current path starts with the link
  const isHomeLink = link === '/';
  const isActive = isHomeLink
    ? currentPath === link
    : currentPath.startsWith(link) && currentPath !== '/';
    
  return (
    <Link
      href={link}
      target={isExternal ? '_blank' : '_self'}
      data-active={isActive}
      className={[
        'group whitespace-nowrap',
        isExternal ? 'relative group flex items-center gap-1' : '',
        'inline-block',
        'data-[active=true]:text-violet-600 data-[active=true]:underline',
        'hover:underline underline-offset-4 transition-all',
      ].join(' ')}
    >
      {title}
      {isExternal && (
        <ArrowUpRight
          size={18}
          className="group-hover:rotate-45 transition-all"
        />
      )}
    </Link>
  );
};
