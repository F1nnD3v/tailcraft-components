import React from 'react';

const Input = ({ label, value, onChange, type = 'text', placeholder }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 text-gray-700">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border rounded-md p-2 focus:ring focus:ring-blue-200 focus:outline-none"
      />
    </div>
  );
};

export default Input;
