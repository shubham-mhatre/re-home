import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppUrl } from '../Constants'
import ForgotpasswordService from '../Services/ForgotpasswordService'

export default class Forgetpassword extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
            email:"",
          }
          this.handleInputChange = this.handleInputChange.bind(this);          
        }
    
        handleInputChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value,
            });
        };
    
        forgetPassClick=(e)=>{
            e.preventDefault();
            const reqData={
                "email":this.state.email
            };
            ForgotpasswordService.requestForNewPassword(reqData)
            .then((resp)=>{
                console.log(JSON.stringify(resp));
                alert(resp.data.message);
                this.setState({email:''});//reset email id after success.
            }).catch((error)=>{
                alert(error);
            });
        }
        
        render() {   
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
                <form onSubmit={this.forgetPassClick}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"
                        placeholder="Enter your email" required                         
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        disabled={false} 
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Get Code" />
                    </div>
                </form>
                <br />
                <div className="button-container">
                   <Link to={AppUrl.signUp}><button type="button" 
                   className="dashbutton">Create a New Account? Signup</button></Link>
                    <Link to={"/login"} className="dashbutton">Return to login</Link>
                </div>
            </section>
        </div>
  )
}
}