import React from "react";
import { Star } from "lucide-react";
import { nameAlias, formatMonthDay, formatTime } from "@/lib/utils";
import { Label } from "./label";

export const MailItem = ({
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
}) => {
  return (
    <div className="mail-item hover:bg-gray-100/50 transition-all">
      <div className="flex py-6 mx-6 border-b-2 border-gray-200">
        <div className="w-[30px]">
          <input type="checkbox" />
        </div>
        <div className="w-[calc(100%-30px)]">
          <div className="flex gap-3 items-center mb-3">
            <figure className="w-[40px] h-[40px] rounded-full bg-mailOrange text-white text-[18px] text-center leading-[40px]">
              {avatar ? (
                <img
                  src={avatar}
                  alt=""
                  className="rounded-full object-cover w-full h-full"
                />
              ) : nameAlias(user)}
            </figure>
            <div>
              <h4 className="text-sm font-semibold">{user}</h4>
              <p className="text-xs text-gray-500">{email}</p>
            </div>
            <div className="ml-auto relative">
              <p className="text-xs mr-5">
                <span>{formatMonthDay(time)},</span>
                <span className="text-gray-500"> {formatTime(time)}</span>
              </p>
              {read ? null : (
                <span className="w-[9px] h-[9px] rounded-full bg-mailOrange inline-block absolute right-0 top-1/2 -translate-y-1/2"></span>
              )}
            </div>
          </div>
          <div className="text-sm">
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="truncate text-gray-400">{desc}</p>
          </div>
          {(attachment.length > 0 || label.length > 0 || starred) && (
            <div className="flex justify-between items-center mt-5">
              <div className="flex gap-2 items-center">
                {starred ? (
                  <Star color="#F9BC15" size={16} className="fill-[#F9BC15]" />
                ) : null}
                {attachment.length > 0 && (
                  <Label attachment={attachment}/>
                )}
              </div>
              <div className="space-x-2">
                {label?.map((item, i) => {
                  return (
                    <Label key={i} label={item}/>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
