import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Weather App Created by Nikunj Nakiya
      </div>
    </React.Fragment>
  );
}

export default App;
