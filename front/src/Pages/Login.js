import { useRef, useState} from "react"
import { Form, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const [email, changeEmail] = useState()
   const [password, changePassword]  = useState() 

   const emailChanged = (event) => {
      
      changeEmail(event.target.value)
   }

   const passwordChanged = (event) => {
      
      changePassword(event.target.value)
   } 

   let navigate = useNavigate();
   const login = (event) => {
      event.preventDefault()
      const options = {
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
            username:email,
            password:password
         })
      }
      fetch("/api/login",options).then((response) =>{

         return response.json()

      }).then((json) => {
         const {status, data, error} = json;
         if (status === 'ok') {
           localStorage.setItem("token", data); 
           navigate("/profile/"+email);
         }  else {
            return error;
         }
         //Wenn Status = ok => 
         //1. jwt-Token aus data-Variablen speichern
         
         //2. Nutzer zu Profilseite navigieren
         
         //Ansonsten (Status nicht ok) => Fehlermeldung aus error-Variablen anzeigen 
      })
   }

   return (
      <div>
         <Card>
            <Card.Body>
               <h2 className="text-center mb-4"> Log in</h2>
               <Form>
                  <Form.Group id="email">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" value={email} onChange={emailChanged} required /> 
                  </Form.Group>
                  <Form.Group id="password">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" value={password} onChange={passwordChanged} required />
                  </Form.Group>
                  <Button className="w-100" type="submit" onClick={login} >Log in</Button>
               </Form>
            </Card.Body>
         </Card>
         <div className="w-100 text-center mt-2" > 
            Need an account? <Link to='/Register'>Sign up here</Link>
         </div>
      </div> 
   )
}