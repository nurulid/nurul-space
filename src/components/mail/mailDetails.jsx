import React from "react";
import { nameAlias, formatMonthDay, formatTime } from "@/lib/utils";
import {
  Archive,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Forward,
  Printer,
  Reply,
  Sparkles,
  Star,
  Trash2,
} from "lucide-react";
import { Label } from "./label";
import { InnerHTML } from "./innerHTML";
import Image from "next/image";

const user = {
  id: "1234",
  name: "John Doe",
  isOnline: true,
};

const mail = {
  id: "8484",
  user: "Leslie Alexander",
  email: "leslie1209@gmail.com",
  avatar: "/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpeg",
  time: "2024-03-13T04:15:00Z",
  title: "Completed tasks",
  desc: "Dear Alexandra, <br/> I hope this email finds you well. I am writing to inform you that we have scheduled a business meeting to discuss collaboration opportunities and the signing of the contract. We are excited to take this next step in our partnership. <br/> Please let us know if you have any specific topics or documents you would like to discuss during the meeting. <br/> <br/> Sincerely,<br/> Leslie Alexander",
  read: true,
  starred: false,
  attachment: [
    {
      name: "file.doc",
      size: "95.8Kb"
    },
    {
      name: "file.pdf",
      size: "55.8Kb"
    }
  ],
  label: ["Meet", "Bussiness"],
  company: "Lesliecompany",
  to: ["Alexandra Nowak", "Victor Mickiewicz"],
};

const MailHeader = () => {
  return (
    <header className="flex justify-end items-center p-[30px] border-b">
      <div className="notif">
        <Bell className="mail-icon" />
        <span className="notif__label"></span>
      </div>
      <div className="user flex items-center gap-3 px-4 ml-4 border-l-2 border-gray-200">
        <figure className="ava size-8 rounded-full bg-rose-500 text-[10px] text-white text-center leading-8">
          {nameAlias(user.name)}
        </figure>
        <div>
          <h3 className="text-sm text-gray-600 mr-1 inline-block">
            {user.name}
          </h3>
          <ChevronDown size={14} className="inline" />
        </div>
      </div>
    </header>
  );
};

const MailMenu = () => {
  return (
    <div className="flex justify-between px-[30px] py-5 border-b">
      <Archive size={18} className="mail-icon" />
      <div className="pagination flex gap-2">
        <ChevronLeft className="mr-2" />
        <span>3</span>
        <span>of</span>
        <span>1293</span>
        <ChevronRight className="ml-2" />
      </div>
      <div className="flex items-center gap-[18px]">
        <Star size={18} className="mail-icon" />
        <Printer size={18} className="mail-icon" />
        <Trash2 size={18} className="mail-icon" />
      </div>
    </div>
  );
};

const MailSender = () => {
  return (
    <div className="p-[30px] border-b">
      <div className="flex gap-3 items-center mb-6">
        <figure className="w-[40px] h-[40px] rounded-full bg-mailOrange text-white text-[18px] text-center leading-[40px]">
          {mail.avatar ? (
            <img
              src={mail.avatar}
              alt=""
              className="rounded-full object-cover w-full h-full"
            />
          ) : (
            nameAlias(mail.user)
          )}
        </figure>
        <div>
          <h4 className="text-sm font-semibold">{mail.user}</h4>
          <p className="text-xs text-gray-500">{mail.email}</p>
        </div>
        <div className="ml-auto relative">
          <p className="text-xs mr-5">
            <span>{formatMonthDay(mail.time)},</span>
            <span className="text-gray-500"> {formatTime(mail.time)}</span>
          </p>
        </div>
      </div>
      <div className="flex gap-6 text-xs">
        <div>
          <span className="text-gray-500 mr-2">From:</span>
          <span>{mail.company}</span>
        </div>
        <div>
          <span className="text-gray-500 mr-2">To:</span>
          <span>{mail.to}</span>
        </div>
      </div>
    </div>
  );
};

const MailContent = () => {
  return (
    <div className="py-5 px-[30px]">
      <div className="flex items-center justify-between mb-5">
        <div className="space-x-2">
          {mail.label?.map((item, i) => {
            return <Label key={i} label={item} />;
          })}
        </div>
        <button className="border border-gray-200 rounded-[8px] px-4 py-[10px] text-sm">
          <Sparkles
            size={18}
            className="inline-block mr-2 -translate-y-[2px]"
          />{" "}
          Brief summary
        </button>
      </div>
      <div className="w-[85%]">
        <h2 className="text-2xl font-semibold mb-4">{mail.title}</h2>
        <div className="text-gray-400 leading-[1.8] text-sm">
          <InnerHTML text={mail.desc} />
        </div>
      </div>
    </div>
  );
};

const MailAttachments = () => {
  return (
    <div className="px-[30px]">
      <h3 className="mb-3">Attachments</h3>
      <div className="grid grid-cols-2 gap-[10px]">
      {mail.attachment.map((item, i) => (
        <div key={item.i} className="p-[10px] border border-gray-100 rounded-[8px]">
          <div className="text-sm flex items-center gap-2 mb-3">
            <Image src="/mail/icons/icon-file.svg" width={24} height={24} alt="icon file"/>
            <p>{item.name}</p>
            <Download size={14} className="ml-auto"/>
          </div>
          <div className="text-xs text-gray-300 flex justify-between items-center">
            <span>{item.size}</span>
            <span>28 June, 11:02</span>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

const MailActions = () => {
  return (
    <div className="mx-[30px] pt-[10px] pb-[30px] flex gap-5 border-t-2 border-gray-100 mt-auto sticky bottom-0 bg-white">
      <button className="flex gap-2 border border-gray-300 p-[10px] w-full justify-center items-center rounded-[8px]">
        <Reply size={18}/>
        Reply
      </button>
      <button className="flex gap-2 border border-gray-300 p-[10px] w-full justify-center items-center rounded-[8px]">
        <Forward size={18}/>
        Forward to
      </button>
    </div>
  );
};

export const MailDetails = () => {
  return (
    <section className="w-[calc(100%-(102px+354px+430px))]">
      <div className="sticky top-0">
        <MailHeader />
        <MailMenu />
      </div>
      <div className="h-[calc(100vh-158px)] overflow-y-auto flex flex-col">
        <MailSender />
        <MailContent />
        <MailAttachments />
        <MailActions />
      </div>
    </section>
  );
};
