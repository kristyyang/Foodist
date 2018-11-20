import React, { Component } from 'react';
import Project from './Project';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>You are welcome!</p>
        <Project />
      </div>
    );
  }
}

export default App;
