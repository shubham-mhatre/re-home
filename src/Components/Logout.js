import React, { Component }  from 'react'
import { useNavigate } from 'react-router-dom'
import { withRouter } from '../withRouter'
import { AppUrl } from '../Constants'
import { Link } from 'react-router-dom'

/*const Logout = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        props.onLogin(false);
        navigate("/");
    });
}*/

class Logout extends Component {
    constructor(props) {
       super(props)
     
       this.state = {
          
       }
     }
      
     componentDidMount(){
         this.props.onLogin(false);//set passed isLogin to false and redirect to home page.
         //this.props.navigate('/');
         document.body.classList.remove('dashboard-background');
         document.body.classList.add('home-background');
         
        // Disable back button functionality
        window.history.pushState(null, null, window.location.pathname);
        window.addEventListener('popstate', this.handleBackButtonPress);
     }
     
        handleBackButtonPress = (e) => {
            // Prevent the default behavior of the back button
            e.preventDefault();
            // Optionally, you can show an alert or perform any other action here
        };
        
        componentWillUnmount() {
            // Remove the event listener when the component is unmounted
            window.removeEventListener('popstate', this.handleBackButtonPress);
        }
            
     
   render() {
     return (
       <div>
         <main className="Homemid">
                <h1> ReHome </h1>
                <p> Your Student-to-Student Marketplace</p>
                <div>
                    <Link  to={AppUrl.login}><button type="button">LOGIN</button></Link>
                    <Link to={AppUrl.signUp}><button type="button">SIGN UP</button></Link>
                    
                </div>
             
            </main>
         
 
       </div>
     )
   }
 } 

 export default withRouter(Logout);