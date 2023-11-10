import React, { Component } from 'react'
import SignupService from '../Services/SignupService';

export default class SignUp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       mavid:"",
       uname:"",  
       phoneno:"",
       address:"",
       passwrd:"",
       email: "", 
      }
    }
    isPhoneNumberValid = (number) => {
        const phoneNumberRegex = /^\d{10}$/;        
        return phoneNumberRegex.test(number);
      };
    
        isPasswordValid = (passwrd) => {
            console.log(passwrd);
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
        return passwordPattern.test(passwrd);
      };

      handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        
    };

    registerBtnClick=(e)=>{
        e.preventDefault();
        const { mavid,uname, phoneno, address,email, passwrd } = this.state;
        if (!this.isPhoneNumberValid(this.state.phoneno)) {
            alert( "Please enter a valid 10-digit phone number");        
            return;
        }
       if (!this.isPasswordValid(this.state.passwrd)) {
            alert( "Password must be at least 5 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character." );
            return;
        }
    
        /*const formData = new FormData();
        formData.append('mavid', this.state.mavid);
        formData.append('uname', this.state.uname);
        formData.append('phoneno', this.state.phoneno);
        formData.append('address', this.state.address);   
        formData.append('email', this.state.email);
        formData.append('passwrd', this.state.passwrd); 
        console.log("FormData Object:", formData);*/

        console.log(this.state);
            const respData = {
                "mavid": mavid,
                "phoneno": phoneno,
                "uname": uname,
                "address": address,
                "email":email,
                "passwrd":passwrd
            };
    

        SignupService.registerStudent(respData)
        .then((respose)=>{
            console.log(respose);
            alert(respose.data);
            this.setState({
                mavid: "",
                uname: "",
                phoneno: "",
                address: "",
                email: "",
                passwrd: ""
            });
        }).catch((error) => {
            alert("error " + error);
        });
    }



    render() {
    return (
            <div className="Homemid">
                <section className="card">
                      <form onSubmit={this.registerBtnClick}> <br />

                        <h2>User Registration Form</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <th><label htmlFor="mavid"><b>Student ID</b></label></th>
                                    <td>
                                        <input type="text" name="mavid" id="mavid" placeholder="Enter your UTA MavId" required
                                          value={this.state.mavid}
                                          onChange={this.handleInputChange}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="uname"><b>Name</b></label></th>
                                    <td>
                                        <input type="text" name="uname" id="uname" placeholder="Enter your name" required 
                                         value={this.state.uname}
                                         onChange={this.handleInputChange}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="phoneno"><b>Phone number</b></label></th>
                                    <td>
                                        <input type="text" name="phoneno" id="phoneno" placeholder="Enter your phone number" required
                                         value={this.state.phoneno}
                                         onChange={this.handleInputChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="address"><b>Address</b></label></th>
                                    <td>
                                        <input type="text" name="address" id="address" placeholder="Enter Address" 
                                         value={this.state.address}
                                         onChange={this.handleInputChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="email"><b>Email</b></label></th>
                                    <td>
                                        <input type="email" name="email" id="email" placeholder="Enter email" required
                                         value={this.state.email}
                                         onChange={this.handleInputChange}/> 
                                    </td>
                                </tr>
                                <tr>
                                    <th><label htmlFor="passwrd"><b>Password</b></label></th>
                                    <td>
                                        <input type="password" name="passwrd" id="passwrd" placeholder="Enter Password" required 
                                        value={this.state.passwrd}
                                        onChange={this.handleInputChange}
                                        />
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
    )
}

}