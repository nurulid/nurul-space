import React from 'react'
import { Lexend } from "next/font/google";

export const lexend = Lexend({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mail Dashboard UI by Nurul Insani Dewi",
  description: "Mail Dashboard UI.",
  icons: {
    icon: "/mail/icons/mail-logo.svg",
  },
};

export default function MailLayout({children}) {
  return (
    <main className={lexend.className}>{children}</main>
  )
}
