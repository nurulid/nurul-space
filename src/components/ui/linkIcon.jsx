import React from 'react';

export const LinkIcon = ({ title, url, Icon, email, onHoverChange }) => {
  const displayUrl = url;

  return (
    <a
      href={displayUrl}
      target={email ? '_self' : '_blank'}
      rel={email ? undefined : 'noreferrer noopener'}
      title={title}
      onMouseEnter={() => onHoverChange?.(displayUrl)}
      onMouseLeave={() => onHoverChange?.('')}
      onFocus={() => onHoverChange?.(displayUrl)}
      onBlur={() => onHoverChange?.('')}
      className="hover:scale-125 transition-all text-gray-500 hover:text-gray-800 dark:text-gray-100 dark:hover:text-white p-1"
    >
      <Icon className="size-4" />
    </a>
  );
};
