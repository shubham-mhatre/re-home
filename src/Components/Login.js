import LoginService from '../Services/LoginService';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { withRouter } from '../withRouter';

class login extends Component {
    
    constructor(props) {
        super(props)
      
        this.state = {
           email:"",
           passwrd:"",
           role:"",
           id:"",
           isLogin:false
        }
        document.body.classList.remove('dashboard-background');
         document.body.classList.add('home-background');
      }
  
      LoginBtnClick =(e)=>{
        
          e.preventDefault();
          const {email,passwrd}=this.state;
        //   let isValid=this.validateLoginFormData(email,password);
        const reqData={
            email:email,
            passwrd:passwrd
        };
        LoginService.login(reqData)
        .then((response)=>{
            console.log(response.data);
            if(response.data.isLogin =="false"){
                this.setState({role:"",isLogin:false},
                ()=>this.props.onLogin(this.state.isLogin));
                alert('Invalid user credentials');            
            }else {
                console.log(response.data);
                //success login
                this.setState({role:response.data.role,isLogin:true, id:response.data.id },
                    ()=>this.props.onLogin(this.state.isLogin)//trigger back
                );
              
            }
        });
      }
  
   
      componentDidUpdate(prevProps, prevState) {
          // Check if the user is logged in and then redirect
          
          if (this.state.isLogin && !prevState.isLogin) {
            if(this.state.role === "Student"){
                this.props.navigate(`/studentdashboard/${this.state.id}`);
                
            }else if(this.state.role === "Admin"){
                this.props.navigate(`/AdminDashboard`);
            }else{alert("invalid role")
                console.log(this.state.role);
                this.props.navigate('/');
            }
        }
        }
    render() {
    return (
        <div className="Homemid">
            <section className="card">
                <h2 className="loginheader">Login</h2>
                <br/>
                <form onSubmit={this.LoginBtnClick}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"   name="email" placeholder="Enter your email" required 
                        value={this.state.email} onChange={e=> this.setState({email:e.target.value})}/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="passwrd">Password</label>
                        <input type="password" id="passwrd" name="passwrd" placeholder="Enter your password" required 
                        value={this.state.passwrd} 
                        onChange={e=> this.setState({passwrd:e.target.value})} />
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

}
export default withRouter(login);

