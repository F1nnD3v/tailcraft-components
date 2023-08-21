import React, { useState } from 'react';

const Item = ({ children }) => <div className="p-2">{children}</div>;

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md overflow-hidden">
      <button
        className="w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {isOpen ? '-' : '+'}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

Accordion.Item = Item;

export default Accordion;
