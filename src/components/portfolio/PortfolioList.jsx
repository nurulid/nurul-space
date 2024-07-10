'use client';

import { useState } from 'react';
import { PortfolioCard } from './PortfolioCard';
import { PortfolioFilter } from './PortfolioFilter';

export const PortfolioList = ({ portfolio }) => {
  const categories = [null, 'CSS', 'frontend', 'fullstack'];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const sortDataDescending = () => {
    // Sort the portfolio array by id in descending order
    const sortedData = [...portfolio].sort((a, b) => b.id - a.id);
    return sortedData;
  };

  const sortedData = sortDataDescending();

  // Filter the portfolio items based on the selected category
  const filteredPortfolio = selectedCategory
    ? sortedData.filter((item) => item.category === selectedCategory)
    : sortedData;

  return (
    <>
      <h1 id="portfolio" className="text-3xl mb-5 pt-[100px]">
        My Portfolio
      </h1>
      <PortfolioFilter
        {...{ categories, selectedCategory, setSelectedCategory }}
      />
      {portfolio ? (
        <>
          <h2 className="mt-5 mb-10 text-2xl font-mono capitalize text-center pb-5 border-b border-dashed border-gray-100 dark:border-gray-800">
            {selectedCategory === null ? 'all' : selectedCategory}
          </h2>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10"
          >
            {filteredPortfolio.map(
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
              )
            )}
          </div>
        </>
      ) : null}
    </>
  );
};
