import React from "react";
import { Filter, Star, Trash2 } from "lucide-react";
import { Search } from "./search";
import { MailItem } from "./mailItem";
import { BtnIcon } from "./btnIcon";

export const MailList = () => {
  const mails = [
    {
      user: "Nurul",
      email: "call.nurulid@gmail.com",
      avatar: "/images/nid.jpeg",
      time: "Today, 12 min ago",
      title: "Completed tasks",
      desc: "Ulla sit amet rhoncus neque, non sodales libero. In mattis elementum erat, at molestie orci eleifend eu. Sed dignissim pulvinar du",
      read: false,
      starred: false,
      attachment: ["file.pdf", "pic.png"],
      label: ["meet", "bussiness"],
    },
    {
      user: "Annette Black",
      email: "black.annete@gmail.com",
      avatar: "",
      time: "Today, 12 min ago",
      title: "Completed tasks",
      desc: "Ulla sit amet rhoncus neque, non sodales libero. In mattis elementum erat, at molestie orci eleifend eu. Sed dignissim pulvinar du",
      read: false,
      starred: true,
      attachment: [],
      label: ["team"],
    },
    {
      user: "Leslie Alexander",
      email: "leslie1209@gmail.com",
      avatar: "/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpeg",
      time: "Today, 12 min ago",
      title: "Completed tasks",
      desc: "Ulla sit amet rhoncus neque, non sodales libero. In mattis elementum erat, at molestie orci eleifend eu. Sed dignissim pulvinar du",
      read: true,
      starred: false,
      attachment: ["file.pdf", "pic.png", "file.doc"],
      label: [],
    },
    {
      user: "Cody Fisher",
      email: "fffish.cody1@gmail.com",
      avatar: "/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
      time: "Today, 12 min ago",
      title: "Completed tasks",
      desc: "Ulla sit amet rhoncus neque, non sodales libero. In mattis elementum erat, at molestie orci eleifend eu. Sed dignissim pulvinar du",
      read: false,
      starred: false,
      attachment: [],
      label: [],
    },
    {
      user: "Is.graphics",
      email: "Is.graphics@gmail.com",
      avatar: "/images/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpeg",
      time: "Today, 12 min ago",
      title: "Completed tasks",
      desc: "Ulla sit amet rhoncus neque, non sodales libero. In mattis elementum erat, at molestie orci eleifend eu. Sed dignissim pulvinar du",
      read: false,
      starred: true,
      attachment: [],
      label: [],
    },
  ];

  const mailHeaderButtons = [
    {
      icon: Trash2,
      title: "Delete",
    },
    {
      icon: Star,
      title: "Favorite",
    },
    {
      icon: Filter,
      title: "Filter",
    },
  ];
  return (
    <section className="w-[430px] border-r-1 border-gray-200">
      <div className="flex justify-between py-9 mx-6 mb-4 border-b-2 border-gray-200">
        <h2 className="text-xl font-semibold">
          Inbox{" "}
          <span className="text-gray-500 font-normal inline-block ml-2">
            (1293)
          </span>
        </h2>
        <nav>
          <ul className="flex gap-[10px] text-[#B0B3B9]">
            {mailHeaderButtons.map(({ icon: Icon, title }, i) => {
              return <BtnIcon key={i} {...{Icon, title}} />;
            })}
          </ul>
        </nav>
      </div>
      <Search className="mx-6" placeholder="Search messages..." />
      <div className="h-[calc(100vh-178px)] overflow-scroll">
        {mails.map(
          (
            {
              user,
              email,
              avatar,
              time,
              title,
              desc,
              read,
              starred,
              attachment,
              label,
            },
            i
          ) => {
            return (
              <MailItem
                key={i}
                {...{
                  user,
                  email,
                  avatar,
                  time,
                  title,
                  desc,
                  read,
                  starred,
                  attachment,
                  label,
                }}
              />
            );
          }
        )}
      </div>
    </section>
  );
};
