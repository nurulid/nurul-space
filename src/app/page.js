import { PortfolioList } from '@/components/portfolio/PortfolioList';
import { promises as fs } from 'fs';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { Intro } from '@/components/portfolio/Intro';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/data/portfolio.json', 'utf8');
  const data = JSON.parse(file);
  const portfolio = data.portfolio;

  return (
    <>
      <Intro />
      <div className="border border-gray-100 rounded-full size-10 mx-auto flex justify-center items-center animate-bounce shadow-lg bg-white text-violet-500">
        <Link href="#portfolio">
          <ArrowDown size={24} />
        </Link>
      </div>
      <PortfolioList portfolio={portfolio} />
    </>
  );
}
