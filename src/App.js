import React from "react";
import "./style.css";

function App() {
  return (
    <div id="wrapper">
      <div id="centerFlex">
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
        </form>
      </div>
    </div>
  );
}

export default App;
