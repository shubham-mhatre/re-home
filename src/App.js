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

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/contact" element={<Contactus />}></Route>
          <Route path="/studentdashboard" element={<StudentDashboard />}></Route>
          <Route path="/studenteditprofile" element={<StudentEditprofile />}></Route>
          <Route path="/studentbookmarkitem" element={<StudentBookmarkItem />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
