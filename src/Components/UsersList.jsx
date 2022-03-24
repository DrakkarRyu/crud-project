import React from 'react';
import './UserList.css'

const UsersList = ({ users, selectUser, deleteUser }) => {
    return (
        <div className='card'>
            {
                users?.map(user => (
                    <li key={user.id}>
                        <h2>{user.first_name}, {user.last_name}</h2>
                        <p><b>Email: </b>{user.email}</p>
                        <p><b>Birthday: </b>{user.birthday}</p>
                        <button onClick={() => selectUser(user)}>Edit</button>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))
            }
        </div>
    )
}

export default UsersList;