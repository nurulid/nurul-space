import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import { Provider } from "@/components/provider";
import { Layout } from "@/components/template/Layout";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "Frontend Developer | Nurul Insani Dewi",
  description: "Nurul's portfolio, ui experiments, etc.",
  icons: {
    icon: "/images/nid.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <Provider>
          <Layout>
            {children}
            <Analytics />
          </Layout>
        </Provider>
      </body>
    </html>
  );
}
