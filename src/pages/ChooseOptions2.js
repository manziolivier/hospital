import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChooseOptions.css'

const ChooseOptions2 = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleCheckboxChange = (option) => {
    // Update the selected option
    setSelectedOption(option);
  };

  const handleGoButtonClick = () => {
    // Redirect based on the selected option
    if (selectedOption === 'patients') {
      // Redirect to Patients component or the appropriate route
      navigate('/patients');
    } else if (selectedOption === 'medicine') {
      // Redirect to Medicine component or the appropriate route
      navigate('/medicine');
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
            value="patients"
            checked={selectedOption === 'patients'}
            onChange={() => handleCheckboxChange('patients')}
          />
          Patients
        </label>

        <label>
          <input
            type="checkbox"
            value="medicine"
            checked={selectedOption === 'medicine'}
            onChange={() => handleCheckboxChange('medicine')}
          />
          Medicine
        </label>
      </div>

      <button type="button" onClick={handleGoButtonClick}>
        GO
      </button>

      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default ChooseOptions2;
