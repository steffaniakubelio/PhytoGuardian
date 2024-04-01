import React from 'react';

const SelectInput = ({ label, value, options, onChange }) => (
  <div className="input-group">
    <label htmlFor={label}>{label}:</label>
    <select id={label} value={value} onChange={onChange}>
      <option value="">--Select--</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
