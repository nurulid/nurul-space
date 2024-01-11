"use client";

import { Chip } from "@nextui-org/react";
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

  const category = [null, "css", "frontend", "fullstack"];

  return (
    <>
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
      {portfolio ? (
        <>
          <h2 className="my-5 text-xl capitalize">{selectedCategory === null ? "all" : selectedCategory}</h2>
          <div className="grid grid-cols-3 gap-4">
            {filteredPortfolio.map(({ id, title, labels }) => {
              return (
                <div key={id} className="p-4 border">
                  <h2>{title}</h2>
                  <ul>
                    {labels.map((label, index) => (
                      <span key={index}>{label}, </span>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </>
      ) : null }
    </>
  );
};
