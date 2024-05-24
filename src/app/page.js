import { AllPortfolio } from '@/components/portfolio/AllPortfolio';
import { LinkIcon } from '@/components/ui/linkIcon';
import { promises as fs } from 'fs';
import {
  Github,
  Linkedin,
  Mail,
  Dribbble,
  ChevronDown,
  ArrowDown,
} from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/data/data.json', 'utf8');
  const data = JSON.parse(file);
  const portfolio = data.portfolio;

  const contact = [
    {
      title: 'Dribbble',
      url: 'https://dribbble.com/nurulid',
      icon: Dribbble,
      email: false,
    },
    {
      title: 'GitHub',
      url: 'https://github.com/nurulid',
      icon: Github,
      email: false,
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nurul-insani-dewi/',
      icon: Linkedin,
      email: false,
    },
    { title: 'Mail', url: 'call.nurulid@gmail.com', icon: Mail, email: true },
  ];

  return (
    <>
      <div className="mt-10 mb-6 max-w-3xl ml-auto pb-10 text-center md:text-right leading-6">
        <h2 className="mb-2 text-4xl lg:text-5xl text-center md:text-right font-mono">
          Hello 🙂 <br />
          I'm <span className="text-purple-500">Nurul</span> a Frontend
          Developer from Indonesia.
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center md:text-right leading-7">
          I'm an experienced Frontend Developer, especially in crafting User
          Interface (UI). During my experience, I learn and practice how to
          build beautiful and functional products.
        </p>
        <div className="relative inline group">
          <a
            href="mailto:call.nurulid@gmail.com"
            title="Get in touch"
            className="text-right inline-block mt-2 mb-4 py-3 px-2 bg-violet-50 dark:bg-violet-800/40 border border-violet-100 dark:border-gray-800 rounded-xl w-[80%] sm:w-[30%]"
          >
            <span className="rounded-md px-6 py-2 bg-white dark:bg-white/90 dark:hover:bg-white shadow-md group-hover:shadow-sm dark:text-black transition-all block text-center">
              Hire Me
            </span>
          </a>
          <div className="absolute left-2 -top-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end gap-4 items-center mt-4">
          {contact.map(({ title, url, icon: Icon, email }, i) => (
            <LinkIcon key={i} {...{ title, url, Icon, email }} />
          ))}
        </div>
      </div>
      <div className="border border-gray-100 rounded-full size-10 mx-auto flex justify-center items-center animate-bounce shadow-lg bg-white text-violet-500">
        <Link href="/#portfolio">
          <ArrowDown size={24} />
        </Link>
      </div>
      <AllPortfolio portfolio={portfolio} />
    </>
  );
}
