import { CommandIcon, SearchIcon } from "lucide-react";
import React from "react";

export const Search = ({ bg, placeholder, addStyles, label }) => {
  return (
    <div className={`relative text-gray-600 ${addStyles}`}>
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        className={`${bg} rounded-md py-4 pl-[50px] pr-[60px] w-full`}
        placeholder={placeholder}
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center gap-1">
        <CommandIcon size={17}/>
        <span className="text-xl">K</span>
      </div>
    </div>
  );
};
