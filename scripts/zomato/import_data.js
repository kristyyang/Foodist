const keys = require('../../config/keys');
const mongoose = require('mongoose');
const Restaurant = require('../../models/Restaurant');
const zomato = require('zomato-api');
const client = zomato({
  userKey: keys.zomato.userKey
});

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected! Ready to import data.'))
  .catch(error => console.log(error));

const DEFAULT_CITY_ID = 256; // Vancouver

client
  .search({
    entity_id: DEFAULT_CITY_ID,
    entity_type: 'city',
    count: 10
  })
  .then(res => {
    res.restaurants.forEach(item => {
      let restaurant = {
        resId: item.restaurant.R.res_id,
        name: item.restaurant.name,
        address: item.restaurant.location.address,
        longitude: item.restaurant.location.longitude,
        latitude: item.restaurant.location.latitude
      };
      Restaurant.findOneAndUpdate(
        {
          resId: restaurant.resId
        },
        restaurant,
        { upsert: true }
      )
        .then(res => console.log(res))
        .catch(err => console.log(err));
    });
  })
  .catch(err => console.log(err));
