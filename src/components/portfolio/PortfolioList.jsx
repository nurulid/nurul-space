'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PortfolioCard } from './PortfolioCard';

export const PortfolioList = ({ portfolio }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const sortDataDescending = () => {
    // Sort the portfolio array by id in descending order
    const sortedData = [...portfolio].sort((a, b) => b.id - a.id);
    return sortedData;
  };

  const sortedData = sortDataDescending();

  // Function to handle category filter
  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  // Filter the portfolio items based on the selected category
  const filteredPortfolio = selectedCategory
    ? sortedData.filter((item) => item.category === selectedCategory)
    : sortedData;

  const categories = [null, 'CSS', 'frontend', 'fullstack'];

  return (
    <>
      <h1 id="portfolio" className="text-3xl mb-5 pt-[100px]">My Portfolio</h1>
      <div className="space-x-3">
        {categories.map((item, index) => {
          const selected = selectedCategory === item;
          return (
            <a
              href="#portfolio"
              key={index}
              onClick={() => handleFilter(item)}
              className="px-4 py-1 rounded-full capitalize relative bg-purple-200 hover:bg-purple-300 text-purple-800 text-sm transition-all"
            >
              <span
                className={[
                  selected && 'text-purple-200',
                  'relative z-[2]',
                ].join(' ')}
              >
                {item === null ? 'all' : item}
              </span>

              {selected && (
                <motion.span
                  layoutId="tab"
                  transition={{ type: 'spring', duration: 0.4 }}
                  className="absolute inset-0 z-0 rounded-full bg-black"
                ></motion.span>
              )}
            </a>
          );
        })}
      </div>
      {portfolio ? (
        <>
          <h2 className="mt-5 mb-10 text-2xl font-mono capitalize text-center pb-5 border-b border-dashed border-gray-100 dark:border-gray-800">
            {selectedCategory === null ? 'all' : selectedCategory}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {filteredPortfolio.map(
              ({ id, title, description, labels, thumbnail, previewURL, codeURL, isDone, isTeam, }) => (
                  <PortfolioCard key={id} {...{id, title, description, labels, thumbnail, previewURL, codeURL, isDone, isTeam}}/>
                )
            )}
          </div>
        </>
      ) : null}
    </>
  );
};
