"use client";

import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {

  return (
    <header className="sticky mx-4 lg:mx-auto max-w-5xl shadow-sm mt-6 mb-3 py-3 px-6 rounded-full bg-gray-100/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border-[.5px] border-purple-300">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-semibold font-mono">Nurul ID</div>
        <div>
          <ThemeSwitcher/>
        </div>
      </nav>
    </header>
  );
};
