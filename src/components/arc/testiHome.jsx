import React from "react";
import { TestiCard } from "./ui/testiCard";

const testiData = [
  {
    testi: "Way more powerful than Chrome. Arc looks like the future of browsers.",
    user: "@BEEBOMCO"
  },
  {
    testi: "Arc brought order to the chaos that was my online life. There's no going back.",
    user: "@KATELAURIELEE"
  },
  {
    testi: "Arc lives up to the hype. So intuitive, playful and pretty.",
    user: "@FIVEBOIII"
  },
  {
    testi: "I just tried using a computer without Arc and it was miserable.",
    user: "@MARKFISHMAN_XYZ"
  }
]

export const TestiHome = () => {
  return (
    <section className="arc-testi wavy-top relative py-12 px-5 bg-[#FFFCED] border-t-2 border-dashed border-[#4148FB] space-y-5">
      <img className="mx-auto" src="/arc/arc-logo-testi.svg" alt="Arc testimonial logo" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[90rem] w-full mx-auto">
        {testiData.map(({ testi, user }, i) => {
          return <TestiCard key={i} {...{testi, user}}/>
        })}
      </div>
    </section>
  );
};
