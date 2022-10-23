import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navBar">
            <ul>
                <NavLink to='/'>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/contact'>
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;