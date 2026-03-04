import React from 'react';
import { Badge } from './ui/badge';

export const Skills = ({ data }) => {
  const rawSkills = Array.isArray(data) ? data : data?.value ?? data ?? '';
  const skills = Array.isArray(rawSkills)
    ? rawSkills
    : String(rawSkills)
        .split(/,\s*/)
        .map((item) => item.trim())
        .filter(Boolean);

  return (
    <section>
      <h2 className="title">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((item, i) => (
          <Badge title={item} key={i} />
        ))}
      </div>
    </section>
  );
};
