import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '../Users.css'

const UserDetails = () => {

    const user = useLoaderData()
    console.log(user);

    const { name, username, phone, email, address, company, id } = user;

    return (
        <div className='container'>
            <h3 className='text-start pt-3'>{name}'s Details: </h3>
            <div className="py-3 d-flex justify-content-center">
                <div className="user-details text-start">
                    <h4>Name: {name}</h4>
                    <p className='fs-6 fw-semibold'>Username: <span className='text-decoration-underline username'>{username}</span></p>
                    <p className='fs-6 fw-semibold'>ID: 59125492{id}</p>
                    <p className='fs-6 fw-semibold'>Phone: {phone}</p>
                    <p className='fs-6 fw-semibold'>Email: {email}</p>
                    <p className='fs-6 fw-semibold'>Address: {address.city}</p>
                    <p className='fs-6 fw-semibold'>Company: {company.name}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;