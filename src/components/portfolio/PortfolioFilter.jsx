'use client';

import { motion } from 'framer-motion';

export const PortfolioFilter = ({ categories, selectedCategory, setSelectedCategory }) => {

  // Handle category filter
  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
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
              className={[selected && 'text-purple-200', 'relative z-[2]'].join(
                ' '
              )}
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
  );
};
