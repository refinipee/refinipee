import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
//----------React Bootstarp Dependencies----------------
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//-----------Application Components----------------------

import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import NavHead from './components/navbar/Navbar';
import Login from './components/login/Login';
import Sign from './components/sign/Sign';
import Live from './components/live/Live';
import Cat from './components/cat/Cat';
import Pod from './components/pod/Pod' 
import './App.css';

export default function App() {
  return (
    <div className="App">
     
      <Router>
        <NavHead />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/live" element={<Live />} />
          <Route path="/pod" element={<Pod />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Sign />} />
          <Route path="/authenticate" element={<authenticate />} />
          <Route path="*" element={<p>404 page not found!</p>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
