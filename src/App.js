import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <video src="smoke.mp4" autoPlay muted></video>
        <h1>
          <span>L</span>
          <span>A</span>
          <span>M</span>
          <span>B</span>
          <span>D</span>
          <span>A</span>
        </h1>
      </div>
    );
  }
}

export default App;
