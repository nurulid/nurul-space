import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import { Provider } from "@/components/provider";
import { DefaultLayout } from "@/components/template/DefaultLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nurul space",
  description: "Nurul's portfolio, ui experiments, etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <DefaultLayout>
            {children}
            <Analytics />
          </DefaultLayout>
        </Provider>
      </body>
    </html>
  );
}
