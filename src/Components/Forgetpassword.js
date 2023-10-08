import React from 'react'
import { Link } from 'react-router-dom'

const Forgetpassword = () => {
    document.body.classList.remove('dashboard-background');
    document.body.classList.add('home-background');
  return (
    <div className="Homemid">
            <section className="card">
                <h2 style={{ textAlign: 'center' }}>Forgot Password?</h2>
                <h5 style={{ textAlign: 'center' }}>
                    Enter your email address. You will receive a verification email with instructions.
                </h5>
                <br />
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input type="email" id="username" placeholder="Enter your email" required />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Get Code" />
                    </div>
                </form>
                <br />
                <div className="button-container">
                    <a href="signup.html" className="dashbutton">Create a New Account? Signup</a>
                    <Link to={"/login"} className="dashbutton">Return to login</Link>
                </div>
            </section>
        </div>
  )
}

export default Forgetpassword
