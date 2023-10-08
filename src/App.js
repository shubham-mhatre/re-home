import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Services from './Components/Services';
import Login from './Components/Login';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
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

function App() {
  const[isLogin,setIsLogin]=useState(false);
  const[role,setRole]=useState('student');
  const handleIsLogin =(isLoginFromLoginComponent,rolefromLoginComponent)=>{
    setIsLogin(isLoginFromLoginComponent)
    setRole(rolefromLoginComponent)
  }
  return (
    <>
      <Router>
        <Header isLogin={isLogin} role={role}/>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/login" element={<Login onLogin={handleIsLogin}/>}></Route>
          <Route path="/logout" element={<Logout onLogin={handleIsLogin}/>}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/contact" element={<Contactus />}></Route>
          <Route path="/studentdashboard" element={<StudentDashboard />}></Route>
          <Route path="/studenteditprofile" element={<StudentEditprofile />}></Route>
          <Route path="/studentbookmarkitem" element={<StudentBookmarkItem />}></Route>
          <Route path="/studentsearchitem" element={<StudentSearchItem />}></Route>
          <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/admindashboard" element={<AdminDashboard />}></Route>
          <Route path="/studentadditem" element={<StudentAddItem />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
