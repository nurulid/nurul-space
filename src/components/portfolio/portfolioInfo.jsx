import { Codepen, Github } from "lucide-react";
import Link from "next/link";
import { websiteShortName } from "@/lib/utils";

export const PortfolioInfo = ({ data }) => {
  return (
    <div className="mt-auto">
      <div className="mt-8 text-left">
        <h2 className="text-xl">{data.title}</h2>
      </div>
      <div className="info pt-4 border-t dark:border-gray-700 mt-4 text-left text-sm text-gray-500 flex justify-between items-center">
        <div className="space-y-2">
          <h3>
            Design by:{" "}
            <span className="font-semibold text-black dark:text-gray-400">
              {data.credit.name}
            </span>
          </h3>
          <p>
            Source:{" "}
            <a
              href={data.credit.source}
              target="_blank"
              className="text-violet-600 hover:text-yellow-600"
            >
              {websiteShortName(data.credit.source)}
            </a>
          </p>
        </div>
        <div className="space-y-2">
          {data.sourceCode.codepen && (
            <a
              href={data.sourceCode.codepen}
              target="_blank"
              className="block"
              title="Codepen"
            >
              <Codepen
                size={25}
                className="p-1 bg-violet-100 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:border-gray-700 rounded-md"
              />
            </a>
          )}
          <a
            href={data.sourceCode.github}
            target="_blank"
            className="block"
            title="GitHub"
          >
            <Github
              size={25}
              className="p-1 bg-violet-100 hover:bg-yellow-100 dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:border-gray-700 rounded-md"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
