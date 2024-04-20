import Link from 'next/link';
import React from 'react';
import { Card } from './ui/card';

export const Work = ({ data }) => {
  return (
    <section>
      <h2 className="title">Work Experiences</h2>
      <div className="space-y-3">
        {data.work.map(
          ({ role, company, link, start, end, location, status, description }, i) => (
            <Card
              key={i}
              {...{ role, company, link, start, end, location, status, description }}
            />
          )
        )}
      </div>
    </section>
  );
};
