import React from 'react'

const SignUp = () => {
    document.body.classList.add('home-background');
    return (
        <div style={{style:'50%'}}>
            <div className="Homemid">
                <section className="card">
                    <form action="signupconfirmation.html" method="post"><br />
                        <h2>User Registration Form</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <th><label htmlFor="mavid"><b>Student ID</b></label></th>
                                    <td>
                                        <input type="text" name="mavid" id="mavid" placeholder="Enter your UTA MavId" required />
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="uname"><b>Name</b></label></th>
                                    <td>
                                        <input type="text" name="uname" id="uname" placeholder="Enter your name" required />
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="phoneno"><b>Phone number</b></label></th>
                                    <td>
                                        <input type="text" name="phoneno" id="phoneno" placeholder="Enter your phone number" required />
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="address"><b>Address</b></label></th>
                                    <td>
                                        <input type="text" name="address" id="address" placeholder="Enter Address" />
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="username"><b>Email</b></label></th>
                                    <td>
                                        <input type="email" name="username" id="username" placeholder="Enter email" required />
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="password"><b>Password</b></label></th>
                                    <td>
                                        <input type="password" name="password" id="password" placeholder="Enter Password" required />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <div className="form-group">
                                            <input type="submit" value="SignUp" /><br />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SignUp
