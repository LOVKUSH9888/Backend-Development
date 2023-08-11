import React from 'react';
import './UserListComponent.css'

function UserListComponent({ users }) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.username}, {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListComponent;
