// Rooms.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './table.css'; // Make sure to import the CSS file for styling

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const result = await axios.get("http://localhost:8080/rooms/room/views");
        setRooms(result.data);
        console.log("Fetched rooms:", result.data);
      } catch (error) {
        console.error("Error loading rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  const onEditClick = (roomId) => {
    console.log("Edit clicked for room ID:", roomId);
    // Redirect to editRoom.js with the appropriate roomId
    navigate(`/editRoom/${roomId}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/rooms/room/delete/${id}`);

      if (response.status === 200) {
        console.log('Room deleted successfully!');
        setTimeout(() => {
          navigate("/rooms");
        }, 2000); // Automatically navigate after 2 seconds
      }
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  const handleAddRoom = () => {
    // Redirect to newRoom.js for adding a new room
    navigate('/newRoom');
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Floor</th>
              <th scope="col">Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{room.floor}</td>
                <td>{room.number}</td>
                <td>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => onEditClick(room.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleDelete(room.id)}
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
          onClick={handleAddRoom}
        >
          Add Room
        </button>
      </div>
    </div>
  );
};

export default Rooms;
