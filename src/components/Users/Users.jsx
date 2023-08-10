/* eslint-disable no-unused-vars */
import React from 'react';


const Users = ({ user }) => {
    const { id, name, email, username } = user;

    return (
        <div>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{id}, {name}</h5>
                        <p className="card-text">E-mail: {email}</p>
                        <p className="card-text">This is a longer card with supporting.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;