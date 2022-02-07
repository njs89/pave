import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom";

export default function Register() {
   const username = useRef()
   const password = useRef()
   const passwordConfirmRef = useRef()
   const signup = (event) => {
      event.preventDefault()
      const params = { username, password}
      const options = {method: 'POST', body: JSON.stringify(params)}

      fetch('api/register', options).then( response => response.json()).then(data => {
         const {token} = data
      })
      //create request and send it to server//
      }

   return (
      <>
         <Card>
            <Card.Body>
               <h2 className="text-center mb-4"> Sign up</h2>
               <Form>
                  <Form.Group id="email">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" ref={username} required />
                  </Form.Group>
                  <Form.Group id="password">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" ref={password} required />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                     <Form.Label>Password confirmation</Form.Label>
                     <Form.Control type="password" ref={passwordConfirmRef} required />
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