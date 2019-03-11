const keys = require('../../config/keys');
const Restaurant = require('../../models/Restaurant');
const zomato = require('zomato-api');
const client = zomato({
  userKey: keys.zomato.userKey
});

const DEFAULT_CITY_ID = 256; // Vancouver

client
  .search({
    entity_id: DEFAULT_CITY_ID,
    entity_type: 'city',
    count: 3
  })
  .then(res => {
    console.log(typeof res);
    res.restaurants.forEach(restaurant => {
      const newRestaurant = new Restaurant({
        resId: restaurant.restaurant.R.res_id,
        name: restaurant.restaurant.name
      });
      console.log(newRestaurant);
      newRestaurant
        .save()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    });
  })
  .catch(err => console.log(err));
