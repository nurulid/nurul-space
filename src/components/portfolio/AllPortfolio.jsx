"use client";

import { Chip, Tooltip } from "@nextui-org/react";
import { Github, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  const category = [null, "CSS", "frontend", "fullstack"];

  return (
    <>
      <div>
        {category.map((item, index) => {
          return (
            <Chip
              key={index}
              onClick={() => handleFilter(item)}
              variant="flat"
              color="secondary"
              className="mr-3 cursor-pointer capitalize"
            >
              {item === null ? "all" : item}
            </Chip>
          );
        })}
      </div>
      {portfolio ? (
        <>
          <h2 className="my-5 text-xl capitalize">
            {selectedCategory === null ? "all" : selectedCategory}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {filteredPortfolio.map(
              ({ id, title, labels, thumbnail, previewURL, codeURL }) => {
                return (
                  <div key={id} className="p-4 border-[.5px] rounded-md relative group transition-all">
                    <div className="h-[250px] w-full overflow-hidden">
                      <Tooltip showArrow={true} content="Preview">
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
                      <h2 className="mt-5 mb-3 text-xl font-mono group-hover:text-purple-500 transition-all">
                        {title}
                        <MoveRight
                          size={18}
                          className="inline-block ml-2 group-hover:rotate-[-45deg] transition-all"
                        />
                      </h2>
                    </a>
                    <Tooltip showArrow={true} content="Souce code">
                      <a
                        target="_blank"
                        href={codeURL}
                        className="p-2 bg-gray-900 inline-block rounded-md absolute top-2 left-2 hover:opacity-80"
                      >
                        <Github size={17} color="white" />
                      </a>
                    </Tooltip>
                    <ul>
                      {labels.map((label, index) => (
                        <Chip
                          key={index}
                          size="sm"
                          variant="flat"
                          color="default"
                          className="mr-1 mb-1"
                        >
                          {label}
                        </Chip>
                      ))}
                    </ul>
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
