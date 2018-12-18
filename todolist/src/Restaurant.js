import React from 'react';

// use function componnent, without state
const Restaurant = ({restaurants, deleteRes})=>{
        return (
            <div className="restaurant-list">
              {
                restaurants.map(restaurant => {
                  return restaurant.start_date > 5 ? (
                    <div className="restaurant" key={restaurant.id}>
                      <div>Name: { restaurant.name }</div>
                      {/* <div>Id: {restaurant.id}</div> */}
                      <div>Address: { restaurant.address }</div>
                      <div>start_date: { restaurant.start_date }</div>
                      <div>end_date: {restaurant.end_date }</div>
                      <button onClick={()=>{deleteRes(restaurant.id)}}>Delete Restaurant</button>
                    </div>
                  ) : null
                })
              }
            </div>
          );

}

export default Restaurant;
