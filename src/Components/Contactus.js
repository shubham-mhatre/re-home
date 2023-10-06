import React from 'react'

const Contactus = () => {
    return (
        <div className="container">
            <section className="card">
                <form action="" method="post"> <br />

                    <table className="form-group">
                        <thead>
                            <tr>
                                <th>
                                    <h2> Contact Us</h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><label htmlFor="aname"><b>User ID</b></label></th>
                                <td> <input type="text" name="" id="aname" placeholder="Enter your User ID" required /></td>
                            </tr>
                            <tr>
                                <th><label htmlFor="dname"><b>Name</b></label></th>
                                <td> <input type="text" name="" id="dname" placeholder="Enter your name " required /></td>
                            </tr>
                            <tr>
                                <th><label htmlFor="phoneno"><b>Phone number</b></label></th>
                                <td>
                                    <input type="text" name="" id="phoneno" placeholder="Enter your phone number" required />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="adesc"><b>Comments</b></label></th>
                                <td>
                                    <textarea rows="4" cols="60" id="adesc" placeholder="Enter your Comments"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="username"><b>Email</b></label></th>
                                <td><input type="email" name="" id="username" placeholder="Enter email" required /> </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <div className="form-group">
                                        <input type="submit" value="submit" />
                                    </div><br />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </form>
            </section>

            <div style={{ textAlign: 'center' }}>
                <h3 style={{ textAlign: 'center' }}>Reach out to:</h3>
                <p style={{ alignSelf: 'center' }}>Phone: (682)-286-9981<br />
                    Mail to us at: <a href="mailto:ReHome@gmail.com">ReHome@gmail.com</a></p><br /><br />
            </div>

        </div>
    )
}

export default Contactus
