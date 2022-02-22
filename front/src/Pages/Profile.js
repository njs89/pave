import React from "react";
import {
   useNavigate,
   useParams,
   useLocation
} from "react-router-dom"

function Profile(){
   let navigate = useNavigate()
   const token = localStorage.getItem("token")
   //Wenn token keinen Wert enthält, also undefined oder leer ist, dann leite den Nutzer weiter zur login-Seite.
   if (token === undefined || null) { 
      navigate("/login");
   }
   //Funktioniert noch nicht!
   let { username } = useParams()
   return (
   <h1>{username} welcome to your profile!</h1>
   );
}

export default Profile
