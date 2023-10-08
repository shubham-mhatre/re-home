import React, { useState } from 'react'
import Loginservice from '../Services/LoginService';
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {
    document.body.classList.remove('dashboard-background');
    document.body.classList.add('home-background');

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [isLogin,setLogin]=useState(false);
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData={
            'email':email,
            'password':password
        }

        const response=Loginservice.login(formData);
        setLogin(response.isLoggedin);
        console.log('isLogin'+isLogin);

        if(response.isLoggedin){
            navigate('/studentdashboard');
        }
        
    }

    return (
        <div className="Homemid">
            <section className="card">
                <h2 className="loginheader">Login</h2>
                <br/>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required 
                        value={email} onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required 
                        value={password} onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <br />
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Login" />
                    </div>
                </form>
                <br />
                <div className="button-container">
                    <Link to={"/signup"} className="dashbutton">Register</Link>
                    <Link to={"/forgetpassword"} className="dashbutton">Forgot Password</Link>
                </div>

            </section>
        </div>


    )
}

export default Login
