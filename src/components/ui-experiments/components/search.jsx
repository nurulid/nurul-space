import {
  SearchIcon,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Bookmark,
} from "lucide-react";
import React from "react";

export const Search = () => {
  return (
    <div>
      <div className="mb-2 pb-4 text-left">
        <h2 className="text-xl">Search</h2>
      </div>

      <div className="shadow rounded-xl bg-white max-w-[600px]">
        {/* search input */}
        <div className="flex justify-between items-center p-5">
          <div>
            <SearchIcon className="inline-block mr-3" />
            <input
              type="text"
              placeholder="Herita"
              className="caret-purple-700 outline-none"
            />
          </div>
          <button className="font-semibold hover:underline">Clear</button>
        </div>
        {/* navigation menu */}
        <div className="menu border-b mb-5">
          <nav className="px-5">
            <ul className="flex gap-5 text-[16px] text-gray-400 font-semibold">
              <li className="py-2 cursor-pointer active text-purple-700 border-b-3 border-purple-700">
                All{" "}
                <span className="text-xs font-normal px-2 py-[2px] bg-[#E3DCFF] rounded-md inline-block ml-2">
                  99+
                </span>
              </li>
              <li className="py-2 cursor-pointer">
                Project{" "}
                <span className="text-xs font-normal px-2 py-[2px] bg-[#F1F1F1] rounded-md inline-block ml-2">
                  42
                </span>
              </li>
              <li className="py-2 cursor-pointer">
                Article{" "}
                <span className="text-xs font-normal px-2 py-[2px] bg-[#F1F1F1] rounded-md inline-block ml-2">
                  17
                </span>
              </li>
              <li className="py-2 cursor-pointer">
                Event{" "}
                <span className="text-xs font-normal px-2 py-[2px] bg-[#F1F1F1] rounded-md inline-block ml-2">
                  8
                </span>
              </li>
            </ul>
          </nav>
        </div>
        {/* result */}
        <div className="result">
          {/* related topic */}
          <div className="related mb-5">
            <h3 className="uppercase text-gray-400 text-xs mb-3 font-semibold tracking-wider px-5">
              Related Topic
            </h3>
            <div className="flex flex-wrap gap-3 px-5">
              <span className="px-2 py-1 rounded-md font-semibold bg-[#EFEFEF] whitespace-nowrap text-sm">
                Landscape architecture
              </span>
              <span className="px-2 py-1 rounded-md font-semibold bg-[#EFEFEF] whitespace-nowrap text-sm">
                Historical building
              </span>
              <span className="px-2 py-1 rounded-md font-semibold bg-[#EFEFEF] whitespace-nowrap text-sm">
                Urban design
              </span>
            </div>
          </div>
          {/* search result */}
          <div className="list">
            <h3 className="uppercase text-gray-400 text-xs font-semibold tracking-wider px-5">
              Search Result
            </h3>
            <div>
              <div className="px-5 hover:bg-[#F0ECFF] transition-all cursor-pointer group">
                <div className="py-3 border-b flex justify-between items-center gap-4">
                  <div className="overflow-hidden space-y-1">
                    <h4 className="font-[500] truncate">
                    Heritage building
                    </h4>
                    <p className="text-xs text-gray-400">
                      See all project with tag:{" "}
                      <a href="#" className="hover:text-purple-700">
                        Heritage
                      </a>
                    </p>
                  </div>
                  <div className="hidden gap-2 group-hover:flex">
                    <ArrowUpRight size={27} className="p-[5px] hover:bg-[#E1DAFC] rounded-full transition-all" />
                    <Heart size={27} className="p-[5px] hover:bg-[#E1DAFC] rounded-full transition-all" />
                    <Bookmark size={27} className="p-[5px] hover:bg-[#E1DAFC] rounded-full transition-all" />
                  </div>
                </div>
              </div>
              <div className="px-5 hover:bg-[#F0ECFF] transition-all cursor-pointer group">
                <div className="py-3 border-b flex justify-between items-center gap-4">
                  <div className="overflow-hidden space-y-1">
                    <h4 className="font-[500] truncate">
                      The Hedberg Cultural Building
                    </h4>
                    <p className="text-xs text-gray-400">Heritage building</p>
                  </div>
                  <div className="hidden gap-2 group-hover:flex">
                    <ArrowUpRight size={27} className="p-[5px] hover:bg-[#E1DAFC] rounded-full transition-all" />
                    <Heart size={27} className="p-[5px] hover:bg-[#E1DAFC] rounded-full transition-all" />
                    <Bookmark size={27} className="p-[5px] hover:bg-[#E1DAFC] rounded-full transition-all" />
                  </div>
                </div>
              </div>
              <div className="px-5 hover:bg-[#F0ECFF] transition-all cursor-pointer group">
                <div className="py-3 border-b flex justify-between items-center gap-4">
                  <div className="overflow-hidden space-y-1">
                    <h4 className="font-[500] truncate">
                      UNESCO Removes Liverpool's World Heritage Statue and bla
                      ble blu
                    </h4>
                    <p className="text-xs text-gray-400">Article news</p>
                  </div>
                  <div className="hidden gap-2 group-hover:flex">
                    <ArrowUpRight size={27} className="p-[5px] hover:bg-[#E1DAFC] rounded-full transition-all" />
                    <Heart size={27} className="p-[5px] hover:bg-[#E1DAFC] rounded-full transition-all" />
                    <Bookmark size={27} className="p-[5px] hover:bg-[#E1DAFC] rounded-full transition-all" />
                  </div>
                </div>
              </div>
              <div className="px-5 hover:bg-[#F0ECFF] transition-all cursor-pointer group">
                <div className="py-3 border-b flex justify-between items-center gap-4">
                  <div className="overflow-hidden space-y-1">
                    <h4 className="font-[500] truncate">
                      The Heritage / CYS.ASDO
                    </h4>
                    <p className="text-xs text-gray-400">Article</p>
                  </div>
                  <div className="hidden gap-2 group-hover:flex">
                    <ArrowUpRight size={27} className="p-[5px] hover:bg-[#E1DAFC] rounded-full transition-all" />
                    <Heart size={27} className="p-[5px] hover:bg-[#E1DAFC] rounded-full transition-all" />
                    <Bookmark size={27} className="p-[5px] hover:bg-[#E1DAFC] rounded-full transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* other actions */}
        <div className="action px-5 py-6 flex justify-between font-semibold text-purple-700">
          <a href="#" className="hover:underline transition-all">
            See all result{" "}
            <ArrowRight className="inline-block mb-1" size={15} />
          </a>
          <a href="#" className="hover:underline transition-all">
            Search settings
          </a>
        </div>
      </div>
    </div>
  );
};
