import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loaderData = useLoaderData();
  const [user, setUser] = useState(loaderData);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log("delete successful", data);
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success",
          });
          const remaining = user.filter((item) => item._id !== id);
          setUser(remaining);
        }
      });
  };
  return (
    <div>
      <h1>Users : {loaderData.length} </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>CreatedAt</th>
              <th>Last Logged</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {user.map((item) => (
              <tr key={item._id}>
                <th>1</th>
                <td>{item.email}</td>
                <td>{item.createdAt}</td>
                <td>{item.metadata?.lastSignInTime}</td>
                <td onClick={() => handleDelete(item._id)} className="btn">
                  X
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
