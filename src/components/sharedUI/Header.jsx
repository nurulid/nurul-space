"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="sticky top-2 lg:top-4 z-[99] m-2 lg:mx-auto max-w-3xl shadow-sm py-3 px-6 rounded-full bg-gray-100/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border-[.5px] border-purple-300">
      <nav className="hidden lg:flex justify-between items-center flex-wrap gap-4">
        <Link
          href="/"
          className="text-xl font-semibold font-mono flex gap-2 items-center"
        >
          <img
            src="/images/nid.jpeg"
            alt=""
            width="30"
            className="rounded-full"
          />{" "}
          Nurul ID
        </Link>
        <div className="nav-menu">
          <Link href="/" className={`${currentPath === '/' ? 'active' : ''} whitespace-nowrap group`}>Portfolio</Link>
          <Link href="/ui" className={`${currentPath === '/ui' ? 'active' : ''} whitespace-nowrap group`}>
            UI
          </Link>
          <Link href="https://nurulid.gumroad.com/" target="_blank" className="relative group flex items-center gap-1">
            Templates
            <span className="block w-2 h-2 rounded-full bg-red-400 absolute -top-1 right-4 group-hover:bg-black transition-all"></span>
            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-all"/>
          </Link>
          <ThemeSwitcher />
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className={`block lg:hidden ${isOpen ? "open" : ""}`}>
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-semibold font-mono flex gap-2 items-center"
          >
            <img
              src="/images/nid.jpeg"
              alt=""
              width="30"
              className="rounded-full"
            />{" "}
            Nurul ID
          </Link>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <Menu onClick={toggleMenu} className="cursor-pointer"/>
          </div>
        </div>

        {/* mobile menu list */}
        {isOpen && (
          <div className="animate-slideRight absolute -inset-2 bg-white h-screen py-20 px-10 flex flex-col justify-between items-center z-[99]">
            <ul className="text-[28px] font-bold text-center space-y-8">
              <li onClick={toggleMenu}>
                <Link href="/" className={`${currentPath === '/' ? 'active' : ''} whitespace-nowrap group`}>Portfolio</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="/ui" className={`${currentPath === '/ui' ? 'active' : ''} whitespace-nowrap group`}>
                  UI Experiments
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="https://nurulid.gumroad.com/" target="_blank" className="relative group inline-flex items-center gap-1">
                  Templates
                  <span className="block w-2 h-2 rounded-full bg-red-400 absolute -top-1 right-4 group-hover:bg-black transition-all"></span>
                  <ArrowUpRight size={18} className="group-hover:rotate-45 transition-all"/>
                </Link>
              </li>
            </ul>
            <X onClick={toggleMenu} color="black" className="absolute top-[28px] right-[20px] cursor-pointer"/>
            <p className="text-gray-500 text-sm">@ 2024 Made with 💜 by Nurul</p>
          </div>
        )}
      </nav>
    </header>
  );
};
