import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import "./table.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const componentRef = useRef();

  const onEditClick = (userId) => {
    console.log("Edit clicked for user ID:", userId);
    navigate(`/Edituser/${userId}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/doctors/doctor/delete/${id}`);

      if (response.status === 200) {
        setTimeout(() => {
          navigate("/home");
        }, 2000); // Automatically navigate after 2 seconds
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handlePrint = () => {
    const input = document.getElementById("table-container");

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 210, 297);
      pdf.save("table.pdf");
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios.get("http://localhost:8080/doctors/all");
        setUsers(result.data);
        console.log("Fetched users:", result.data);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div className="py-4">
        <div className="print-button">
          <button className="btn btn-info" onClick={handlePrint}>
            Print as PDF
          </button>
        </div>
        <div id="table-container">
          <table className="table border shadow" ref={componentRef}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Specialisation</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                  <td>{user.specialisation}</td>
                  <td>{user.number}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary mx-2"
                      onClick={() => onEditClick(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
