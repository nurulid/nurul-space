import { ContentHome } from "@/components/arc/contentHome";
import { Footer } from "@/components/arc/footer";
import { Header } from "@/components/arc/header";
import { HeroHome } from "@/components/arc/heroHome";
import { TestiHome } from "@/components/arc/testiHome";
import React from "react";

export const metadata = {
  title: "Arc Browser homepage",
  description: "Imitate homepage of Arc from The Browser Company (arc.net).",
};

export default function Page() {
  return (
    <div className="font-sunflower">
      <Header />
      <main>
        <HeroHome />
        <ContentHome />
        <TestiHome />
      </main>
      <Footer />
    </div>
  );
}
