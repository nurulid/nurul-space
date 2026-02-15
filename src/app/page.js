import { PortfolioList } from '@/components/portfolio/PortfolioList';
import { promises as fs } from 'fs';
import { Intro } from '@/components/portfolio/Intro';
import { writingPosts } from './writings/page';
import Link from 'next/link';
import { UiList } from '@/components/portfolio/UiList';

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + '/src/data/portfolio.json',
    'utf8',
  );
  const data = JSON.parse(file);
  const portfolio = data.portfolio;

  return (
    <div className="space-y-10 pb-10">
      <Intro />

      {/* Projects */}
      <PortfolioList portfolio={portfolio} />

      {/* UI */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 id="projects" className="text-2xl font-mono">
            UI
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Slicing with Tailwind.</p>
        </div>

        <UiList projects={portfolio}/>
      </div>

      {/* Writings */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 id="projects" className="text-2xl font-mono">
            Writings
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Just write.
          </p>
        </div>

        <ul className="w-full md:w-1/2">
          {writingPosts.map(({ id, title, url, tag, created }) => {
            return (
              <li
                key={id}
                className="py-2 border-b hover:border-solid border-dashed space-y-1 group relative"
              >
                <p className="inline-block group-hover:text-purple-600">
                  {title} -{' '}
                  <span className="px-2 py-1 text-xs border rounded text-gray-500 bg-gray-50">
                    {tag}
                  </span>
                </p>
                <span className="text-xs text-gray-500 block">{created}</span>
                <Link href={url} className="absolute inset-0"></Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
