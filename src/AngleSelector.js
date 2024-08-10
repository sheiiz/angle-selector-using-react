import React, { useState } from 'react';
import './AngleSelector.css'; // Import the CSS file for styling

const commonAngles = [0, 45, 60, 90, 180];

const AngleSelector = () => {
  const [angle, setAngle] = useState(0);

  const handleTextChange = (e) => {
    const value = Math.max(0, Math.min(360, Number(e.target.value) || 0));
    setAngle(value);
  };

  const handleSliderChange = (e) => {
    setAngle(Number(e.target.value));
  };

  const handleRadioChange = (e) => {
    setAngle(Number(e.target.value));
  };

  return (
    <div className="angle-selector">
      <div className="angle-selector-content">
        <div className="input-container">
        <label htmlFor="angle-input">Angle :</label>
        <input
          id="angle-input"
          type="number"
          value={angle}
          onChange={handleTextChange}
          min="0"
          max="360"
        />
        </div>
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={handleSliderChange}
          className="slider"
        />
        <div className="radio-buttons">
          {commonAngles.map((value) => (
            <label key={value} className="radio-button">
              <input
                type="radio"
                name="angle-radio"
                value={value}
                checked={angle === value}
                onChange={handleRadioChange}
              />
              {value}°
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AngleSelector;
