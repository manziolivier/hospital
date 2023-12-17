import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPatients = ({ onCancel }) => {
  const [editedPatient, setEditedPatient] = useState({
    name: "",
    address: "",
    symptoms: "",
    status: "",
  });

  const [successMessage, setSuccessMessage] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPatient();
  }, [id]);

  const fetchPatient = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/patients/patients/search/${id}`);
      setEditedPatient(response.data);
      console.log("Fetched patient:", response.data);
    } catch (error) {
      console.error("Error loading patient:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/patients/patients/update/${id}`, editedPatient);

      if (response.status === 200) {
        setSuccessMessage('Patient updated successfully!');
        setTimeout(() => {
          navigate("/patients");
        }, 2000); // Automatically navigate after 2 seconds
      }
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  const handleCancel = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  return (
    <div>
      <h2>Edit Patient</h2>

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
            value={editedPatient.name}
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
            value={editedPatient.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="symptoms" className="form-label">
            Symptoms
          </label>
          <input
            type="text"
            className="form-control"
            id="symptoms"
            name="symptoms"
            value={editedPatient.symptoms}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            value={editedPatient.status}
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

export default EditPatients;
