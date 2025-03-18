import React from "react";
import { Sunflower } from "next/font/google";

export const sunflower = Sunflower({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Arc Browser homepage clone by Nurul | Nurul's website",
  description: "Imitate homepage of Arc from The Browser Company (arc.net).",
  keyword: "Arc Browser homepage, the browser company, arc, new browser, aesthetic browser"
};

export default function ArcLayout({children}) {
  return <main className={sunflower.className}>{children}</main>;
}
