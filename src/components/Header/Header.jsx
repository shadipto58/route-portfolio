/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='sticky-top'>
            <nav className="nav-wraper">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <div className='mobile-icon' onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div id="navbar-text">
                    <div className={menuOpen ? "open" : ""}>
                        <NavLink className="nav-text" to="/">Home</NavLink>
                        <NavLink className="nav-text" to="/about">About</NavLink>
                        <NavLink className="nav-text" to="/exprience">Experience</NavLink>
                        <NavLink className="nav-text" to="/service">Service</NavLink>
                        <NavLink className="nav-text" to="/review">Review</NavLink>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;