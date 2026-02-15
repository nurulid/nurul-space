import { PortfolioList } from '@/components/portfolio/PortfolioList';
import { promises as fs } from 'fs';
import { Intro } from '@/components/portfolio/Intro';
import { writingPosts } from './writings/page';
import Link from 'next/link';

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

      {/* Writings */}
      <div className='space-y-8'>
        <div className="space-y-2">
          <h1 id="projects" className="text-2xl font-mono">
            Writings
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Just write.
          </p>
        </div>

        <ul className="space-y-2">
          {writingPosts.map(({ id, title, url, tag }) => {
            return (
              <li>
                <Link
                  className="pb-2 border-b inline-block"
                  key={id}
                  href={url}
                >
                  {title}
                </Link>{' '}
                -{' '}
                <span className="px-2 py-1 text-xs border rounded bg-gray-50">
                  {tag}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
