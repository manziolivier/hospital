import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewPatient = () => {
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    address: '',
    symptoms: '',
    status: '',
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prevPatientInfo) => ({
      ...prevPatientInfo,
      [name]: value,
    }));
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:8080/patients/patient/new', patientInfo);

      if (response.status === 200) {
        setRegistrationSuccess(true);
        setTimeout(() => {
          navigate('/patients');
        }, 2000); // Automatically navigate back to /patients after 2 seconds
      }
    } catch (error) {
      console.error('Error during patient registration:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>New Patient Registration</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={patientInfo.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={patientInfo.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="symptoms">Symptoms:</label>
          <input
            type="text"
            id="symptoms"
            name="symptoms"
            value={patientInfo.symptoms}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={patientInfo.status}
            onChange={handleChange}
            required
          />
        </div>

        <button type="button" onClick={handleRegistration}>
          Register Patient
        </button>
      </form>

      {registrationSuccess && <p>Patient registration successful!</p>}
    </div>
  );
};

export default NewPatient;
