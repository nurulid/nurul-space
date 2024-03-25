import React from "react";

export const SocialShareItem = ({title, Icon, iconColor, bgColor}) => {
  return (
    <div className="text-center">
      <div className={`${bgColor} dark:bg-gray-800 dark:border-gray-700 dark:border rounded-full w-[60px] md:w-[80px] h-[60px] md:h-[80px] p-4 flex justify-center items-center mx-auto mb-3 cursor-pointer hover:opacity-75 transition-all`}>
        <Icon color={iconColor} size={35}/>
      </div>
      <p className="text-xs xs:text-base">{title}</p>
    </div>
  );
};
