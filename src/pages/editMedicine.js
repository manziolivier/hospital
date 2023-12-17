import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditMedicine = ({ onCancel }) => {
  const [editedMedicine, setEditedMedicine] = useState({
    category: "",
    ageGroup: "",
    prescription: "",
  });

  const [successMessage, setSuccessMessage] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMedicine();
  }, [id]);

  const fetchMedicine = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/medicine/search/${id}`);
      setEditedMedicine(response.data);
      console.log("Fetched medicine:", response.data);
    } catch (error) {
      console.error("Error loading medicine:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMedicine((prevMedicine) => ({
      ...prevMedicine,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/medicine/update/${id}`, editedMedicine);

      if (response.status === 200) {
        setSuccessMessage('Medicine updated successfully!');
        setTimeout(() => {
          navigate("/medicine");
        }, 2000); // Automatically navigate after 2 seconds
      }
    } catch (error) {
      console.error("Error updating medicine:", error);
    }
  };

  const handleCancel = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  return (
    <div>
      <h2>Edit Medicine</h2>

      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      <form>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={editedMedicine.category}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ageGroup" className="form-label">
            Age Group
          </label>
          <input
            type="text"
            className="form-control"
            id="ageGroup"
            name="ageGroup"
            value={editedMedicine.ageGroup}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prescription" className="form-label">
            Prescription
          </label>
          <input
            type="text"
            className="form-control"
            id="prescription"
            name="prescription"
            value={editedMedicine.prescription}
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

export default EditMedicine;
