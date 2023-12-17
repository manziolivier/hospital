import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DoctorLogin = () => {
  const [doctorName, setDoctorName] = useState('');
  const [doctorNumber, setDoctorNumber] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/doctors/doctor/search/${doctorName}/${doctorNumber}`);

      // Check if the doctor exists and the provided name matches
      if (response.status === 200) {
        setLoginSuccess(true);

        // Redirect to ChooseOptions2.js after successful login
        navigate('/choose-options2');
      } else {
        setLoginSuccess(false);
      }
    } catch (error) {
      console.error('Error during doctor login:', error);
      setLoginSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Doctor Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="doctorName">Doctor Name:</label>
          <input
            type="text"
            id="doctorName"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="doctorNumber">Doctor Number:</label>
          <input
            type="password"  
            id="doctorNumber"
            value={doctorNumber}
            onChange={(e) => setDoctorNumber(e.target.value)}
            required
          />
        </div>

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>

      {loginSuccess === true && <p className="success-message">Login successful!</p>}
      {loginSuccess === false && <p className="error-message">Login failed. Please check your credentials.</p>}
    </div>
  );
};

export default DoctorLogin;
