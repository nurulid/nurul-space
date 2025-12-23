import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  href,
  external = true,
  className = '',
  ...props
}) => {
  const baseStyles =
    'px-6 py-2 shadow-md group-hover:shadow-sm transition-all block text-center rounded-md w-full';

  // variants
  const variants = {
    primary:
      'bg-slate-800 hover:text-purple-200 dark:bg-slate-950 dark:hover:text-purple-200 text-white dark:text-white',
    secondary: 'bg-white dark:bg-white/90 dark:hover:bg-white dark:text-black',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={buttonClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
