import Link from 'next/link';
import React from 'react';

export const Work = ({ data }) => {
  return (
    <section>
      <h2 className="title">Work Experiences</h2>
      <div className="space-y-3">
        {data.work.map(
          (
            { role, company, link, start, end, location, description },
            i
          ) => (
            <div key={i}>
              <div className="flex justify-between items-start ">
                <h3 className="text-base font-semibold mb-1">
                  <Link href={link} target='_blank'>{company}</Link>{' '}
                  <span className="text-xs py-[2px] px-2 bg-gray-100 text-black rounded-md inline-block">
                    {location}
                  </span>
                </h3>
                <p className="!text-sm">
                  <span>{start}</span>
                  {'-'}
                  <span>{end}</span>
                </p>
              </div>
              <p className="!text-sm">{role}</p>
              <p>{description}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};
