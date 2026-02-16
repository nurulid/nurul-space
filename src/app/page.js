import { PortfolioList } from '@/components/portfolio/PortfolioList';
import { promises as fs } from 'fs';
import { Intro } from '@/components/portfolio/Intro';
import { writingPosts } from './writings/page';
import { SectionList } from '@/components/ui/SectionList';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + '/src/data/portfolio.json',
    'utf8',
  );
  const data = JSON.parse(file);
  const projects = data.portfolio;

  return (
    <div className="space-y-10 pb-10">
      <Intro />

      {/* Projects */}
      <PortfolioList portfolio={projects} />

      {/* UI */}
      <div className="space-y-8">
        <SectionHeader title="UI" description="Slicing with tailwind" />
        <SectionList
          projects={projects.filter(
            (item) => item.category.toLowerCase() === 'css',
          )}
        />
      </div>

      {/* Writings */}
      <div className="space-y-8">
        <SectionHeader title="Writings" description="Just write." />
        <SectionList projects={writingPosts} />
      </div>
    </div>
  );
}
