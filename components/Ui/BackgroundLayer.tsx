
// src/components/BackgroundLayer.tsx
import React from 'react';

const BackgroundLayer = () => {
  return (
    <div
      data-name="background-decorations"
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Purple Gradient */}
      <div
        data-name="bg-gradient-purple"
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"
      ></div>

      {/* Blue Gradient */}
      <div
        data-name="bg-gradient-blue"
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
    </div>
  );
};

export default BackgroundLayer;
