import React, { useState, useRef } from 'react';

const Tooltip = ({ content, children, position = "d" }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2 mt-2';
      case 'left':
        return 'top-1/2 -left-4 transform -translate-x-full -translate-y-1/2 ml-2';
      default: // right
        return 'top-1/2 -right-4 transform translate-x-full -translate-y-1/2 mr-2';
    }
  };

  const positionClasses = getPositionClasses();

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          className={`absolute z-10 p-2 text-white text-xs bg-black rounded-md shadow-md ${positionClasses}`}
          style={{ minWidth: 'fit-content' }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
