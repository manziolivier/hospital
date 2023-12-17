import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = ({ onCancel }) => {
  const [editedUser, setEditedUser] = useState({
    name: "",
    address: "",
    specialisation: "",
    number: "",
  });

  const [successMessage, setSuccessMessage] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/doctors/doctor/search/${id}`);
      setEditedUser(response.data);
      console.log("Fetched user:", response.data);
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/doctors/doctor/update/${id}`, editedUser);

      if (response.status === 200) {
        setSuccessMessage('User updated successfully!');
        setTimeout(() => {
          navigate("/home");
        }, 2000); // Automatically navigate after 2 seconds
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleCancel = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  return (
    <div>
      <h2>Edit User</h2>

      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={editedUser.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={editedUser.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="specialisation" className="form-label">
            Specialisation
          </label>
          <input
            type="text"
            className="form-control"
            id="specialisation"
            name="specialisation"
            value={editedUser.specialisation}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Number
          </label>
          <input
            type="text"
            className="form-control"
            id="number"
            name="number"
            value={editedUser.number}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;
