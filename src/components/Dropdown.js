import React, { useState } from 'react';

const Dropdown = ({ label, options = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="bg-white border rounded-md p-2 w-64 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}: {selectedOption}
      </button>
      {isOpen && (
        <ul className="absolute z-10 bg-white border rounded-md w-64 mt-2">
          {options.map((option, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
