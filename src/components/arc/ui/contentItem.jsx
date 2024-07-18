import React from 'react';

export const ContentItem = ({ title, desc, mediaUrl, isVideo }) => {
  return (
    <div className="text-center">
      <h2 className="text-5xl text-[#3239FB] w-full lg:w-[60%] mx-auto leading-[1.1]">{title}</h2>
      <p className="text-xl text-[#696969] font-[300]">{desc}</p>
      {!isVideo ? (
        <div className="w-[80%] lg:w-[70%] mx-auto mt-10 mb-10 md:mb-24">
          <img
            src={mediaUrl}
            alt={title}
            className="rounded-[5px] md:rounded-[15px] shadow-md mx-auto w-[80%]"
          />
        </div>
      ) : (
        <div className="overflow-hidden w-full max-w-[320px] sm:max-w-[90rem] mx-auto">
          <video loop autoPlay muted>
            <source src={mediaUrl} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};
