import React from "react";
import { Sunflower } from "next/font/google";

export const sunflower = Sunflower({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Arc Browser homepage clone | by Nurul Insani Dewi",
  description: "Imitate homepage of Arc from The Browser Company (arc.net).",
};

export default function ArcLayout({children}) {
  return <main className={sunflower.className}>{children}</main>;
}
