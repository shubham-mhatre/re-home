import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppUrl } from '../Constants';

/*const Header = (props) => {
    return (
        <div className="navbar">
            <img src="Pictures/l1.png" className="logo" />
            <ul>
                {!props.isLogin && <li><Link to={AppUrl.base}>HOME</Link></li>}              
                <li><Link to={"/services"}>SERVICES</Link></li>
                <li><Link to={"/about"}>ABOUT US</Link></li>
                <li><Link to={AppUrl.contactUs}>CONTACT US</Link></li>
                {props.isLogin && <li><Link to={"/logout"}>LOG OUT</Link></li>}
            </ul>
        </div>
    )
}
export default Header */


export default class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
        return (
            <div>
                <div className="navbar">
                <img src="Pictures/l1.png" className="logo" />
                    <ul>
                        {!this.props.isLogin && <li><Link to={AppUrl.base}>HOME</Link></li>}                                     
                        <li><Link to={"/services"}>SERVICES</Link></li>
                        <li><Link to={AppUrl.aboutUs}>ABOUT US</Link></li>
                        <li><Link to={AppUrl.contactUs}>CONTACT US</Link></li>
                        {this.props.isLogin && <li><Link to={AppUrl.Logout}>Log out</Link></li>}

                    </ul>
                </div>
            </div>
        )
    }
}
