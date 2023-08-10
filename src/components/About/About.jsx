import React from 'react';
import './About.css'
import Progress from '../Progress/Progress';

const About = () => {
    return (
        <div id='about'>
            <div className='about-wraper container'>
                <div className='left-part'>
                    <h2>About Me</h2>
                    <p>I'm a passionate web developer dedicated to crafting digital experiences that leave a mark.My journey into the world of coding began with HTML, CSS, and JavaScript, and I've since expanded my toolkit to include updated technologies like Bootstrap, Tailwind, and ReactJS.I find immense joy in bringing ideas to life through code, and I'm constantly seeking ways to create user-friendly and visually appealing websites.</p>
                    {/* <a href="#">Learn More</a> */}
                </div>
                <div className='right-part'>
                    <h2>Skill</h2>
                    <Progress progress={95} title={'HTML'}></Progress>
                    <Progress progress={95} title={'CSS'}></Progress>
                    <Progress progress={90} title={'JAVASCRIPT'}></Progress>
                    <Progress progress={85} title={'REACT JS.'}></Progress>
                </div>
            </div>
        </div>
    );
};

export default About;