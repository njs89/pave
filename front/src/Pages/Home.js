import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Homeimg from  '../assets/homeimg4.jpg';
import playBuddy from "../assets/playBuddy.png";
import walkBuddy from "../assets/walkBuddy.png";
import talkBuddy from "../assets/talkBuddy.png";
import vectorLeft from "../assets/vectorLeft.png";
import vectorMiddle from "../assets/vectorMiddle.png";
import vectorRight from "../assets/vectorRight.png";
import "../styles/Home.css";
import "../styles/Footer.css";

function Home() {
   let navigate = useNavigate();
   return (
         <div>
            <div className="home">
               <div className="headerimage" style={{ backgroundImage: `url(${Homeimg})` }}>
                  <div class="bottom-left">
                  <h2>About us</h2>
                     <p>Does Laika ever feel lonely because you did not have the time to play? </p>
                     <p>Does Filu bark more because he is missing daily walks? </p>
                     <p>And did Otto destroyed your shoes because he is bored? </p>
                     <p>Then join now the biggest community for finding paw lovers!</p>
                     <Link to="/About" >
                     <button>Find out more</button>
                     </Link>
                  </div>
               </div>
            <div>
               {/*Buddy-Uebersicht*/}
               <div className="buddy"></div>
               <h1>Find your...</h1>
               <div className="buddyContainer">
                  <div className="buddyBox">
                     <h3>Play Buddy</h3>
                     <br></br>
                     <img className="buddyImageBox" src={playBuddy} alt="Dog with toy"/>
                     <br></br>
                     <button
                        className="btn btn-primary"
                        variant="default" 
                        style={{ color: "white", background: "#E95280", border: "#E95280"}}
                        onClick={() => {
                           navigate("/playBuddyInfo"); //Does not exist yet
                        }}
                     >
                        {" "}
                        Learn more
                     </button>
                  </div>
                  <div className="buddyBox">
                     <h3>Walk Buddy</h3>
                     <br></br>
                     <img class="buddyImageBox" src={walkBuddy} alt="Dog with boots"/>
                     <br></br>
                     <button
                        className="btn btn-primary"
                        variant="default" 
                        style={{ color: "white", background: "#E95280", border: "#E95280"}}
                        onClick={() => {
                           navigate("/walkBuddyInfo"); //Does not exist yet
                        }}
                     >
                        {" "}
                        Learn more
                     </button>
                  </div>
                  <div className="buddyBox">
                     <h3>Talk Buddy</h3>
                     <br></br>
                     <img className="buddyImageBox" src={talkBuddy} alt="Dog with phone"/>
                     <br></br>
                     <button
                        className="btn btn-primary"
                        variant="default" 
                        style={{ color: "white", background: "#E95280", border: "#E95280"}}
                        onClick={() => {
                           navigate("/talkBuddyInfo"); //Does not exist yet
                        }}
                     >
                        {" "}
                        Learn more
                     </button>
                  </div>
               </div>
               {/*Reviews*/}
               <h2>Reviews</h2>
               <br></br>
               <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elit, sed diam nonumy eirmod tempor invidunt ut labore</h3>
               {/*Review-Container*/}
               <div className="vectorContainer">
                  <div className="vectorBox">
                        <img className="vectorImageBox" src={vectorLeft} alt="Vector left"/>
                     <br></br>
                     <p>Anna<br></br><br></br>Lorem ipsum dolor sit amet, consetetur sadipscing elit, sed diam nonumy eirmod tempor invidunt ut labore</p>
                  </div>
                  <div className="vectorBox">
                     <img className="vectorImageBox" src={vectorMiddle} alt="Vector middle"/>
                     <br></br>
                     <p>Paul<br></br><br></br>Lorem ipsum dolor sit amet, consetetur sadipscing elit, sed diam nonumy eirmod tempor invidunt ut labore</p>
                  </div>
                  <div className="vectorBox">
                     <img className="vectorImageBox" src={vectorRight} alt="Vector right"/>
                     <br></br>
                     <p>John & Jules<br></br><br></br>Lorem ipsum dolor sit amet, consetetur sadipscing elit, sed diam nonumy eirmod tempor invidunt ut labore</p>
                  </div>
               </div>
               <button
                  className="btn btn-primary"
                  variant="default" 
                  style={{ color: "white", background: "#E95280", border: "#E95280"}}
                  onClick={() => {
                     navigate("/register");
                  }}
               >
                  {" "}
                  Join today
               </button>
            </div>
         </div>
      </div>
   );
}

export default Home;