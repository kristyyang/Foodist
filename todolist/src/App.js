import React, { Component } from 'react';
import Restaurant from './Restaurant';


class App extends Component {
  state ={
    restaurants:[
      { name:"ThaiOne", address:"west 41st avenue" ,start_date:"7" ,end_date:"17"},
      {name :"KFC", address: "East 4th avenue", start_date: "5", end_date:"23"}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>You are welcome!</p>
        <Restaurant restaurants ={this.state.restaurants}/>
      </div>
    );
  }
}

export default App;
