import React from "react";
import { NavLink } from 'react-router-dom'
import { BsFillHouseDoorFill, BsBagFill, BsPersonFill } from 'react-icons/bs'

const Navbar: React.FC = () => {
    return (
        <nav>
            <div>
            <NavLink exact to="/" className='nav__home'><BsFillHouseDoorFill /></NavLink>
            </div>
            
            <NavLink exact to="/cart" className='nav__cart'><BsBagFill /><div className='cart_notif'>1</div></NavLink>
            <NavLink exact to="/account" className='nav__account'><BsPersonFill /></NavLink>
        </nav>
    )
}
export default Navbar;