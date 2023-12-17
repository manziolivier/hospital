import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [adminNumber, setAdminNumber] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate authentication logic (replace with actual authentication)
    if (adminId === '23099' && adminNumber === 'manzi') {
      setLoginSuccess(true);
      // Redirect to the page with checkboxes on successful login
      navigate('/choose-options');
    } else {
      setLoginSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form>
        <label htmlFor="adminId">Admin ID:</label>
        <input
          type="text"
          id="adminId"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
        />

        <label htmlFor="adminNumber">Admin Password:</label>
        <input
          type="password"
          id="adminNumber"
          value={adminNumber}
          onChange={(e) => setAdminNumber(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>

      {loginSuccess && <p>Login successful!</p>}
      {!loginSuccess && loginSuccess !== null && <p></p>}
    </div>
  );
};

export default AdminLogin;
