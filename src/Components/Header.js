import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar">
            <img src="Pictures/l1.png" className="logo" />
            <ul>
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"/services"}>SERVICES</Link></li>
                <li><Link to={"/about"}>ABOUT US</Link></li>
                <li><Link to={"/contact"}>CONTACT US</Link></li>
            </ul>
        </div>
    )
}

export default Header
