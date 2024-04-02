import React from "react";

export const FolderMenu = ({ Icon, title, count, unread, active }) => {
  return (
    <li className={`mail-folder__menu flex items-center gap-4 py-3 px-4 rounded transition-all ${active ? "active" : ""}`}>
      <Icon size={33} className='p-2 bg-gray-100 rounded'/>
      <h3 className="text-base">{title}</h3>
      <div className="ml-auto text-xs">
        {unread ? <span className="text-gray-500">+{unread}</span> : null}
        <span className="mail-folder__menu-count inline-block ml-2 p-2 bg-gray-100 rounded-full">
          {count}
        </span>
      </div>
    </li>
  );
};
