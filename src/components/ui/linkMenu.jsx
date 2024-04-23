'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const LinkMenu = ({ title, link, external }) => {
  const currentPath = usePathname();
  return (
    <Link
      href={link}
      target={external ? '_blank' : '_self'}
      className={[
        'group whitespace-nowrap',
        currentPath === link ? 'active' : null,
        external && 'relative group flex items-center gap-1',
      ].join(' ')}
    >
      {title}
      {external && (
        <ArrowUpRight
          size={18}
          className="group-hover:rotate-45 transition-all"
        />
      )}
    </Link>
  );
};
