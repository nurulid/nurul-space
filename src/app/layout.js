import { Sunflower } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import { Provider } from "@/components/provider";
import { Layout } from "@/components/template/Layout";

const sunflower = Sunflower({ weight: ["300","500"], subsets: ["latin"] });

export const metadata = {
  title: "Frontend Developer | Nurul Insani Dewi",
  description: "Nurul's portfolio, ui experiments, etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sunflower.className}>
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
