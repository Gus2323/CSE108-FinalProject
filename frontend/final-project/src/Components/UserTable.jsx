import React from 'react';
import { Table } from 'react-bootstrap';

const UserTable = ({ users }) => {
  const grouped = {
    Admins: users.filter(u => u.role === 'admin'),
    Staff: users.filter(u => u.role === 'staff'),
    Customers: users.filter(u => u.role === 'customer'),
  };

  return (
    <>
      {Object.entries(grouped).map(([role, group]) => (
        <div key={role} className="mb-4">
          <h4>{role}</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email (if applicable)</th>
              </tr>
            </thead>
            <tbody>
              {group.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email || '—'}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </>
  );
};

export default UserTable;
