import React from "react";
import { useNavigate } from "react-router-dom"
import '../App.css';
import playBuddy from "../images/playBuddy.png";
import walkBuddy from "../images/walkBuddy.png";
import talkBuddy from "../images/talkBuddy.png";
import vectorLeft from "../images/vectorLeft.png";
import vectorMiddle from "../images/vectorMiddle.png";
import vectorRight from "../images/vectorRight.png";

function Home() {
   let navigate = useNavigate();
   return (
   <div>
      {/*Buddy-Uebersicht*/}
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
   );
}

export default Home;
