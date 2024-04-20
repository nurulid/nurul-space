import React from 'react';
import Link from 'next/link';

export const LinkIcon = ({ link, target, title, Icon, className }) => {
  return (
    <Link
      href={link}
      target={target}
      title={title}
      className={[
        'p-[5px] rounded-md',
        'text-resumeGray border border-gray-200',
        'hover:bg-gray-100 transition-all',
        className && className,
      ].join(' ')}
    >
      <Icon size={18} />
    </Link>
  );
};