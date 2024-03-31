import React from "react";

export const TestiHome = () => {
  return (
    <section className="arc-testi relative wavy-top py-12 px-5 bg-[#FFFCED] border-t-2 border-dashed border-[#4148FB] space-y-5">
      <img className="mx-auto" src="/arc/arc-logo-testi.svg" alt="" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[90rem] w-full mx-auto">
        <div className="arc-testi__box">
          <p className="arc-testi__desc">
            Way more powerful than Chrome. Arc looks like the future of
            browsers.
          </p>
          <span className="arc-testi__user">@BEEBOMCO</span>
        </div>
        <div className="arc-testi__box">
          <p className="arc-testi__desc">
            Arc brought order to the chaos that was my online life. There's no
            going back.
          </p>
          <span className="arc-testi__user">@KATELAURIELEE</span>
        </div>
        <div className="arc-testi__box">
          <p className="arc-testi__desc">
            Arc lives up to the hype. So intuitive, playful and pretty.
          </p>
          <span className="arc-testi__user">@FIVEBOIII</span>
        </div>
        <div className="arc-testi__box">
          <p className="arc-testi__desc">
            I just tried using a computer without Arc and it was miserable.
          </p>
          <span className="arc-testi__user">@MARKFISHMAN_XYZ</span>
        </div>
      </div>
    </section>
  );
};
