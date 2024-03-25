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
import { SocialShareItem } from "./components/socialShareItem";

export const ShareDialog = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const socialVariants = [
    {
      title: 'Twitter',
      icon: Twitter,
      bgColor:'bg-[#E7F6FE]',
      iconColor: '#1EA1F1'
    },
    {
      title: 'Email',
      icon: Mail,
      bgColor: 'bg-[#FFECE6]',
      iconColor: '#FF4500'
    },
    {
      title: 'Instagram',
      icon: Instagram,
      bgColor: 'bg-[#fdeaf6]',
      iconColor: '#FD33B6'
    },
    {
      title: 'LinkedIn',
      icon: Linkedin,
      bgColor: 'bg-[#e3f1ff]',
      iconColor: '#0B66C2'
    },
    {
      title: 'Slack',
      icon: Slack,
      bgColor: 'bg-[#ECDFEC]',
      iconColor: '#4A154B'
    },
    {
      title: 'Telegram',
      icon: Send,
      bgColor: 'bg-[#e0e0e0]',
      iconColor: '#333333'
    },
    {
      title: 'Facebook',
      icon: Facebook,
      bgColor: 'bg-[#E7F6FE]',
      iconColor: '#1A77F2'
    },
    {
      title: 'Messenger',
      icon: MessageCircle,
      bgColor: 'bg-[#F2F7EA]',
      iconColor: '#7BB42E'
    }
  ]

  return (
    <div className="p-5 lg:p-10 dark:bg-gray-800/50 dark:border-gray-700 max-w-[600px] mx-auto shadow rounded-xl">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-semibold">Share</h2>
        <button className="focus:outline-none" type="button">
          <X className="bg-gray-100 hover:bg-gray-50 dark:bg-gray-800 hover:dark:bg-gray-800/70 transition-all rounded-full p-2" size={30} />
        </button>
      </div>
      <div className="social grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-6 mt-8 mb-12">
        {socialVariants.map((item, i) => {
          return (
            <SocialShareItem key={i}
              title={item.title}
              Icon={item.icon}
              iconColor={item.iconColor}
              bgColor={item.bgColor}
            />
          )
         })
        }
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
