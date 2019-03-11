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
    count: 3
  })
  .then(res => {
    res.restaurants.forEach(restaurant => {
      new Restaurant({
        resId: restaurant.restaurant.R.res_id,
        name: restaurant.restaurant.name
      })
        .save()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    });
  })
  .catch(err => console.log(err));
