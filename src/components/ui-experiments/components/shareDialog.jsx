"use client";

import { Input } from "@nextui-org/react";
import {
  Copy,
  CopyCheck,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  Slack,
  Twitter,
  X,
} from "lucide-react";
import { useState } from "react";

export const ShareDialog = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="p-5 lg:p-10 dark:bg-gray-800/50 dark:border-gray-700 max-w-[600px] shadow rounded-xl">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-semibold">Share</h2>
        <button className="focus:outline-none" type="button">
          <X className="bg-gray-100 hover:bg-gray-50 dark:bg-gray-800 hover:dark:bg-gray-800/70 transition-all rounded-full p-2" size={30} />
        </button>
      </div>
      <div className="social grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-8 mb-12">
        <div className="text-center">
          <div className="bg-[#E7F6FE] dark:bg-gray-800 dark:border-gray-700 dark:border rounded-full w-[80px] h-[80px] p-4 flex justify-center items-center mx-auto mb-3 cursor-pointer hover:opacity-75 transition-all">
            <Twitter color="#1EA1F1" size={35} />
          </div>
          <p>Twitter</p>
        </div>
        <div className="text-center">
          <div className="bg-[#FFECE6] dark:bg-gray-800 dark:border-gray-700 dark:border rounded-full w-[80px] h-[80px] p-4 flex justify-center items-center mx-auto mb-3 cursor-pointer hover:opacity-75 transition-all">
            <Mail color="#FF4500" size={35} />
          </div>
          <p>Email</p>
        </div>
        <div className="text-center">
          <div className="bg-[#fdeaf6] dark:bg-gray-800 dark:border-gray-700 dark:border rounded-full w-[80px] h-[80px] p-4 flex justify-center items-center mx-auto mb-3 cursor-pointer hover:opacity-75 transition-all">
            <Instagram color="#FD33B6" size={35} />
          </div>
          <p>Instagram</p>
        </div>
        <div className="text-center">
          <div className="bg-[#e3f1ff] dark:bg-gray-800 dark:border-gray-700 dark:border rounded-full w-[80px] h-[80px] p-4 flex justify-center items-center mx-auto mb-3 cursor-pointer hover:opacity-75 transition-all">
            <Linkedin color="#0B66C2" size={35} />
          </div>
          <p>Linkedin</p>
        </div>
        <div className="text-center">
          <div className="bg-[#ECDFEC] dark:bg-gray-800 dark:border-gray-700 dark:border rounded-full w-[80px] h-[80px] p-4 flex justify-center items-center mx-auto mb-3 cursor-pointer hover:opacity-75 transition-all">
            <Slack color="#4A154B" size={35} />
          </div>
          <p>Slack</p>
        </div>
        <div className="text-center">
          <div className="bg-[#e0e0e0] dark:bg-gray-800 dark:border-gray-700 dark:border rounded-full w-[80px] h-[80px] p-4 flex justify-center items-center mx-auto mb-3 cursor-pointer hover:opacity-75 transition-all">
            <Send color="#333333" className="dark:stroke-white" size={35} />
          </div>
          <p>Telegram</p>
        </div>
        <div className="text-center">
          <div className="bg-[#E7F6FE] dark:bg-gray-800 dark:border-gray-700 dark:border rounded-full w-[80px] h-[80px] p-4 flex justify-center items-center mx-auto mb-3 cursor-pointer hover:opacity-75 transition-all">
            <Facebook color="#1A77F2" size={35} />
          </div>
          <p>Facebook</p>
        </div>
        <div className="text-center">
          <div className="bg-[#F2F7EA] dark:bg-gray-800 dark:border-gray-700 dark:border rounded-full w-[80px] h-[80px] p-4 flex justify-center items-center mx-auto mb-3 cursor-pointer hover:opacity-75 transition-all">
            <MessageCircle color="#7BB42E" size={35} />
          </div>
          <p>Messenger</p>
        </div>
      </div>
      <div className="link-input">
        <h3 className="mb-3">Page link</h3>
        <Input
          value="https://www.thelink.com"
          className="text-gray-400"
          isReadOnly
          color="#F8F9FA"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <CopyCheck className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <Copy className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
      </div>
    </div>
  );
};
