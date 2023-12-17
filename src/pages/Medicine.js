import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './table.css'; // Make sure to import the CSS file for styling

const Medicine = () => {
  const [medicines, setMedicines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const result = await axios.get("http://localhost:8080/medicine/get");
        setMedicines(result.data);
        console.log("Fetched medicines:", result.data);
      } catch (error) {
        console.error("Error loading medicines:", error);
      }
    };

    fetchMedicines();
  }, []);

  const onEditClick = (medicineId) => {
    console.log("Edit clicked for medicine ID:", medicineId);
    // Redirect to editMedicine.js with the appropriate medicineId
    navigate(`/editMedicine/${medicineId}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/medicine/delete/${id}`);

      if (response.status === 200) {
        console.log('Medicine deleted successfully!');
        setTimeout(() => {
          navigate("/medicine");
        }, 2000); // Automatically navigate after 2 seconds
      }
    } catch (error) {
      console.error("Error deleting medicine:", error);
    }
  };

  const handleAdd = () => {
    // Redirect to newMedicine.js for adding a new medicine
    navigate("/newMedicine");
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Category</th>
              <th scope="col">Age Group</th>
              <th scope="col">Prescription</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{medicine.category}</td>
                <td>{medicine.ageGroup}</td>
                <td>{medicine.prescription}</td>
                <td>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => onEditClick(medicine.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleDelete(medicine.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="btn btn-success"
          onClick={handleAdd}
        >
          Add Medicine
        </button>
      </div>
    </div>
  );
};

export default Medicine;
