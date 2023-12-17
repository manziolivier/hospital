import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditRooms = ({ onCancel }) => {
  const [editedRoom, setEditedRoom] = useState({
    floor: "",
    number: "",
  });

  const [successMessage, setSuccessMessage] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchRoom();
  }, [id]);

  const fetchRoom = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/rooms/room/search/${id}`);
      setEditedRoom(response.data);
      console.log("Fetched room:", response.data);
    } catch (error) {
      console.error("Error loading room:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/rooms/room/update/${id}`, editedRoom);

      if (response.status === 200) {
        setSuccessMessage('Room updated successfully!');
        setTimeout(() => {
          navigate("/rooms");
        }, 2000); // Automatically navigate after 2 seconds
      }
    } catch (error) {
      console.error("Error updating room:", error);
    }
  };

  const handleCancel = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  return (
    <div>
      <h2>Edit Room</h2>

      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      <form>
        <div className="mb-3">
          <label htmlFor="floor" className="form-label">
            Floor
          </label>
          <input
            type="text"
            className="form-control"
            id="floor"
            name="floor"
            value={editedRoom.floor}
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
            value={editedRoom.number}
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

export default EditRooms;
