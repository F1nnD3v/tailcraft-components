import React from 'react';

const Textarea = ({ label, value, onChange, placeholder, rows = 4 }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 text-gray-700">{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="border rounded-md p-2 focus:ring focus:ring-blue-200 focus:outline-none"
      ></textarea>
    </div>
  );
};

export default Textarea;
