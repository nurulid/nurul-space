'use client';

import { useState } from 'react';
import { Chip, Tooltip } from '@nextui-org/react';
import { Github, MoveRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const AllPortfolio = ({ portfolio }) => {
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
              }) => {
                return (
                  <div
                    key={id}
                    className={`p-4 border-[.5px] border-purple-300 dark:border-purple-800/20 rounded-md relative group transition-all bg-purple-100/20 dark:bg-slate-400/10 flex flex-col ${
                      !isDone && 'on-progress'
                    } ${isTeam && 'team-project'}`}
                  >
                    <div className="h-[250px] w-full overflow-hidden rounded-md">
                      <Tooltip showArrow={true} content="Visit preview">
                        <a href={previewURL} target="_blank">
                          <Image
                            alt={title}
                            className="object-cover"
                            src={thumbnail}
                            width={700}
                            height={100}
                          />
                        </a>
                      </Tooltip>
                    </div>
                    <a href={previewURL} target="_blank">
                      <h2 className="mt-5 mb-3 text-xl font-mono group-hover:text-purple-600 transition-all">
                        {title}
                        <MoveRight
                          size={18}
                          className="inline-block ml-2 group-hover:rotate-[-45deg] transition-all"
                        />
                      </h2>
                    </a>
                    <p className="mb-5 text-gray-500 dark:text-gray-400 text-sm">
                      {description}
                    </p>
                    <Tooltip showArrow={true} content="Souce code">
                      <a
                        target="_blank"
                        href={codeURL}
                        className="p-2 bg-gray-900 inline-block rounded-md absolute top-2 left-2 hover:opacity-80"
                      >
                        <Github size={17} color="white" />
                      </a>
                    </Tooltip>
                    <div className="mt-auto">
                      {labels.map((label, index) => (
                        <Chip
                          key={index}
                          size="sm"
                          variant="flat"
                          color="default"
                          className="mr-1 mb-1 card-label"
                        >
                          {label}
                        </Chip>
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </>
      ) : null}
    </>
  );
};
