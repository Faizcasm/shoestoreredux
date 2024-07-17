import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the CSS for styling

const Navbar = () => {
    const navigaet = useNavigate()
    function navigates(){
        navigaet('/cart')
    }
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">ShoeStore</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Category</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
            </ul>
            <div className="navbar-cart" onClick={navigates}>
                
            </div>
        </nav>
    );
};

export default Navbar;
