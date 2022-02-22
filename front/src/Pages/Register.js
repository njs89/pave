import React, { useRef, useState } from "react"; // useState hinzugefügt, useRef kann weg?
import { Form, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom";

export default function Register() {
   const [username, changeUsername] = useState() // useRef in useState verändert + changeX
   const [password, changePassword] = useState()
   const [passwordConfirmState, changePasswordConfirmState] = useState()
   const usernameChanged = (event) => {
      changeUsername(event.target.value)
   }
   const passwordChanged = (event) => {
      changePassword(event.target.value)
   }
   const passwordConfirmStateChanged = (event) => {
      changePasswordConfirmState(event.target.value)  
   } 
   const signup = (event) => {
      event.preventDefault()
      const params = {username, password}
      const options = {
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            username:username,
            plainTextPassword:password
         })
      }
      fetch("/api/register",options).then((response) =>{

         return response.json()
      }).then((json) => { //Kann weg?
         alert("yay")
      })
   }

   return (
      <>
         <Card>
            <Card.Body>
               <h2 className="text-center mb-4"> Sign up</h2>
               <Form>
                  <Form.Group id="email">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email"  value={username} onChange={usernameChanged} required />
                  </Form.Group>
                  <Form.Group id="password">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" value={password} onChange={passwordChanged} required />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                     <Form.Label>Password confirmation</Form.Label>
                     <Form.Control type="password" value={passwordConfirmState} onChange={passwordConfirmStateChanged} required />
                  </Form.Group>
                  <Button className="w-100" type="submit" onClick={signup} >Sign Up</Button>
               </Form>
            </Card.Body>
         </Card>
         <div className="w-100 text-center mt-2" > 
            Already have an account? <Link to='/Login'>Log in</Link>
         </div>
      </> 
   )
}