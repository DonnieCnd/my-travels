import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          destination="Tokyo"
          country="Japan"
          photo="https://www.rennes.aeroport.fr/sites/rennes.aeroport.fr/files/styles/airport_pop_up/public/gallery/destination/vol-rennes-tokyo-via-paris-cdg-amsterdam-air-france.jpg?itok=XLeAd92r"
          distance="9706 km"
        />
        <Travel
          destination="New York"
          country="United States of America"
          photo="https://static.lexpress.fr/medias_11191/w_1887,h_1056,c_crop,x_0,y_443/w_640,h_360,c_fill,g_north/v1477034513/manhattan-4_5729899.jpg"
          distance="5834 km"
        />
      </div>
    );
  }
}

export default App;