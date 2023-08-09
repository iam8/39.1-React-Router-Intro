import React from "react";
import {NavLink} from "react-router-dom";


function NavBar () {

    return (
        <nav className="NavBar">
            <NavLink exact to="/">
                Home
            </NavLink>

            <NavLink exact to="/twiglets">
                Twiglets
            </NavLink>

            <NavLink exact to="/cookies">
                Cookies
            </NavLink>

            <NavLink exact to="/bubbly-water">
                Bubbly Water
            </NavLink>
        </nav>
    )
}


export default NavBar;
