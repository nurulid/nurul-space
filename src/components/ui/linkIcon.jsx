import React from 'react';

export const LinkIcon = ({title, url, Icon, email}) => {
  return (
    <a
      href={email ? `mailto:${url}` : url}
      target={email ? "_self" : "_blank" }
      title={title}
      className="hover:scale-105 transition-all text-gray-600 hover:text-gray-800 dark:text-gray-100 dark:hover:text-white"
    >
      <Icon />
    </a>
  );
};
