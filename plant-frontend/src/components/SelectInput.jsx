import React from 'react';
import '../index.css';

const SelectInput = ({ h2, label, value, options, onChange }) => (
  <div className="input-group">
    {h2 && <h2>{h2}</h2>}
    {!h2 && label && <label htmlFor={label}>{label}:</label>}
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
