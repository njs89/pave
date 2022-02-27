import { useRef, useState} from "react"
import { Form, Button, Card, CardGroup } from "react-bootstrap"
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
   <>
   <ul class="container">
      <li>
         <div class="form">
            <p class="header"> SIGN IN</p>
            <p class="log_reg">More than 15.000 dogs are waiting for your companionship!</p>
               <Form>
                  <Form.Group id="email">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" value={email} onChange={emailChanged} required /> 
                  </Form.Group>
                  <Form.Group id="password">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" value={password} onChange={passwordChanged} required />
                  </Form.Group>                     
                     <Form.Group class="button">
                        <Form.Label><br></br>
                        </Form.Label>
                        <Button class ="button"className="w-100" variant="default" style={{ color: "white", background: "#E95280"}} type="submit" onClick={login} >SIGN IN</Button>
                     </Form.Group>
                  </Form>              
                  <Form.Group id="forgot">
                     <Form.Label><br></br>
                     </Form.Label>
                        <Link to='/Register'>Forgot password?</Link>
                  </Form.Group>                     

         </div>
      </li>
      <li>
         <div>
            <img class="img" src="https://images.pexels.com/photos/7210704/pexels-photo-7210704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Golden Retriever waiting to go inside."/>
         </div>
      </li>
   </ul>
      <div className="w-100 text-center mt-2" > 
         Need an account? <Link to='/Register'>Sign up here</Link>
      </div>
   </> 
)
}
