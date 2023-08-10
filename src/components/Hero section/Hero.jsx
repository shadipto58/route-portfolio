/* eslint-disable no-unused-vars */
import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container hero-wraper">
                <div className='hero-left'>
                    <div className="hero-content">
                        <div className="hero-text">
                            <p>I'm</p>
                            <h1>Shadipto<span>Mojumder</span></h1>
                            <h2>Web Designer | Web Developer | Front End Developer</h2>
                        </div>
                        <div className="hero-btn">
                            <a href="#">Hire Me</a>
                            <a href="#">Contact Me</a>
                        </div>
                    </div>
                </div>
                <div className='hero-right'>
                    <div className='cool'><img src="./images/profile-pic-4.png" alt="" /></div>
                </div>
            </div>

        </div>
    );
};

export default Hero;