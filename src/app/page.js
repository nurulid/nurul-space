import { AllPortfolio } from "@/components/portfolio/AllPortfolio";
import { promises as fs } from "fs";
import { Linkedin, Mail } from "lucide-react";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/public/data.json", "utf8");
  const data = JSON.parse(file);
  const portfolio = data.portfolio;
  // console.log(portfolio)

  return (
    <>
      <div className="my-10 max-w-3xl ml-auto pb-10 border-b border-dashed leading-6">
        <h2 className="mb-2 text-4xl lg:text-5xl text-center md:text-right font-mono">
          Hello 🙂 <br />
          I'm <span className="text-purple-500">Nurul</span> a Frontend Developer
          from Indonesia.
        </h2>
        <p className="text-gray-400 text-center md:text-right leading-7">
          I'm an experienced Frontend Developer, especially in UI <span className="line-through">design</span>. During
          my experience, I learn and practice how to build beautiful and
          functional products.
        </p>
        <div className="flex justify-end gap-4 items-center mt-4">
          <a href="https://id.linkedin.com/in/nurul-insani-dewi" target="_blank" title="My Linkedin" className="hover:text-violet-600 hover:dark:via-violet-200 transition-all">
            <Linkedin />
          </a>
          <a href="mailto:call.nurulid.com" title="Contact me" className="hover:text-violet-600 hover:dark:via-violet-200 transition-all animate-bounce">
            <Mail />
          </a>
        </div>
      </div>
      <AllPortfolio portfolio={portfolio} />
    </>
  );
}
