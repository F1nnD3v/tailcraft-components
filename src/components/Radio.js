import React from 'react';

const Radio = ({ name, label, value, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-3">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio h-5 w-5 text-blue-600"
      />
      {label && <span className="text-gray-900">{label}</span>}
    </label>
  );
};

export default Radio;
