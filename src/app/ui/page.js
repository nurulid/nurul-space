import { UI_EXPERIMENTS } from '@/data/ui-experiments';
import { AllBadges } from '@/components/ui-experiments/allBadges';
import { Search } from '@/components/ui-experiments/search';
import { ShareDialog } from '@/components/ui-experiments/shareDialog';
import { UiBox } from '@/components/ui-experiments/uiBox';
import Link from 'next/link';

export default function Page() {
  const uiExperiments = UI_EXPERIMENTS;
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl">UI</h1>
        <p>
          <span className="opacity-50">Check more UI at my </span>
          <Link
            href="https://nid-ui-component-collections.vercel.app/"
            target="_blank"
            className="text-violet-500 hover:underline transition-all"
          >
            UI Collections.
          </Link>
        </p>
      </div>
      <div className="h-8" />
      <div className="pb-4 md:pb-10 space-y-6 lg:space-y-10">
        <UiBox
          ui={<ShareDialog />}
          uiInfo={uiExperiments[2]}
          title="share-dialog"
        />
        <UiBox ui={<Search />} uiInfo={uiExperiments[1]} title="search" />
        <UiBox ui={<AllBadges />} uiInfo={uiExperiments[0]} title="badge" />
      </div>
    </>
  );
}
