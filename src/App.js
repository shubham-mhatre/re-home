import React, { Component } from 'react';

import { AppUrl } from './Constants';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Services from './Components/Services';
import Login from './Components/Login';
import Aboutus from './Components/Aboutus';
import ContactUs from './Components/ContactUs/ContactUs';
import StudentDashboard from './Components/Student/StudentDashboard';
import StudentEditprofile from './Components/Student/StudentEditprofile';
import StudentBookmarkItem from './Components/Student/StudentBookmarkItem';
import StudentSearchItem from './Components/Student/StudentSearchItem';
import Forgetpassword from './Components/Forgetpassword';
import SignUp from './Components/SignUp';
import { useState } from 'react';
import Logout from './Components/Logout';
import AdminDashboard from './Components/Admin/AdminDashboard';
import StudentAddItem from './Components/Student/StudentAddItem';
import StudentItemDetail from './Components/Student/StudentItemDetail';
import StudentEditItemDetails from './Components/Student/StudentEditItemDetails';
import StudentSolditems from './Components/Student/StudentSolditems';
import AdminContactus from './Components/Admin/AdminContactus';
import AdminApproveItems from './Components/Admin/AdminApproveItems';


class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       isLogin:false,
    }
    this.handleIsLogin =this.handleIsLogin.bind();
  }

  componentDidMount() {
    // Retrieve the state from localStorage on component mount
    const storedState = localStorage.getItem('myComponentState');
    if (storedState) {
      this.setState(JSON.parse(storedState));
    }
  }

  componentDidUpdate() {
    // Save the state to localStorage whenever it is updated
    localStorage.setItem('myComponentState', JSON.stringify(this.state));
  }

  
  handleIsLogin=(isLoginFromLoginComponent)=>{//trigger back handling : true return
    this.setState({isLogin:isLoginFromLoginComponent}) //true
  }
  
  render(){
  return (
    <>
      <Router>
        <Header isLogin={this.state.isLogin}/>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path={AppUrl.login} element={<Login onLogin={this.handleIsLogin}/>}></Route>
          <Route path={AppUrl.Logout} element={<Logout onLogin={this.handleIsLogin}/>}></Route>
         
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path={AppUrl.contactUs} element={<ContactUs/>}></Route>
          <Route path="/StudentDashboard/:id" element={<StudentDashboard />}></Route>
          <Route path="/studenteditprofile/:id" element={<StudentEditprofile />}></Route>
          <Route path="/studentbookmarkitem/:id" element={<StudentBookmarkItem />}></Route>
          <Route path="/studentsearchitem/:id" element={<StudentSearchItem />}></Route>
          <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
          <Route path={AppUrl.signUp} element={<SignUp/>}></Route>
          <Route path="/studentadditem/:id" element={<StudentAddItem />}></Route>
          <Route path="/studentitemdetail/:id/:itemid" element={<StudentItemDetail />}></Route>
          <Route path="/studentedititemdetail/:id/:itemid" element={<StudentEditItemDetails />}></Route>
          <Route path="/studentsolditems/:id" element={<StudentSolditems />}></Route>


          <Route path="/admindashboard" element={<AdminDashboard />}></Route>
          <Route path="/admincontactus" element={<AdminContactus />}></Route>
          <Route path="/approveitems" element={<AdminApproveItems />}></Route>
       
        </Routes>
      </Router>

    </>
  );
}

}
export default App;
