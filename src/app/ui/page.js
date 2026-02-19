import Link from 'next/link';
import { promises as fs } from 'fs';

import { UI_EXPERIMENTS } from '@/data/ui-experiments';
import { AllBadges } from '@/components/ui-experiments/allBadges';
import { Search } from '@/components/ui-experiments/search';
import { ShareDialog } from '@/components/ui-experiments/shareDialog';
import { UiBox } from '@/components/ui-experiments/uiBox';
import { SectionList } from '@/components/ui/SectionList';

export default async function Page() {
  const file = await fs.readFile(
    process.cwd() + '/src/data/portfolio.json',
    'utf8',
  );
  const data = JSON.parse(file);
  const projects = data.portfolio;
  const uiExperiments = UI_EXPERIMENTS;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl">UI</h1>
        <p>
          <span className="opacity-50">
            Slicing with Tailwind and CSS. Check more at{' '}
          </span>
          <Link
            href="https://ui.nurrul.com/"
            target="_blank"
            className="text-brand hover:underline transition-all"
          >
            ui.nurrul.com
          </Link>
        </p>
      </div>
      <SectionList
        projects={projects.filter(
          (item) => item.category.toLowerCase() === 'css',
        )}
        isFullWidth={true}
        showHoverPreview={true}
      />
      <div className="pb-4 md:pb-10 space-y-6 lg:space-y-10">
        <UiBox
          ui={<ShareDialog />}
          uiInfo={uiExperiments[2]}
          title="share-dialog"
        />
        <UiBox ui={<Search />} uiInfo={uiExperiments[1]} title="search" />
        <UiBox ui={<AllBadges />} uiInfo={uiExperiments[0]} title="badge" />
      </div>
    </div>
  );
}
