import { AllPortfolio } from "@/components/portfolio/AllPortfolio";
import { promises as fs } from "fs";
import { Github, Linkedin, Mail, Dribbble } from "lucide-react";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/public/data.json", "utf8");
  const data = JSON.parse(file);
  const portfolio = data.portfolio;
  // console.log(portfolio)

  return (
    <>
      <div className="my-10 max-w-3xl ml-auto pb-10 border-b border-dashed text-center md:text-right leading-6">
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
        <div className="flex justify-center md:justify-end gap-4 items-center mt-4">
          <a href="http://dribbble.com/nurulid" target="_blank" title="My Dribbble" className="text-[#EA5693] hover:scale-125 transition-all">
            <Dribbble />
          </a>
          <a href="https://github.com/nurulid" target="_blank" title="My GitHub" className="text-[#8957E5] hover:scale-125 transition-all">
            <Github />
          </a>
          <a href="https://id.linkedin.com/in/nurul-insani-dewi" target="_blank" title="My Linkedin" className="text-[#0B66C2] hover:scale-125 transition-all">
            <Linkedin />
          </a>
          <a href="mailto:call.nurulid@gmail.com" title="Contact me" className="text-[#FBAC15] transition-all animate-wiggle hover:animate-none">
            <Mail />
          </a>
        </div>
        <a href="mailto:call.nurulid@gmail.com" title="Contact me" className="text-green-400 hover:text-green-600 transition-all text-right inline-block underline underline-offset-4 decoration-wavy mt-5">Available for New Opportunities</a>
      </div>
      <AllPortfolio portfolio={portfolio} />
    </>
  );
}
