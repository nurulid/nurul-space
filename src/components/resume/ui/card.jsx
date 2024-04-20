import React from 'react';
import Link from 'next/link';

export const Card = ({
  role,
  company,
  link,
  start,
  end,
  location,
  status,
  description,
}) => {
  return (
    <div>
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-base font-semibold mb-1">
          <Link href={link} target="_blank">
            {company}
          </Link>{' '}
          <span className="text-xs py-[2px] px-2 bg-gray-100 text-black rounded-md inline-block">
            {location}
          </span>
        </h3>
        <p className="!text-sm whitespace-nowrap">
          <span>{start}</span>
          {'-'}
          <span>{end}</span>
        </p>
      </div>
      <p className="!text-sm">
        {role} {status && <small> - {status}</small>}
      </p>
      <p>{description}</p>
    </div>
  );
};
