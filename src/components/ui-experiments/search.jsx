import {
  SearchIcon,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Bookmark,
} from "lucide-react";
import React from "react";

export const Search = () => {
  const searchResult = [
    {
      title: "Heritage building",
      topic: "",
      tag: "Heritage",
    },
    {
      title: "The Hedberg Cultural Building",
      topic: "Heritage building",
      tag: "",
    },
    {
      title: "UNESCO Removes Liverpool's World Heritage Statue and bla ble blu",
      topic: "Article news",
      tag: "",
    },
    {
      title: "The Heritage / CYS.ASDO",
      topic: "Article",
      tag: "",
    },
  ];
  return (
    <div className="shadow rounded-xl dark:bg-gray-800/50 dark:border-gray-700 max-w-[500px] mx-auto">
      {/* search input */}
      <div className="flex justify-between items-center p-5">
        <div>
          <SearchIcon className="inline-block mr-3" />
          <input
            type="text"
            placeholder="Herita"
            className="caret-purple-700 outline-none bg-transparent"
          />
        </div>
        <button className="font-semibold hover:underline">Clear</button>
      </div>
      {/* navigation menu */}
      <div className="menu border-b dark:border-gray-700 mb-5">
        <nav className="px-5">
          <ul className="flex gap-5 text-[16px] text-gray-400 font-semibold">
            <li className="py-2 cursor-pointer active text-purple-700 border-b-3 border-purple-700">
              <span className="inline-block mr-2">All</span>
              <span className="text-xs font-normal px-2 py-[2px] bg-[#E3DCFF] dark:bg-[#a9a0cd] rounded-md">
                99+
              </span>
            </li>
            <li className="py-2 cursor-pointer">
              <span className="inline-block mr-2">Project</span>
              <span className="text-xs font-normal px-2 py-[2px] bg-[#F1F1F1] dark:bg-[#434343] rounded-md">
                42
              </span>
            </li>
            <li className="py-2 cursor-pointer">
              <span className="inline-block mr-2">Article</span>
              <span className="text-xs font-normal px-2 py-[2px] bg-[#F1F1F1] dark:bg-[#434343] rounded-md">
                17
              </span>
            </li>
            <li className="py-2 cursor-pointer">
              <sp className="inline-block mr-2"an>Event</sp>
              <span className="text-xs font-normal px-2 py-[2px] bg-[#F1F1F1] dark:bg-[#434343] rounded-md">
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
            <span className="px-2 py-1 rounded-md font-semibold bg-[#EFEFEF] dark:bg-[#2e2e2e] whitespace-nowrap text-sm">
              Landscape architecture
            </span>
            <span className="px-2 py-1 rounded-md font-semibold bg-[#EFEFEF] dark:bg-[#2e2e2e] whitespace-nowrap text-sm">
              Historical building
            </span>
            <span className="px-2 py-1 rounded-md font-semibold bg-[#EFEFEF] dark:bg-[#2e2e2e] whitespace-nowrap text-sm">
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
            {searchResult.map((item, i) => {
              return (
                <div key={i} className="px-5 hover:bg-[#F0ECFF] dark:hover:bg-gray-900/50 transition-all cursor-pointer group">
                  <div className="py-3 border-b dark:border-gray-700 flex justify-between items-center gap-4">
                    <div className="overflow-hidden space-y-1">
                      <h4 className="font-[500] truncate">{item.title}</h4>
                      <p className="text-xs text-gray-400">
                        {item.tag && (
                          <>
                            See all project with tag:{" "}
                            <a href="#" className="hover:text-purple-700">
                              Heritage
                            </a>
                          </>
                        )}
                        {item.topic && item.topic}
                      </p>
                    </div>
                    <div className="hidden gap-2 group-hover:flex">
                      <ArrowUpRight
                        size={27}
                        className="p-[5px] hover:bg-[#E1DAFC] dark:hover:bg-[#27272e] rounded-full transition-all"
                      />
                      <Heart
                        size={27}
                        className="p-[5px] hover:bg-[#E1DAFC] dark:hover:bg-[#27272e] rounded-full transition-all"
                      />
                      <Bookmark
                        size={27}
                        className="p-[5px] hover:bg-[#E1DAFC] dark:hover:bg-[#27272e] rounded-full transition-all"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* other actions */}
      <div className="action px-5 py-6 flex justify-between font-semibold text-purple-700">
        <a href="#" className="hover:underline transition-all">
          See all result <ArrowRight className="inline-block mb-1" size={15} />
        </a>
        <a href="#" className="hover:underline transition-all">
          Search settings
        </a>
      </div>
    </div>
  );
};
