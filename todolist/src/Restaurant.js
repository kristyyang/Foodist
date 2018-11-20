import React, { Component } from 'react';

class Restaurant extends Component{
    render(){
        const {restaurants} = this.props;
        const restaurantlist = restaurants.map(restaurant =>{
            return (
            <div className="restaurant" key ={restaurant.id}>
            <div>name: {restaurant.name}</div>
            <div>address: {restaurant.address}</div>
            <div>start_date: {restaurant.start_date}</div>
            <div>end_date: {restaurant.end_date}</div>
        </div>)
        })
        return(
            <div className="restaurant-list">
                {restaurantlist}
            </div>
        )

    }
}

export default Restaurant;
