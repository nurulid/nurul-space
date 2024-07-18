import React from 'react';

export const TestiCard = ({testi, user}) => {
  return (
    <div className="text-center p-5">
      <p className="text-3xl text-[#4148FB] mb-5 font-bold">{testi}</p>
      <span className="py-[6px] px-4 text-xs text-[#4148FB] bg-white border-2 border-[#4148FB] rounded-[10px] uppercase">{user}</span>
    </div>
  );
};
