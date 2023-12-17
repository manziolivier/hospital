import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewMedicine = () => {
  const [medicineInfo, setMedicineInfo] = useState({
    category: '',
    ageGroup: '',
    prescription: '',
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicineInfo((prevMedicineInfo) => ({
      ...prevMedicineInfo,
      [name]: value,
    }));
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:8080/medicine/new', medicineInfo);

      if (response.status === 200) {
        setRegistrationSuccess(true);
        setTimeout(() => {
          navigate('/medicine');
        }, 2000); // Automatically navigate back to /medicine after 2 seconds
      }
    } catch (error) {
      console.error('Error during medicine registration:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>New Medicine Registration</h2>
      <form>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={medicineInfo.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ageGroup">Age Group:</label>
          <input
            type="text"
            id="ageGroup"
            name="ageGroup"
            value={medicineInfo.ageGroup}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="prescription">Prescription:</label>
          <input
            type="text"
            id="prescription"
            name="prescription"
            value={medicineInfo.prescription}
            onChange={handleChange}
            required
          />
        </div>

        <button type="button" onClick={handleRegistration}>
          Register Medicine
        </button>
      </form>

      {registrationSuccess && <p>Medicine registration successful!</p>}
    </div>
  );
};

export default NewMedicine;
