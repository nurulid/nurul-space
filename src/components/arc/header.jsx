"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isSticky ? "sticky" : ""
      } arc-header bg-[#4148FB] text-white bg-[url('/arc/noise-light.png')] bg-repeat relative z-[99]`}
    >
      <nav className="p-5 hidden lg:flex justify-between items-center max-w-7xl w-full mx-auto h-[100px] flex-wrap">
        <ul className="flex items-center gap-3 text-sm font-semibold">
          <li>
            <a
              href="#"
              className="arc-logo inline-block hover:scale-105 transition-all"
            >
              <img src="/arc/arc-logo.svg" alt="Arc logo" />
            </a>
          </li>
          <li>
            <a href="#">Max</a>
          </li>
          <li>
            <a href="#">Arc Search</a>
          </li>
          <li>
            <a href="#">Developer</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <a
          href="#"
          className="py-3 px-5 bg-white text-[#4148FB] rounded-[10px] shadow-md hover:shadow-xl text-xs font-bold hover:scale-105 transition-all inline-block"
        >
          Download Arc
        </a>
      </nav>

      {/* Mobile Nav */}
      <nav className={`p-5 block lg:hidden ${isOpen ? "open" : ""}`}>
        <div className="flex justify-between items-center">
          <div className="text-right w-1/2 ml-4">
            <a
              href="#"
              className="arc-logo inline-block hover:scale-105 transition-all"
            >
              <img src="/arc/arc-logo.svg" alt="Arc logo" />
            </a>
          </div>
          <Menu onClick={toggleMenu} className="cursor-pointer"/>
        </div>

        {/* mobile menu list */}
        {isOpen && (
          <div className="animate-slideDown absolute left-0 right-0 bottom-0 top-0 bg-[#210784] text-white h-[100vh] py-20 px-10 flex flex-col">
            <ul className="text-[48px] font-bold">
              <li>
                <a href="#" className="inline-block py-1 px-5 rounded-[20px] hover:bg-[#14044F] w-full transition-all">Max</a>
              </li>
              <li>
                <a href="#" className="inline-block py-1 px-5 rounded-[20px] hover:bg-[#14044F] w-full transition-all">Arc Search</a>
              </li>
              <li>
                <a href="#" className="inline-block py-1 px-5 rounded-[20px] hover:bg-[#14044F] w-full transition-all">Developers</a>
              </li>
              <li>
                <a href="#" className="inline-block py-1 px-5 rounded-[20px] hover:bg-[#14044F] w-full transition-all">Blog</a>
              </li>
            </ul>
            <X onClick={toggleMenu} color="white" className="absolute top-[28px] right-[20px] cursor-pointer"/>
            <a href="#" className="hover:opacity-70 transition-all mt-auto">
              <img src="/arc/arc-browser-company.svg" alt="" className="w-auto h-full"/>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
