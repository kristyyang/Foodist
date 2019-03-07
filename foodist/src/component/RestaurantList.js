import React, { Component } from 'react'
import Restaurant from "./Restaurant";
import RestaurantSearch from './RestaurantSearch';

export default class RestaurantList extends Component {
  render() {
    return (
      <React.Fragment>
          <h1>Hello from lists</h1>
          <RestaurantSearch />
          <Restaurant />
      </React.Fragment>
    )
  }
}
