import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from '../../withRouter';
import { useParams } from 'react-router-dom';
import StudentService from '../../Services/StudentService';
import { role } from "../../Constants";


function StudentEditprofile(){
    document.body.classList.remove('home-background');
    document.body.classList.add('dashboard-background');
    
    const { id } = useParams();
    const [userDetails, setUserDetails] = useState({
        mavid:"",
        uname:"",
        phoneno:"",
        address:"",
        email:"",
        passwrd:"",
    });
    
    useEffect(() => {
        StudentService.updateStudentProfile(id)
                .then((response) => {
                    console.log(response);
                    const userData = response.data.phpresult[0];
                    setUserDetails({
                            mavid: userData.mavid,
                            uname: userData.uname,
                            phoneno: userData.phoneno,
                            address: userData.address,
                            email:userData.email,
                            passwrd:userData.passwrd
                    
                    });
                    console.log("userDetails", userData);
                })
                .catch((error) => {
                    alert("error " + error);
                });
        }, [id]); 


        const handleChange = (event) => {
            const { name, value } = event.target;
            setUserDetails((prevProfileDetails) => ({
                ...prevProfileDetails,
                [name]: value,
            }));
        };
        const  handleSubmit=(e)=>{
            e.preventDefault();
            const {  mavid, email, uname, phoneno,address,passwrd } = userDetails;
            console.log(userDetails);
            
            
            const respData = {
                "mavid":mavid,
                "email":email,
                "uname":uname,
                "phoneno":phoneno,
                "address": address,     
                "passwrd":passwrd,                    
                "role": role.StudentProfilechange,
                 "id":id
            };
    
            StudentService.changedetailsofStudentProfile(respData)
                .then((response)=>{
                    console.log(response);
                    alert(response.data);
                    
                }).catch((error) => {
                    alert("error " + error);
                });  
  }
  return (
    <div className="container">
            <section className="card">
                <form onSubmit={handleSubmit}>
                    <br />
                    <table className="form-group">
                        <tbody>
                            <tr>
                                <th><label htmlFor="mavid"><b>Student ID</b></label></th>
                                <td>
                                    <input
                                        type="text"
                                        name="mavid"
                                        id="mavid"
                                        placeholder="Enter your MavId"
                                        value={userDetails.mavid}
                                        onChange={handleChange}
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
                                        value={userDetails.uname}
                                        onChange={handleChange}
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
                                        value={userDetails.phoneno}
                                        onChange={handleChange}
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
                                        value={userDetails.address}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="email"><b>Email</b></label></th>
                                <td>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter email"
                                        value={userDetails.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="passwrd"><b>Password</b></label></th>
                                <td>
                                    <input
                                        type="password"
                                        name="passwrd"
                                        id="passwrd"
                                        placeholder="Enter Password"
                                        value={userDetails.passwrd}
                                        onChange={handleChange}
                                        required
                                    />
                                    <br />
                                </td>
                            </tr>
                            <tr>
                                        <td colSpan="2">
                                            <div className="button-container center-button">
                                                <button type="submit"className="button">save</button>
                                            </div>
                                            <br />
                                        </td>
                                    </tr>
                        </tbody>
                    </table>
                    </form>
                <br />
                <div className="button-container">
                    <Link to={`/StudentDashboard/${id}`} className="dashbutton">Back to Dashboard</Link>
                </div>

                
            </section>
        </div>
  )
}

export default StudentEditprofile
