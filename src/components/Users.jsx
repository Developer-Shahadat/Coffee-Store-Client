import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loaderData = useLoaderData();
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
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        loaderData.map(item => <tr key={item._id}>
            <th>1</th>
            <td>{item.email}</td>
            <td>{item.createdAt}</td>
            <td>None</td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;