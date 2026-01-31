'use client';

import { motion } from 'framer-motion';

export const PortfolioFilter = ({ categories, selectedCategory, setSelectedCategory }) => {

  return (
    <div className="space-x-3">
      {categories.map(({ label, value }) => {
        const selected = selectedCategory === value;
        return (
          <a
            href="#projects"
            key={label}
            onClick={() => setSelectedCategory(value)}
            className={`px-4 py-1 rounded-full capitalize relative bg-gray-200 hover:bg-gray-300 text-sm transition-all ${selected ? 'text-gray-800 font-semibold' : 'text-gray-700 font-medium'}`}
          >
            <span
              className={[selected && 'text-gray-200', 'relative z-[2]'].join(
                ' '
              )}
            >
              {value === null ? 'all' : label}
            </span>

            {selected && (
              <motion.span
                layoutId="tab"
                transition={{ type: 'spring', duration: 0.4 }}
                className="absolute inset-0 z-0 rounded-full bg-black text-gray-200"
              ></motion.span>
            )}
          </a>
        );
      })}
    </div>
  );
};
