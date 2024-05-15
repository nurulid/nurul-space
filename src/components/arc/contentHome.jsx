import React from "react";
import { ContentItem } from "./ui/contentItem";

const contentData = [
  {
    title: "A browser that doesn’t just meet your needs — it anticipates them.",
    desc: "Clean and calm, Arc shapes itself to how you use the internet.",
    mediaUrl: "/arc/arc-1.png",
    isVideo: false,
  },
  {
    title: "Space for the different sides of you.",
    desc: "Effortlessly organize everything you do online — work, study, hobbies — all in one window with Spaces and Profiles.",
    mediaUrl: "/arc/arc-2.png",
    isVideo: false,
  },
  {
    title: "Your browser, your way.",
    desc: "Find your perfect setup with Split View, Themes, and more.",
    mediaUrl: "/arc/theme-picker.mp4",
    isVideo: true,
  }
]

export const ContentHome = () => {
  return (
    <section className="arc-content mt-10 py-16 px-5 md:px-0">
      {contentData.map(({ title, desc, mediaUrl, isVideo }, i) => {
        return <ContentItem key={i} {...{title, desc, mediaUrl, isVideo}}/>
      })}
      <div className="text-center w-full lg:w-[50%] mx-auto mb-14">
        <h2 className="text-5xl text-[#3239FB] w-full lg:w-[60%] mx-auto leading-[1.1]">The comfort of privacy.</h2>
        <p className="text-xl text-[#696969] font-[300]mt-2 mb-4">
          Arc is built from the ground up to be private and secure. We don’t
          know what sites you visit or what you search for.
        </p>
        <a href="#" className="arc-link">Learn more about privacy in Arc →</a>
      </div>
    </section>
  );
};
