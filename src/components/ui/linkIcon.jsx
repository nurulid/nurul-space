import React from 'react';

export const LinkIcon = ({title, url, Icon}) => {
  return (
    <a
      href={url}
      target="_blank"
      title={title}
      className="hover:scale-105 transition-all text-gray-600 hover:text-gray-800"
    >
      <Icon />
    </a>
  );
};
