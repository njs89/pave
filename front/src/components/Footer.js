import React from 'react';
import Logo from '../assets/Logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer() {
  return (
    <div className="footer">
        <div className= "Info"></div>
          <img src={Logo} alt="Pave logo" />      
        <div className= "socialMedia">
          <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> 
        </div>
      <p> &copy; 2022 PAVE pa-ve.com All rights reserved.</p>
    </div>
  );
}

export default Footer
