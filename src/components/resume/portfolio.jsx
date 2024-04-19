import Link from 'next/link';
import React from 'react';

export const Portfolio = ({ data }) => {
  return (
    <section>
      <h2 className="title">Portfolio/Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {data.portfolio.map(
          ({ title, techStack, description, link, isDone }, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-md p-3 flex flex-col"
            >
              <h3 className="text-base font-semibold  leading-[1.2] mb-2">
                <Link href={link} target="_blank" className="relative pr-2">
                  {title}
                  {link && (
                    <span className="inline-block size-[5px] bg-green-300 rounded-full right-0 top-1/2 -translate-y-1/2 ml-1"></span>
                  )}
                </Link>
              </h3>
              {!isDone && (
                <div className="-translate-y-2">
                  <span className="text-[8px] bg-black text-gray-100 py-[2px] px-2 rounded-full">
                    work in progress
                  </span>
                </div>
              )}
              <span></span>
              <p className="!mb-4">{description}</p>
              <div className="flex gap-1 flex-wrap mt-auto">
                {techStack.map((item, i) => (
                  <span
                    key={i}
                    className="text-[10px] py-[2px] px-2 bg-gray-100 text-black rounded-md -translate-y-[2px] inline-block font-semibold font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
