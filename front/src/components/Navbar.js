import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {

  const [openLinks, setOpenLinks] = useState (false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
            <a href="/">
            <img src={Logo} alt="Pave logo" /></a>
            <div className="hiddenLinks">
            <Link to="/About"> About us </Link>
            <Link to="/"> Community </Link>
            <Link to="/"> Pricing </Link>
            <Link to="/"> Support </Link>
            <Link to="/Register"> Sign up </Link>
            <Link to="/Login"> Log in </Link>
        </div>
        </div>
        <div className="rightSide">
            <Link to="/About"> About us </Link>
            <Link to="/"> Community </Link>
            <Link to="/"> Pricing </Link>
            <Link to="/"> Support </Link>
            <Link to="/Register"> Sign up </Link>
            <Link to="/Login"> Log in </Link>
            <button onClick={toggleNavbar}>
              <ReorderIcon />
            </button>
        </div>
    </div>
  );
}

export default Navbar;