import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "@/components/provider";
import { Layout } from "@/components/template/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Developer | Nurul Insani Dewi",
  description: "Nurul's portfolio, ui experiments, etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
