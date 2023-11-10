import React ,{useEffect } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { AppUrl } from '../Constants'

const Home = () => {
    document.body.classList.remove('dashboard-background');
    document.body.classList.add('home-background');
    return (
        <div className=''>
            <div className="Homemid">
                <h1> ReHome </h1>
                <p> Your Student-to-Student Marketplace</p>
                <div>
                    <Link  to={AppUrl.login}><button type="button">LOGIN</button></Link>
                    <Link to={AppUrl.signUp}><button type="button">SIGN UP</button></Link>
                    
                </div>
             
            </div>
        </div>
    )
}

export default Home
