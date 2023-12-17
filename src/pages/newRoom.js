// NewRoom.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewRoom = () => {
  const [roomInfo, setRoomInfo] = useState({
    floor: '',
    number: '',
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomInfo((prevRoomInfo) => ({
      ...prevRoomInfo,
      [name]: value,
    }));
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:8080/rooms/room/new', roomInfo);

      if (response.status === 200) {
        setRegistrationSuccess(true);
        setTimeout(() => {
          navigate('/rooms');
        }, 2000); // Automatically navigate back to /rooms after 2 seconds
      }
    } catch (error) {
      console.error('Error during room registration:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>New Room Registration</h2>
      <form>
        <div className="form-group">
          <label htmlFor="floor">Floor:</label>
          <input
            type="text"
            id="floor"
            name="floor"
            value={roomInfo.floor}
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
            value={roomInfo.number}
            onChange={handleChange}
            required
          />
        </div>

        <button type="button" onClick={handleRegistration}>
          Register Room
        </button>
      </form>

      {registrationSuccess && <p>Room registration successful!</p>}
    </div>
  );
};

export default NewRoom;
