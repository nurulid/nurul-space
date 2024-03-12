import { Twitter, Youtube } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="arc-footer bg-[#4148FB] text-white bg-[url('/arc/noise-light.png')] bg-repeat ">
      {/* TODO: change border to the wave mask */}
      <div className="text-center py-16 px-5 border-b-2 border-dashed border-white">
        <h2 className="text-center text-3xl font-bold mb-4">
          Enter <span className="italic">your</span> new home on the internet
        </h2>
        <a
          href="#"
          className="py-4 px-12 bg-[#FF3333] text-white rounded-[10px] shadow-md hover:shadow-xl font-bold hover:scale-105 transition-all inline-block"
        >
          Download Arc
        </a>
      </div>
      <div className="max-[650px]:flex-col flex justify-between flex-wrap p-10">
        <div className="max-[650px]:flex-col flex flex-wrap gap-8">
          <div className="logo">
            <a href="#" className="inline-block hover:scale-105 transition-all">
              <img src="/arc/arc-logo-outline.svg" alt="Arc logo" width="45"/>
            </a>
          </div>
          <div className="text-sm">
            <h3 className="uppercase mb-4">Product</h3>
            <nav className="font-[300]">
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Arc Max</a>
                </li>
                <li>
                  <a href="#">Arc Boosts</a>
                </li>
                <li>
                  <a href="#">Integrations</a>
                </li>
                <li>
                  <a href="#">Credit</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-sm">
            <h3 className="uppercase mb-4">Resources</h3>
            <nav>
              <ul>
                <li>
                  <a href="#">Resource Center</a>
                </li>
                <li>
                  <a href="#">Release Notes</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Careers @ BCNY</a>
                </li>
                <li>
                  <ul className="flex items-center gap-4 mt-4">
                    <li>
                      <a href="#" className="hover:opacity-55 transition-all"><Youtube/></a>
                    </li>
                    <li><a href="#" className="hover:opacity-55 transition-all"><Twitter/></a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <a href="#" className="hover:opacity-70 transition-all max-[650px]:py-6 max-[650px]:block">
          <img src="/arc/arc-browser-company.svg" alt="Arc Browser Company" className="max-[650px]:w-full max-[650px]:h-full"/>
        </a>
      </div>
    </footer>
  );
};

