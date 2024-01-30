"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Flower } from "lucide-react";

export const Header = () => {

  return (
    <header className="sticky top-4 z-[99] mx-4 lg:mx-auto max-w-5xl shadow-sm py-3 px-6 rounded-full bg-gray-100/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border-[.5px] border-purple-300">
      <nav className="flex justify-between items-center flex-wrap gap-2">
        <Link href={"/"} className="text-xl font-semibold font-mono">Nurul Insani Dewi</Link>
        <div className="space-x-5 ml-auto">
          <Link href={"/ui-experiments"} className="text-violet-500 hover:text-violet-400 whitespace-nowrap group">
            <Flower size={16} className="animate-spin inline-block mr-1 mb-[3px] text-cyan-500 group-hover:animate-none transition-all"/>
            UI Experiments
          </Link>
          <ThemeSwitcher/>
        </div>
      </nav>
    </header>
  );
};
