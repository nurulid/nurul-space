import { Codepen, Github } from "lucide-react";
import Link from "next/link";

export const PortfolioInfo = () => {
  return (
    <div className="info pt-5 border-t dark:border-gray-700 mt-7 text-left text-sm text-gray-500 flex justify-between items-center">
      <div className="space-y-2">
        <h3>
          Design by:{" "}
          <span className="font-semibold text-black dark:text-gray-400">
            Orman Clark (@ormanclark)
          </span>
        </h3>
        <p>
          Source:{" "}
          <a
            href="https://x.com/ormanclark/status/1744379266731487296?s=20"
            target="_blank"
            className="text-violet-600 hover:text-yellow-600"
          >
            x.com
          </a>
        </p>
      </div>
      <div className="space-y-2">
        <a href="https://codepen.io/nurulid/pen/zYbEMoz" target="_blank" className="block" title="Codepen">
          <Codepen size={25} className="p-1 bg-violet-100 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:border-gray-700 rounded-md"/>
        </a>
        <a href="https://github.com/nurulid/nurul-space/blob/main/src/components/ui-experiments/components/badge.jsx" target="_blank" className="block" title="GitHub">
          <Github size={25} className="p-1 bg-violet-100 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:border-gray-700 rounded-md"/>
        </a>
      </div>
    </div>
  );
};
