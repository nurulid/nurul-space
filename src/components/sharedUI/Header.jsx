'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { getCurrentYear } from '@/lib/utils';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LinkMenu } from '../ui/linkMenu';
import { LogoHeader } from '../ui/logoHeader';

const menu = [
  { title: 'Portfolio', link: '/', isExternal: false },
  { title: 'UI', link: '/ui', isExternal: false },
  { title: 'Writings', link: '/writings', isExternal: false },
  { title: 'CV', link: '/resume', isExternal: false },
  { title: 'Templates', link: 'https://nurulid.gumroad.com/', isExternal: true },
];

const MobileHeader = ({ toggleMenu }) => {
  return (
    <div className="flex lg:hidden justify-between items-center">
      <LogoHeader />
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <Menu onClick={toggleMenu} className="cursor-pointer" />
      </div>
    </div>
  );
};

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const currentYear = getCurrentYear();

  return (
    <>
      {isOpen && (
        <nav
          className={[
            isOpen ? 'open absolute -top-4 inset-0' : '',
            'py-20 px-10 h-screen z-[99]',
            'flex flex-col justify-between items-center',
            'bg-white dark:bg-black animate-slideRight',
          ].join(' ')}
        >
          <ul
            onClick={toggleMenu}
            className="text-[28px] font-bold text-center space-y-5"
          >
            {menu.map(({ title, link, isExternal }, i) => (
              <li key={i}>
                <LinkMenu {...{ title, link, isExternal }} />
              </li>
            ))}
          </ul>
          <X
            onClick={toggleMenu}
            className={[
              'text-black dark:text-white cursor-pointer',
              'absolute top-[28px] right-[20px]',
            ].join(' ')}
          />
          <p className="text-gray-500 text-sm">ⓒ {currentYear} Made with 💜 by Nurul</p>
        </nav>
      )}
    </>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <header className="sticky top-4 md:top-6 z-[20] px-4 sm:px-0">
      <div
        className={[
          'max-w-[600px] m-2 mx-auto py-3 px-6 ',
          'backdrop-filter backdrop-blur-lg bg-opacity-25 bg-gray-100/10 bg-clip-padding',
          'shadow-sm rounded-full border-[.5px] border-purple-300',
        ].join(' ')}
      >
        <nav className="hidden lg:flex justify-between items-center flex-wrap gap-4">
          <LogoHeader />
          <ul
            className="flex items-center gap-4 text-sm"
          >
            {menu.map(({ title, link, isExternal }, i) => (
              <li key={i}>
                <LinkMenu {...{ title, link, isExternal }} />
              </li>
            ))}
            <ThemeSwitcher />
          </ul>
        </nav>

        {/* Mobile Header */}
        <MobileHeader toggleMenu={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu {...{ isOpen, toggleMenu, setIsOpen }} />
    </header>
  );
};
