import React from 'react';

const Circle = ({ left, top, diameter }) => {
  return (
    <div
      className="absolute bg-blue-500 rounded-full border-4"
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        left: `${left}px`,
        top: `${top}px`,
      }}
    />
  );
};

export default Circle;
