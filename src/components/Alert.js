import React from 'react';

const Alert = ({ type = 'info', message="Change me!", onClose }) => {
  const alertStyles = {
    success: 'bg-green-100 text-green-800 border-green-400',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-400',
    error: 'bg-red-100 text-red-800 border-red-400',
    info: 'bg-blue-100 text-blue-800 border-blue-400',
  };

  return (
    <div
      className={`border-l-4 p-4 ${alertStyles[type]} flex justify-between items-center`}
    >
      <span>{message}</span>
      {onClose && (
        <button
          className="text-gray-700 hover:text-gray-500 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
