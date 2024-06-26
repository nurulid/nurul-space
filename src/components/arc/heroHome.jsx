import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export const HeroHome = () => {
  return (
    <section className="arc-hero">
      <div className="arc-hero__cta text-left md:text-center bg-[#FFFCED] pt-10 pb-[37px] -mt-[10px] px-5 overflow-hidden">
        <a
          href="#"
          className="arc-link-search inline-flex flex-col lg:inline-block relative z-[1] text-sm md:text-2xl text-[#3239FB] font-bold"
        >
          <span>Arc Search for iOS is out now!</span>{" "}
          <span>Download it in the App Store →</span>
          <img src="/arc/download-arc-search.png" className="absolute" />
        </a>
      </div>
      <div className="wavy-top -mt-[7px] relative z-[2] bg-[#4148FB] text-white bg-[url('/arc/noise-light.png')] bg-repeat pt-14 pb-20 px-5 h-[80vh] overflow-hidden">
        <div className="inner max-w-7xl w-full mx-auto">
          <div className="text-center">
            <h1 className="text-[44px] md:text-[56px] font-bold leading-[.9] text-center w-11/12 lg:w-[50%] mx-auto">
              "Arc is the Chrome replacement I’ve been waiting for."
            </h1>
            <a
              href="#"
              className="p-2 block font-bold text-[18px] uppercase my-8"
            >
              The Verge
            </a>
            <a
              href="#"
              className="py-4 px-12 bg-[#FF3333] text-white rounded-[10px] shadow-md hover:shadow-xl font-bold hover:scale-105 transition-all inline-block"
            >
              Download Arc
            </a>
          </div>
        </div>
        <div className="arc-intro__image mt-20 sm:mt-0">
          <div className="arc-intro__image-stamp">
            <img src="/arc/arc-stamp.svg" alt="" />
          </div>
          <Image
            src="/arc/browser-mmmhome-2.png"
            width={700}
            height={500}
            quality={100}
          />
        </div>
      </div>
      <Marquee
        pauseOnHover={true}
        className="arc-hero__marquee wavy-top font-bold bg-[#FFFCED] text-[#3239FB] py-8 px-5 -mt-[10px] -mb-[10px] relative z-[9]"
      >
        <a href="#" className="px-8">
          “Rethinking the fundamentals of how we use the web.”
        </a>
        <a href="#" className="px-8">
          “Arc is the best browser to come out in the last decade.”
        </a>
        <a href="#" className="px-8">
          “Arc is the new browser I’ve most enjoyed using.”
        </a>
        <a href="#" className="px-8">
          “Arc is a great name.”
        </a>
      </Marquee>
    </section>
  );
};
