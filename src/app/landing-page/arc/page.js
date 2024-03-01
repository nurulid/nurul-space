import { ContentHome } from "@/components/arc/contentHome";
import { Footer } from "@/components/arc/footer";
import { Header } from "@/components/arc/header";
import { HeroHome } from "@/components/arc/heroHome";
import { TestiHome } from "@/components/arc/testiHome";
import React from "react";

export default function Page() {
  return (
    <>
      <Header />
      <HeroHome />
      <ContentHome />
      <TestiHome />
      <Footer />
    </>
  );
}
