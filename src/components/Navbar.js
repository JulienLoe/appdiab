import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navBar">
            <ul>
                <NavLink  to='/' end className={(nav)=>( nav.isActive ? "nav-active" : "")}>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/planets' className={(nav)=>( nav.isActive ? "nav-active" : "")}>
                    <li>Planets</li>
                    </NavLink>
                <NavLink to='/createPlanet' className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                    <li>Create</li>
                </NavLink>
                <NavLink to='/contact' className={(nav)=>( nav.isActive ? "nav-active" : "")}>
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;