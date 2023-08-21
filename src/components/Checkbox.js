import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={checked}
        onChange={onChange}
      />
      {label && <span className="text-gray-900">{label}</span>}
    </label>
  );
};

export default Checkbox;
