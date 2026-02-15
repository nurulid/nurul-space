'use client';

import { useState } from 'react';
import { PortfolioCard } from './PortfolioCard';
import { PortfolioFilter } from './PortfolioFilter';

export const PortfolioList = ({ portfolio }) => {
  const categories = [
    { label: 'All', value: null },
    { label: 'CSS', value: 'css' },
    { label: 'Front-end', value: 'frontend' },
    { label: 'Full-stack', value: 'fullstack' },
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const sortDataDescending = () => {
    // Sort the portfolio array by id in descending order
    const sortedData = [...portfolio].sort((a, b) => b.id - a.id);
    return sortedData;
  };

  const sortedData = sortDataDescending();

  // Filter the portfolio items based on the selected category
  const filteredPortfolio = selectedCategory
    ? sortedData.filter(
        (item) => item.category.toLowerCase() === selectedCategory,
      )
    : sortedData;

  const highlightProject = sortedData.filter(
    (item) => item.category === 'fullstack' || item.category === 'frontend',
  );

  return (
    <div className="pt-10 space-y-8">
      <div className="space-y-2">
        <h1 id="projects" className="text-2xl">
          Projects
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Here are some of my projects. Click on the project title to see the
          live demo.
        </p>
      </div>
      {/* <PortfolioFilter
        {...{ categories, selectedCategory, setSelectedCategory }}
      /> */}
      {portfolio ? (
        <>
          {/* <h2 className="mt-5 mb-10 text-2xl font-mono capitalize text-center pb-5 border-b border-dashed border-gray-100 dark:border-gray-800">
            {selectedCategory === null ? 'all' : selectedCategory}
          </h2> */}
          <div className="flex overflow-y-auto gap-4">
            {highlightProject.map(
              ({
                id,
                title,
                description,
                labels,
                thumbnail,
                previewURL,
                codeURL,
                isDone,
                isTeam,
              }) => (
                <PortfolioCard
                  key={id}
                  {...{
                    id,
                    title,
                    description,
                    labels,
                    thumbnail,
                    previewURL,
                    codeURL,
                    isDone,
                    isTeam,
                  }}
                />
              ),
            )}
          </div>
        </>
      ) : null}
    </div>
  );
};
