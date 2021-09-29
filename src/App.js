import React from "react";
import "./style.css";
import planet from "./planet.png";
import "animate.css";

class App extends React.Component {
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

            <button
              id="submit"
              className="animate__animated animate__headShake animate__delay-5s"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
