import React from 'react';
import { Badge } from './ui/badge';

export const Skills = ({ data }) => {
  return (
    <section>
      <h2 className="title">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {data.map((item, i) => (
          <Badge title={item} key={i} />
        ))}
      </div>
    </section>
  );
};
