import React from 'react';
import { Link } from 'react-router-dom';
import './Users.css';

const User = ({ user }) => {

    console.log(user);

    const { id } = user;

    return (
        <div>
            <div className="user">
                <h4>{user.name}</h4>
                <h6>Email: {user.email}</h6>
                <h6>Web: {user.website}</h6>
                <div className="pt-3 det">
                    <button className='btn btn-outline-dark'><Link to={`/user/${id}`}>User Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default User;