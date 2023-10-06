import React from 'react'

const Login = () => {
    return (
        <div className="Homemid">
            <section className="card">
                <h2 className="loginheader">Login</h2>
                <br/>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input type="email" id="username" placeholder="Enter your email" required />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <br />
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Login" />
                    </div>
                </form>
                <br />
                <div className="button-container">
                    <a href="Role.html" className="dashbutton">Register</a>
                    <a href="forgotpass.html" className="dashbutton">Forgot Password</a>
                </div>

            </section>
        </div>


    )
}

export default Login
