import React from 'react';

const UsersList = ({ users, selectUser }) => {
    return (
        <div>
            Users
            {
                users.map(user => (
                    <li key={user.id}>
                        <h2>{user.first_name}, {user.last_name}</h2>
                        <p><b>Email: </b>{user.email}</p>
                        <p><b>Birthday: </b>{user.birthday}</p>
                        <button onClick={() => selectUser (user)}>Select</button>
                    </li>
                ))
            }
        </div>
    )
}

export default UsersList;