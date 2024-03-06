import { Inter, Sunflower } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import { Provider } from "@/components/provider";
import { Layout } from "@/components/template/Layout";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const sunflower = Sunflower({
  weight: ["300", "500"],
  subsets: ["latin"],
  variable: "--font-sunflower",
  display: "swap",
});

export const metadata = {
  title: "Frontend Developer | Nurul Insani Dewi",
  description: "Nurul's portfolio, ui experiments, etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sunflower.variable}`}>
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
