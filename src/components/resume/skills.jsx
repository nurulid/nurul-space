import React from 'react';

export const Skills = ({ data }) => {
  return (
    <section>
      <h2 className="title">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {data.skills.map((item, i) => (
          <span
            key={i}
            className="py-1 px-2 bg-[#111827cc] text-white rounded-md text-xs font-mono hover:opacity-80"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};
