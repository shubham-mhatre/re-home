import React,{useState} from 'react'
import { Link } from 'react-router-dom';


const StudentEditprofile = () => {
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');
    
    const [mavId, setMavId] = useState('6829897050');
    const [name, setName] = useState('Harold XYZ Godwinson');
    const [phone, setPhone] = useState('6829897050');
    const [address, setAddress] = useState('1006 Greek Row');
    const [email, setEmail] = useState('Harold@gmail.com');
    const [password, setPassword] = useState('*******');
  return (
    <div className="container">
            <section className="card">
                <form action="signupconfirmation.html" method="post">
                    <br />
                    <table className="form-group">
                        <tbody>
                            <tr>
                                <th><label htmlFor="mavId"><b>Student ID</b></label></th>
                                <td>
                                    <input
                                        type="text"
                                        name="mavId"
                                        id="mavId"
                                        placeholder="Enter your MavId"
                                        value={mavId}
                                        onChange={(e) => setMavId(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="uname"><b>Name</b></label></th>
                                <td>
                                    <input
                                        type="text"
                                        name="uname"
                                        id="uname"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="phoneno"><b>Phone number</b></label></th>
                                <td>
                                    <input
                                        type="text"
                                        name="phoneno"
                                        id="phoneno"
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="address"><b>Address</b></label></th>
                                <td>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder="Enter your current address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="username"><b>Email</b></label></th>
                                <td>
                                    <input
                                        type="email"
                                        name="username"
                                        id="username"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="password"><b>Password</b></label></th>
                                <td>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <br />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <br />
                <div className="button-container">
                    <a href="" className="dashbutton">Save</a>
                    <Link to={"/studentdashboard"} className="dashbutton">Back to Dashboard</Link>
                </div>
            </section>
        </div>
  )
}

export default StudentEditprofile
