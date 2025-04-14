import React from 'react';
import {Link, NavLink} from "react-router";

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobile'>Mobile</NavLink>
                <NavLink to='/laptops'>Laptop</NavLink>


            </nav>

        </div>
    );
};

export default Header;
