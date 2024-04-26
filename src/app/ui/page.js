import { UI_EXPERIMENTS } from "@/data/ui-experiments";
import { AllBadges } from "@/components/ui-experiments/allBadges";
import { Search } from "@/components/ui-experiments/search";
import { ShareDialog } from "@/components/ui-experiments/shareDialog";
import { UiBox } from "@/components/ui-experiments/uiBox";

export default function Page() {
  const uiExperiments = UI_EXPERIMENTS;
  return (
    <div className="py-0 md:py-10 space-y-6 lg:space-y-10">
      <UiBox ui={<ShareDialog />} uiInfo={uiExperiments[2]}/>
      <UiBox ui={<Search />} uiInfo={uiExperiments[1]}/>
      <UiBox ui={<AllBadges />} uiInfo={uiExperiments[0]}/>
    </div>
  );
}
