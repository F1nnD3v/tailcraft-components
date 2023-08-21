import React from 'react';

const ProgressBar = ({ progress, color = 'bg-blue-600' }) => {
  return (
    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full ${color}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
