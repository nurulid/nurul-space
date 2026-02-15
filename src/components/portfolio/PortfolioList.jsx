'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { PortfolioCard } from './PortfolioCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const PortfolioList = ({ portfolio }) => {
  const projectsWrapperRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Sort the portfolio array by id in descending order
  const sortedData = useMemo(
    () => [...(portfolio ?? [])].sort((a, b) => Number(b.id) - Number(a.id)),
    [portfolio],
  );

  const highlightProject = sortedData.filter(
    (item) => item.category === 'fullstack' || item.category === 'frontend',
  );

  const updateScrollState = () => {
    const el = projectsWrapperRef.current;

    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < maxScrollLeft - 1);
  };

  const scrollProjects = (direction) => {
    const el =
      projectsWrapperRef.current || document.getElementById('projects-wrapper');

    if (!el) return;

    const distance = Math.max(200, Math.floor(el.clientWidth * 0.8));

    el.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const el = projectsWrapperRef.current;

    if (!el) return;

    updateScrollState();

    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [highlightProject.length]);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center justify-between md:justify-start gap-4">
          <h1 id="projects" className="text-2xl font-mono">
            Projects
          </h1>
          <div className="space-x-6 md:space-x-2">
            <button
              onClick={() => scrollProjects('left')}
              disabled={!canScrollLeft}
              className={`p-2 transition-colors ${
                canScrollLeft ? 'group hover:text-purple-600' : 'opacity-40'
              }`}
            >
              <ChevronLeft
                size={20}
                className="inline-block group-hover:text-purple-600"
              />
            </button>
            <button
              onClick={() => scrollProjects('right')}
              disabled={!canScrollRight}
              className={`p-2 transition-colors ${
                canScrollRight ? 'group hover:text-purple-600' : 'opacity-40'
              }`}
            >
              <ChevronRight
                size={20}
                className="inline-block group-hover:text-purple-600"
              />
            </button>
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Here are some of my projects. Click on the project title to see the
          live demo.
        </p>
      </div>
      {portfolio ? (
        <div
          id="projects-wrapper"
          ref={projectsWrapperRef}
          className="flex overflow-x-auto overflow-y-hidden gap-4 scroll-smooth pb-5"
        >
          {highlightProject.map(
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
            }) => (
              <PortfolioCard
                key={id}
                {...{
                  id,
                  title,
                  description,
                  labels,
                  thumbnail,
                  previewURL,
                  codeURL,
                  isDone,
                  isTeam,
                }}
              />
            ),
          )}
        </div>
      ) : null}
    </div>
  );
};
