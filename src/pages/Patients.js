import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './table.css';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const result = await axios.get("http://localhost:8080/patients/patient/views");
        setPatients(result.data);
        console.log("Fetched patients:", result.data);
      } catch (error) {
        console.error("Error loading patients:", error);
      }
    };

    fetchPatients();
  }, []);

  const onEditClick = (patientId) => {
    console.log("Edit clicked for patient ID:", patientId);
    // Redirect to editPatient.js with the appropriate patientId
    navigate(`/editPatient/${patientId}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/patients/patients/delete/${id}`);

      if (response.status === 200) {
        console.log('Patient deleted successfully!');
        setTimeout(() => {
          navigate("/patients");
        }, 2000); // Automatically navigate after 2 seconds
      }
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  const handleAddPatient = () => {
    navigate("/newPatient");
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Symptoms</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{patient.name}</td>
                <td>{patient.address}</td>
                <td>{patient.symptoms}</td>
                <td>{patient.status}</td>
                <td>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => onEditClick(patient.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleDelete(patient.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-end">
          <button className="btn btn-success" onClick={handleAddPatient}>
            Add Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default Patients;
