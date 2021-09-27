import React from "react";
import "./style.css";
import planet from "./planet.png";
import "animate.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  endAnimation(e) {
    e.stopPropagation();
    const planetElement = document.getElementById("planet");
    planetElement.classList.remove(
      "animate__animated",
      "animate__bounce",
      "animate__slower"
    );
  }

  repeatPlanetAnima() {
    const planetElement = document.getElementById("planet");
    planetElement.classList.add(
      "animate__animated",
      "animate__bounce",
      "animate__slower"
    );

    planetElement.addEventListener("animationend", this.endAnimation, {
      once: true,
    });
  }

  start() {
    const planetElement = document.getElementById("planet");
    console.log(planetElement);

    let i = 1;

    while (i != 0) {
      console.log(planetElement);
      this.repeatPlanetAnima();
    }
  }

  render() {
    return (
      <div id="wrapper">
        <img id="planet" src={planet} alt="planet"></img>
        <div id="centerFlex">
          <h1 id="signUp">Sign Up!</h1>
          <form>
            <div className="field">
              <label htmlFor="userName">Enter username</label>
              <input id="userName" name="userName" type="text"></input>
            </div>

            <div className="field">
              <label htmlFor="password">Enter Password</label>
              <input id="password" name="password" type="text"></input>
            </div>

            <div className="field">
              <label htmlFor="rePassword">Re-Enter Password</label>
              <input id="rePassword" name="rePassword" type="text"></input>
            </div>

            <div className="field">
              <label htmlFor="DOB">Enter Date of Birth</label>
              <input id="DOB" name="DOB" type="text"></input>
            </div>

            <button id="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
