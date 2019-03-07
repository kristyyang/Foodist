import React, { Component } from 'react';
import './App.css';
import {recipes} from './tempList';
import RestaurantList from "./component/RestaurantList";
import RestaurantDetails from "./component/RestaurantDetails";

class App extends Component {
  state = {
    recipes:[],
    url:"409e550e2f90d0e561637567809b5b1f", // NEED TO FIX BECAUSE URL
  };


async getRestaurant(){
  try{
    // Fetch the URL and return data from URL
    const data = await fetch(this.state.url);
    // Transfer data to Json
    const jsonData = await data.json();

    // Use JSON to get restaurant information
    this.setState({
      recipes: jsonData.recipes // NEED TO FIX BECAUSE URL
    })
  }catch(error){
    console.log(error);
  }
}

// componentDidMount(){
//   this.getRecipes()
// }
  render() {
    console.log(this.state.recipes);

    return (
      <React.Fragment>
        <RestaurantList />
          <RestaurantDetails />

        Hello from APP
      </React.Fragment>
    );
  }
}

export default App;
