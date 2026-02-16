import React from 'react';

export const SectionHeader = ({ title, description }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-mono">
        {title}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
    </div>
  );
};
