import { PortfolioInfo } from "@/components/portfolio/portfolioInfo";
import { AllBadges } from "@/components/ui-experiments/allBadges";

export default function Page() {
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2">
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl text-center">
        <AllBadges />
        <PortfolioInfo />
      </div>
    </div>
  );
}
