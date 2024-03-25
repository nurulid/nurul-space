import { UiDesignInfo } from "@/components/ui-experiments/components/uiDesignInfo";
import { AllBadges } from "@/components/ui-experiments/allBadges";
import { Search } from "@/components/ui-experiments/search";
import { ShareDialog } from "@/components/ui-experiments/shareDialog";

export default function Page() {
  const uiExperiments = [
    {
      title: "Badges",
      credit: {
        name: "Orman Clark (@ormanclark)",
        source: "https://x.com/ormanclark/status/1744379266731487296?s=20",
      },
      sourceCode: {
        codepen: "https://codepen.io/nurulid/pen/zYbEMoz",
        github:
          "https://github.com/nurulid/nurul-space/blob/main/src/components/ui-experiments/components/badge.jsx",
      },
    },
    {
      title: "Search",
      credit: {
        name: "Nur Asyrof Muhammad",
        source:
          "https://dribbble.com/shots/17489923-Search/attachments/12627054?mode=media",
      },
      sourceCode: {
        codepen: "",
        github:
          "https://github.com/nurulid/nurul-space/blob/main/src/components/ui-experiments/search.jsx",
      },
    },
    {
      title: "Share Dialog",
      credit: {
        name: "Michael Sveistrup",
        source: "https://dribbble.com/shots/8230931-Game-Share-Modal-w-Color",
      },
      sourceCode: {
        codepen: "",
        github: "https://github.com/nurulid/nurul-space/blob/main/src/components/ui-experiments/shareDialog.jsx",
      },
    },
  ];
  return (
    <div className="py-0 md:py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col">
        <ShareDialog />
        <UiDesignInfo data={uiExperiments[2]} />
      </div>
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col">
        <Search />
        <UiDesignInfo data={uiExperiments[1]} />
      </div>
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col">
        <AllBadges />
        <UiDesignInfo data={uiExperiments[0]} />
      </div>
    </div>
  );
}
