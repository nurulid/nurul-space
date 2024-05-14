import React from "react";
import { Filter, Star, Trash2 } from "lucide-react";
import { Search } from "./ui/search";
import { MailItem } from "./mailItem";
import { BtnIcon } from "./ui/btnIcon";

export const MailList = () => {
  const mails = [
    {
      user: "Nurul",
      email: "call.nurulid@gmail.com",
      avatar: "/images/nid.jpeg",
      time: "2024-04-03T15:45:00Z",
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
      time: "2024-04-02T10:45:00Z",
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
      time: "2024-03-13T04:15:00Z",
      title: "Completed tasks",
      desc: "Dear Alexandra, I hope this email finds you well. I am writing to inform you that we have scheduled a business meeting to discuss collaboration opportunities and the signing of the contract. We are excited to take this next step in our partnership. Please let us know if you have any specific topics or documents you would like to discuss during the meeting. Sincerely, Leslie Alexander",
      read: true,
      starred: false,
      attachment: ["file.pdf", "file.doc"],
      label: ["Meet", "Bussiness"],
    },
    {
      user: "Cody Fisher",
      email: "fffish.cody1@gmail.com",
      avatar: "/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
      time: "2024-03-03T12:24:00Z",
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
      time: "2024-01-03T16:32:00Z",
      title: "Completed tasks",
      desc: "Ulla sit amet rhoncus neque, non sodales libero. In mattis elementum erat, at molestie orci eleifend eu. Sed dignissim pulvinar du",
      read: true,
      starred: true,
      attachment: [],
      label: [],
    },
  ];

  return (
    <section className='mail-list w-[430px] border-r-1 border-gray-200 relative'>
      <div className='flex justify-between py-9 mx-6 mb-4 border-b-2 border-gray-200'>
        <h2 className='text-xl font-semibold'>Inbox <span className='text-gray-500 font-normal inline-block ml-2'>(1293)</span></h2>
        <ul className='flex gap-[10px] text-[#B0B3B9]'>
          <li className='cursor-pointer hover:opacity-80'><Trash2 /></li>
          <li className='cursor-pointer hover:opacity-80'><Star /></li>
          <li className='cursor-pointer hover:opacity-80'><Filter /></li>
        </ul>
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
