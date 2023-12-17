import React, { useState } from 'react';
import axios from 'axios';

const DoctorSignup = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    name: '',
    address: '',
    specialisation: '',
    number: '',
  });
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorInfo((prevDoctorInfo) => ({
      ...prevDoctorInfo,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8080/doctors/doctor/new', doctorInfo);

      if (response.status === 200) {
        setSignupSuccess(true);
      }
    } catch (error) {
      console.error('Error during doctor signup:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Doctor Signup</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={doctorInfo.name}
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
            value={doctorInfo.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialisation">Specialisation:</label>
          <input
            type="text"
            id="specialisation"
            name="specialisation"
            value={doctorInfo.specialisation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="number">Number:</label>
          <input
            type="text"
            id="number"
            name="number"
            value={doctorInfo.number}
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

export default DoctorSignup;
