import React from 'react';


// use function componnent, without state
const Restaurant = ({restaurants})=>{
        // const {restaurants} = props;
        // const restaurantlist = restaurants.map(restaurant =>{
        //     return (
        //     <div className="restaurant" key ={restaurant.id}>
        //     <div>name: {restaurant.name}</div>
        //     <div>address: {restaurant.address}</div>
        //     <div>start_date: {restaurant.start_date}</div>
        //     <div>end_date: {restaurant.end_date}</div>
        // </div>)
        // })

        // restaurants ={this.props}
        return (
            <div className="restaurant-list">
              {
                restaurants.map(restaurant => {
                  return restaurant.start_date > 5 ? (
                    <div className="restaurant" key={restaurant.id}>
                      <div>Name: { restaurant.name }</div>
                      <div>Address: { restaurant.address }</div>
                      <div>start_date: { restaurant.start_date }</div>
                      <div>end_date: {restaurant.end_date }</div>
                    </div>
                  ) : null
                })
              }
            </div>
          );

}

export default Restaurant;
