import { PortfolioInfo } from "@/components/portfolio/portfolioInfo";
import { AllBadges } from "@/components/ui-experiments/allBadges";
import { Search } from "@/components/ui-experiments/components/search";

export default function Page() {
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
        <AllBadges />
        <PortfolioInfo />
      </div>
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-[#EFE9F5]">
        <Search />
      </div>
    </div>
  );
}
