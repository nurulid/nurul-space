import React from 'react'
import { Lexend } from "next/font/google";

export const lexend = Lexend({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

export default function MailLayout({children}) {
  return (
    <main className={lexend.className}>{children}</main>
  )
}
