import React, { Component } from 'react';
import Restaurant from './Restaurant';
import AddRes from './AddRes';


class App extends Component {
  state ={
    restaurants:[
      { name:"ThaiOne", address:"west 41st avenue" ,start_date:"7" ,end_date:"17", id: 1},
      {name :"KFC", address: "East 4th avenue", start_date: "5", end_date:"23", id: 2}
    ]
  }
  addRes = (restaurant) =>{
    restaurant.id = Math.random();
    let restaurants =[...this.state.restaurants,restaurant];
    this.setState({
      restaurants: restaurants
    })

  }
  deleteRes=(id)=>{
    let restaurants = this.state.restaurants.filter(restaurant =>{
      return restaurant.id !== id
    });
    this.setState({
      restaurants : restaurants
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>You are welcome!</p>
        <Restaurant deleteRes = {this.deleteRes} restaurants ={this.state.restaurants}/>
        <AddRes addRes ={this.addRes}/>
      </div>
    );
  }
}

export default App;
