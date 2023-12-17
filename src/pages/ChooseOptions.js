import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChooseOptions.css'

const ChooseOptions = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleCheckboxChange = (option) => {
    // Update the selected option
    setSelectedOption(option);
  };

  const handleGoButtonClick = () => {
    // Redirect to Home.js when "Doctors" is selected
    if (selectedOption === 'doctors') {
      navigate('/home');
    } else if (selectedOption === 'rooms') {
      // Redirect to Rooms.js or the appropriate component for handling rooms
      navigate('/rooms');
    }
    // Add logic for other options if needed
  };

  return (
    <div className="choose-options-container">
      <h2>Choose Options</h2>

      <div className="checkbox-options">
        <label>
          <input
            type="checkbox"
            value="doctors"
            checked={selectedOption === 'doctors'}
            onChange={() => handleCheckboxChange('doctors')}
          />
          Doctors
        </label>

        <label>
          <input
            type="checkbox"
            value="rooms"
            checked={selectedOption === 'rooms'}
            onChange={() => handleCheckboxChange('rooms')}
          />
          Rooms
        </label>
      </div>

      <button type="button" onClick={handleGoButtonClick}>
        GO
      </button>

      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default ChooseOptions;
