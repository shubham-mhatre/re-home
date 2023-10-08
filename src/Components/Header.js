import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="navbar">
            <img src="Pictures/l1.png" className="logo" />
            <ul>
                {!props.isLogin && <li><Link to={"/"}>HOME</Link></li>}
                {props.isLogin && <li><Link to={"/studentdashboard"}>Dashboard</Link></li>}
                <li><Link to={"/services"}>SERVICES</Link></li>
                <li><Link to={"/about"}>ABOUT US</Link></li>
                <li><Link to={"/contact"}>CONTACT US</Link></li>
                {props.isLogin && <li><Link to={"/logout"}>Log out</Link></li>}
            </ul>
        </div>
    )
}

export default Header
