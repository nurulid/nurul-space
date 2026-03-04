import { PortfolioList } from '@/components/portfolio/PortfolioList';
import { Intro } from '@/components/portfolio/Intro';
import { writingPosts } from './writings/page';
import { SectionList } from '@/components/ui/SectionList';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { getResumeData } from '@/lib/fetch-resume';

export default async function Home() {
  const cv = await getResumeData();
  const projects = cv.portfolio;

  return (
    <div className="space-y-10 pb-10">
      <Intro />

      {/* Projects */}
      <PortfolioList
        portfolio={projects.filter(
          (item) =>
            item.category === 'fullstack' || item.category === 'frontend',
        )}
      />

      {/* UI */}
      <div className="space-y-8">
        <SectionHeader
          title="UI"
          description="Slicing with Tailwind and CSS."
        />
        <SectionList
          projects={projects.filter(
            (item) => item.category.toLowerCase() === 'css',
          )}
          showHoverPreview={true}
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
