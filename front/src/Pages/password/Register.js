import React, { useRef, useState } from "react"; // useState hinzugefügt, useRef kann weg?
import { Form, Button, Card, CardGroup } from "react-bootstrap"
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
      <ul class="container">
         <li>
            <div class="form">
               <p class="header"> JOIN THE PA-VE COMMUNITY</p>
               <p class="log_reg">Get more features and priviliges by joining to the most helpful community</p>
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
                        <Form.Group class="button">
                           <Form.Label><br></br>
                           </Form.Label>
                           <Button class ="button"className="w-100" variant="default" style={{ color: "white", background: "#E95280"}}type="submit" onClick={signup} >REGISTER</Button>
                        </Form.Group>
                     </Form>              
            </div>
         </li>
         <li>
            <div>
               <img class="img" src="https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div>
         </li>
      </ul>
         <div className="w-100 text-center mt-2" > 
            Already have an account? <Link to='/Login'>Log in</Link>
         </div>
      </> 
   )
}

// better image: https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 //