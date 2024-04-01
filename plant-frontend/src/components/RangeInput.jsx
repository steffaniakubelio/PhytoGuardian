import React from 'react';

const RangeInput = ({ label, value, onChange }) => (
  <div className="input-group">
    <label htmlFor={label}>{label}:</label>
    <div className="range-container">
      <input
        type="range"
        id={label}
        min="1"
        max="10"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="range-value">{value}</span>
    </div>
  </div>
);

export default RangeInput;
