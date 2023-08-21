import React from 'react';

const Card = ({ image, title, description, children }) => {
  return (
    <div className="border rounded-md overflow-hidden shadow-sm">
      {image && <img src={image} alt={title} className="w-full object-cover h-40" />}
      <div className="p-4">
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
