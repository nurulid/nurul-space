"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Flower, ArrowUpRight } from "lucide-react";

export const Header = () => {
  const currentPath = usePathname();

  return (
    <header className="sticky top-4 z-[99] mx-4 lg:mx-auto max-w-5xl shadow-sm py-3 px-6 rounded-full bg-gray-100/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border-[.5px] border-purple-300">
      <nav className="flex justify-between items-center flex-wrap gap-4">
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
          <Link href="/" className={currentPath === '/' ? 'active whitespace-nowrap group' : 'whitespace-nowrap group'}>Portfolio</Link>
          <Link href="/ui-experiments" className={currentPath === '/ui-experiments' ? 'active whitespace-nowrap group' : 'whitespace-nowrap group'}>
            {/* <Flower
              size={16}
              className="animate-spin inline-block mr-1 mb-[3px] text-cyan-500 group-hover:animate-none transition-all"
            /> */}
            UI Experiments
          </Link>
          <Link href="https://nurulid.gumroad.com/" target="_blank" className="relative group flex items-center gap-1">
            Templates
            <span className="block w-2 h-2 rounded-full bg-red-400 absolute -top-1 right-4 group-hover:bg-black transition-all"></span>
            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-all"/>
          </Link>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};
