import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';
import './Users.css'

const Users = () => {

    const users = useLoaderData()
    console.log(users);

    return (
        <div className='container'>
            <h1>Total users {users.length}</h1>
            <div className="users py-3">
                {
                    users.map(user => <User
                        key={user.id}
                        user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;