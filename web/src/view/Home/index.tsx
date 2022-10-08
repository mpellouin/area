import React from "react";
import './index.scss'
import Header from "../../components/Header";

const buttons = [
  {
      name: "HOME",
      path: "/",
      isButton: false
  },
  {
      name: "LOGIN",
      path: "/login",
      isButton: true
  }
]

function Home() {
  return (
    <div className="homepage">
      <Header buttons={buttons}/>
      <div className="firstPart">
        <img className="img1" src="Home_1.svg" alt="Home_1"></img>
        <div className="firstPartTexts">
          <div className="mainText">Come find a list of all<br />the services we give you</div>
          <div className="secondaryText">Instead of having everything on differents devices or <br />applications, find everything you need in one place.</div>
        </div>
      </div>
      <div className="secondPart">
        <div className="thirdText">Automate the process between your various<br />services</div>
        <div className="fourthText">Look how you can link multiple<br/>applications</div>
        <img className="img2" src="Home_2.svg" alt="Home_2" />
      </div>
      <div className="thirdPart">
        <img className="img3" src="Home_3.svg" alt="Home_3" />
        <div className="fifthText">Trigger the process<br />based on events</div>
      </div>
      {/* <div className="teamPart">
        <div className="teamTitle">TEAM</div>
        <div className="teamMembers">
          <div className="members">
            <div className="teamFrame"></div>
            <div className="teamFrame"></div>
            <div className="teamFrame"></div>
          </div>
          <div className="members">
            <div className="teamFrame"></div>
            <div className="teamFrame"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;