import React from "react";
import { useParams } from "react-router-dom"

function Profile(){
   let { username } = useParams()
   return (
   <h1>{username} welcome to your profile!</h1>
   );
}

export default Profile
