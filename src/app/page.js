import { AllPortfolio } from "@/components/portfolio/AllPortfolio";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/public/data.json", "utf8");
  const data = JSON.parse(file);
  const portfolio = data.portfolio;
  // console.log(portfolio)



  return (
    <>
      <AllPortfolio portfolio={portfolio} />
    </>
  );
}
