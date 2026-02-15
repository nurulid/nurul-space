"use client"

import Link from 'next/link';
import React, { useMemo } from 'react';

export const UiList = ({ projects }) => {
  const sortedData = useMemo(
    () => [...(projects ?? [])].sort((a, b) => Number(b.id) - Number(a.id)),
    [projects],
  );

  
  const cssProject = sortedData.filter((item) => item.category.toLowerCase() === 'css');

  return (
    <ul className="w-full md:w-1/2">
      {cssProject.map(({ id, title, previewURL, description }) => {
        return (
          <li
            key={id}
            className="py-2 border-b hover:border-solid border-dashed space-y-1 group relative"
          >
            <p
              className="inline-block group-hover:text-purple-600"
              key={id}
              href={previewURL}
            >
              {title}
            </p>
            <span className="text-xs text-gray-500 block">{description}</span>
            <Link href={previewURL} target='_blank' className="absolute inset-0"></Link>
          </li>
        );
      })}
    </ul>
  );
};
