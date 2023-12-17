import React, { useState } from 'react';
import axios from 'axios';

const PatientSignup = () => {
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    address: '',
    symptoms: '',
    status: '',
  });
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prevPatientInfo) => ({
      ...prevPatientInfo,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8080/patients/patient/new', patientInfo);

      if (response.status === 200) {
        setSignupSuccess(true);
      }
    } catch (error) {
      console.error('Error during patient signup:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Patient Signup</h2>
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

        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>

      {signupSuccess && <p>Signup successful!</p>}
    </div>
  );
};

export default PatientSignup;
