import React from "react"
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Errorpage from "./Pages/Errorpage";
import Register from "./Pages/password/Register";
import Login from "./Pages/password/Login";
import Change from "./Pages/password/Change";
import Reset from "./Pages/password/Reset";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "120vh"}}
    >
      <div className="w-100" style={{ maxWidth: "80vh"}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/change" element={<Change />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </Router>
      </div>
  </Container>
  );
}

export default App;
