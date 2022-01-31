import React from "react";
import { useNavigate } from "react-router-dom"

function Home() {
   let navigate = useNavigate();
   return (
   <div>
      <h1>Welcome to Pave</h1>
      <h2>We are a community for doglovers who xxxxxxxxxx</h2> 
      <button
         onClick={() => {
            navigate("/login");
         }}
      >
         {" "}
         Log in
      </button>
      <button
         onClick={() => {
            navigate("/register");
         }}
      >
         {" "}
         Create a new account
      </button>
   </div> 
   );
}

export default Home