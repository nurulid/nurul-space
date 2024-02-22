import { UiDesignInfo } from "@/components/ui-experiments/components/uiDesignInfo";
import { AllBadges } from "@/components/ui-experiments/allBadges";
import { Search } from "@/components/ui-experiments/components/search";
import { ShareDialog } from "@/components/ui-experiments/components/shareDialog";

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
          "https://github.com/nurulid/nurul-space/blob/main/src/components/ui-experiments/components/search.jsx",
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
        github: "https://github.com/nurulid/nurul-space/blob/main/src/components/ui-experiments/components/shareDialog.jsx",
      },
    },
  ];
  return (
    <div className="py-10 grid grid-cols-2 gap-14">
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col break-inside-avoid">
        <ShareDialog />
        <UiDesignInfo data={uiExperiments[2]} />
      </div>
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col break-inside-avoid">
        <Search />
        <UiDesignInfo data={uiExperiments[1]} />
      </div>
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col break-inside-avoid">
        <AllBadges />
        <UiDesignInfo data={uiExperiments[0]} />
      </div>
    </div>
  );
}
