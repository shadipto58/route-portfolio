/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Progress.css'

const Progress = ({ progress, title }) => {

    return (
        <div>
            <div className="skill-box">
                <span className="skill-title">{title}</span>
                <div className="skill-bar">
                    <span className="skill-per html" style={{ width: `${progress}%` }}>
                        <span className="percentage">{progress}%</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Progress;