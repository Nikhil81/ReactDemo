import React from 'react';

const UserGrid = ({userGridData}) => ( <table className="table">
<thead>
  <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Email</td>
      <td>Phone</td>
  </tr>
  </thead>
  <tbody>
    { userGridData.map((user,idx) => (
      <tr> 
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
      </tr> ))
  }
  </tbody>
</table>);

export default UserGrid;