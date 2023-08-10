/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Users from '../Users/Users';
import './Service.css'


const Service = () => {
    const users = useLoaderData()
    console.log(users.length);
    return (
        <div className='container'>
            <h2>This is service page</h2>

            <div className='oll'>
                <div className="row row-cols-1 row-cols-md-3 ">
                    <div className="col">
                        <div className="card">
                            <img src="./images/html5.svg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">PSD to HTML5</h5>
                                <p className="card-text">I will convert your PSD to HTML5 with Latest Bootstrap or Tailwind. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="./images/html5.svg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">PSD to HTML5</h5>
                                <p className="card-text">I will convert your PSD to HTML5 with Latest Bootstrap or Tailwind. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="./images/html5.svg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">PSD to HTML5</h5>
                                <p className="card-text">I will convert your PSD to HTML5 with Latest Bootstrap or Tailwind. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Service;