import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Services from './Components/Services';
import Login from './Components/Login';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';

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
        </Routes>
      </Router>

    </>
  );
}

export default App;
