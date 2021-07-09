import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/cart">Cart</NavLink>
            <NavLink exact to="/account">Account</NavLink>
        </nav>
    )
}
export default Navbar;