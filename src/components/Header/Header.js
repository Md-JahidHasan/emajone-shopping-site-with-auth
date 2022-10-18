import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../Contexts/UserContexts';
import './Header.css'
const Header = () => {
    const {user, logOut} =useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid? <button className='logout' onClick={logOut}>Log Out</button>:
                    <>
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                    </>
                }
            </div>
            <span>{user?.email}</span>
        </nav>
    );
};

export default Header;