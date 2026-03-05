'use client';

import { sortByIdDesc } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';

export const SectionList = ({
  projects,
  isFullWidth,
  showHoverPreview = false,
}) => {
  const sortedData = useMemo(() => sortByIdDesc(projects ?? []), [projects]);

  const [hoveredThumbnail, setHoveredThumbnail] = useState(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const clearPreviewTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (clearPreviewTimeoutRef.current) {
        clearTimeout(clearPreviewTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`w-full ${showHoverPreview ? 'md:flex md:gap-8' : ''}`}>
      <ul className={`w-full ${isFullWidth ? '' : 'md:w-1/2'}`}>
        {sortedData.map(
          ({ id, title, link, url, description, tag, created, thumbnail }) => {
            return (
              <li
                key={id}
                className="py-2 border-b border-dashed border-border hover:border-solid hover:border-purple-200 space-y-1 group relative transition-all"
                onMouseEnter={() => {
                  if (!showHoverPreview) return;
                  if (clearPreviewTimeoutRef.current) {
                    clearTimeout(clearPreviewTimeoutRef.current);
                  }
                  setHoveredThumbnail(thumbnail || null);
                  setIsPreviewVisible(Boolean(thumbnail));
                }}
                onMouseLeave={() => {
                  if (!showHoverPreview) return;
                  setIsPreviewVisible(false);
                  clearPreviewTimeoutRef.current = setTimeout(() => {
                    setHoveredThumbnail(null);
                  }, 220);
                }}
              >
                <p className="inline-block group-hover:text-brand group-hover:text-purple-600">
                  {title}{' '}
                  {!tag && (
                    <ArrowRight className="inline-block size-4 opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100 ml-2" />
                  )}
                  {tag && (
                    <>
                      -{' '}
                      <span className="px-2 py-1 text-xs border rounded text-muted bg-surfaceMuted">
                        {tag}
                      </span>
                      <ArrowRight className="inline-block size-4 opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100 ml-2" />
                    </>
                  )}
                </p>
                <span className="text-xs text-muted block">
                  {created ? created : description}
                </span>
                <Link
                  href={link ? link : url}
                  target={link ? '_blank' : '_self'}
                  className="absolute inset-0"
                ></Link>
              </li>
            );
          },
        )}
      </ul>

      {showHoverPreview && (
        <div className="hidden md:block md:w-1/2 sticky top-24">
          {hoveredThumbnail && (
            <Image
              src={hoveredThumbnail}
              alt="Project preview"
              width={1200}
              height={800}
              className={`w-full h-[230px] rounded-xl border border-border object-cover object-left-top transition-all duration-200 ease-out ${
                isPreviewVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-[0.985]'
              }`}
            />
          )}
        </div>
      )}
    </div>
  );
};
