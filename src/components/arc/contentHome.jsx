import React from "react";

export const ContentHome = () => {
  return (
    <section className="arc-content mt-10 py-16 px-5 md:px-0">
      <div className="text-center">
        <h2 className="arc-title">
          A browser that doesn’t just meet your needs — it anticipates them.
        </h2>
        <p className="arc-desc">
          Clean and calm, Arc shapes itself to how you use the internet.
        </p>
        <div className="arc-content__video-wrapper">
          <video loop autoPlay muted>
            <source src="/arc/zero-chrome.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
      <div className="text-center">
        <h2 className="arc-title">Space for the different sides of you.</h2>
        <p className="arc-desc">
          Effortlessly organize everything you do online — work, study, hobbies
          — all in one window with Spaces and Profiles.
        </p>
        <div className="arc-content__video-wrapper">
          <video loop autoPlay muted>
            <source src="/arc/space-swiping.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="text-center">
        <h2 className="arc-title">Your browser, your way.</h2>
        <p className="arc-desc">
          Find your perfect setup with Split View, Themes, and more.
        </p>
        <div className="arc-content__video-wrapper">
          <video loop autoPlay muted>
            <source src="/arc/theme-picker.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="arc-cta text-center w-full lg:w-[50%] mx-auto mb-14">
        <h2 className="arc-title w-full">The comfort of privacy.</h2>
        <p className="arc-desc mt-2 mb-4">
          Arc is built from the ground up to be private and secure. We don’t
          know what sites you visit or what you search for.
        </p>
        <a href="#" className="arc-link">Learn more about privacy in Arc →</a>
      </div>
    </section>
  );
};
