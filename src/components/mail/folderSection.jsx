import React from "react";
import { Mail, Send, Star, File, Archive, Pencil } from "lucide-react";
import { Search } from "./search";
import { FolderMenu } from "./folderMenu";

export const FolderSection = () => {
  const folderMenus = [
    {
      icon: Mail,
      title: "Inbox",
      count: "1293",
      unread: "3",
      active: true
    },
    {
      icon: Send,
      title: "Send",
      count: "145",
      unread: "",
      active: false
    },
    {
      icon: Star,
      title: "Starred",
      count: "67",
      unread: "",
      active: false
    },
    {
      icon: File,
      title: "Draft",
      count: "5",
      unread: "",
      active: false
    },
    {
      icon: Archive,
      title: "Archive",
      count: "13",
      unread: "",
      active: false
    },
  ];

  return (
    <aside className="w-[354px] h-screen flex flex-col border-r-2 border-gray-200">
      <Search bg="bg-gray-100" addStyles="my-5 mx-6" placeholder="Search..." />
      <div className="px-6">
        <h2 className="py-6 mb-5 border-b-2 border-gray-200 text-3xl font-semibold">
          Mail{" "}
          <span className="ml-1 text-[18px] font-normal text-gray-500 -translate-y-[4px] inline-block">
            (1541)
          </span>
        </h2>
        <nav>
          <ul className="space-y-2">
            {folderMenus.map(({ icon, title, count, unread, active }, i) => {
              return (
                <FolderMenu
                  key={i}
                  Icon={icon}
                  title={title}
                  count={count}
                  unread={unread}
                  active={active}
                />
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="mt-auto w-full text-center p-6 border-t-2 border-gray-200">
        <button className="py-3 px-8 rounded-md bg-mailPurple text-white hover:opacity-90">
          <Pencil className="inline-block mr-1" size={16}/> Write</button>
      </div>
    </aside>
  );
};
