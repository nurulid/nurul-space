import React from 'react';

export const BgTheme = ({ theme, isPatternOnly = false }) => {
  return (
    <>
      {isPatternOnly ? (
        <div className="bg-pattern" />
      ) : (
        <>
          <div style={{ '--bg': theme }} className="bg-custom" />
          <div className="bg-pattern" />
        </>
      )}
    </>
  );
};
