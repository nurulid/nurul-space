import Link from 'next/link';
import React, { useMemo } from 'react';

export const SectionList = ({ projects, isFullWidth }) => {
  const sortedData = useMemo(
    () => [...(projects ?? [])].sort((a, b) => Number(b.id) - Number(a.id)),
    [projects],
  );

  return (
    <ul className={`"w-full" ${isFullWidth ? '' : 'md:w-1/2'}`}>
      {sortedData.map(
        ({ id, title, previewURL, url, description, tag, created }) => {
          return (
            <li
              key={id}
              className="py-2 border-b border-dashed border-border hover:border-solid space-y-1 group relative transition-all"
            >
              <p
                className="inline-block group-hover:text-brand"
                key={id}
                href={previewURL ? previewURL : url}
              >
                {title}{' '}
                {tag && (
                  <>
                    -{' '}
                    <span className="px-2 py-1 text-xs border rounded text-muted bg-surfaceMuted">
                      {tag}
                    </span>
                  </>
                )}
              </p>
              <span className="text-xs text-muted block">
                {created ? created : description}
              </span>
              <Link
                href={previewURL ? previewURL : url}
                target={previewURL ? '_blank' : '_self'}
                className="absolute inset-0"
              ></Link>
            </li>
          );
        },
      )}
    </ul>
  );
};
