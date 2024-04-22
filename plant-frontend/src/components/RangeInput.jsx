import React from 'react';

const RangeInput = ({ h2, value, onChange }) => (
  <div className="input-group">
    <h2>{h2}</h2> {/* Change label to h2 */}
    <div className="range-container">
      <input
        type="range"
        id={h2} 
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
