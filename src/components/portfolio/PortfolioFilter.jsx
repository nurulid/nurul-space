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
            className={`px-4 py-1 rounded-full capitalize relative bg-purple-200 hover:bg-purple-300 text-sm transition-all ${selected ? 'text-purple-800 font-semibold' : 'text-purple-700 font-medium'}`}
          >
            <span
              className={[selected && 'text-purple-200', 'relative z-[2]'].join(
                ' '
              )}
            >
              {value === null ? 'all' : label}
            </span>

            {selected && (
              <motion.span
                layoutId="tab"
                transition={{ type: 'spring', duration: 0.4 }}
                className="absolute inset-0 z-0 rounded-full bg-black text-purple-200"
              ></motion.span>
            )}
          </a>
        );
      })}
    </div>
  );
};
