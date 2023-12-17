import React from "react";

const ViewUser = ({ user }) => {
  return (
    <div className="container">
      <div className="py-4">
        <h2>User Details</h2>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Specialisation</th>
              <th scope="col">Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>{user.specialisation}</td>
              <td>{user.number}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUser;
