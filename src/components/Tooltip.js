import React, { useState } from 'react';

const Tooltip = ({ content, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute z-10 p-2 text-white text-xs bg-black rounded-md shadow-md -top-8 left-0">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
