import React from 'react';

const Avatar = ({ src, alt = '', size = 'medium', fallback }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="bg-gray-200 flex justify-center items-center text-gray-400 text-xl">
          {fallback || 'N/A'}
        </div>
      )}
    </div>
  );
};

export default Avatar;
