const CronJob = require('cron').CronJob;
const keys = require('../../config/keys');
const mongoose = require('mongoose');
const Restaurant = require('../../models/Restaurant');
const zomato = require('zomato-api');
const client = zomato({
  userKey: keys.zomato.userKey
});

const DEFAULT_CITY_ID = 256; // Vancouver
const NUM_OF_ENTRIES = 10;

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected! Ready to import data.');
    console.log('Start job: Import data from Zomato');
    const job = new CronJob('0 0 */1 * * *', importData);
    job.start();
  })
  .catch(err => console.log(err));

const importData = () => {
  client
    .search({
      entity_id: DEFAULT_CITY_ID,
      entity_type: 'city',
      count: NUM_OF_ENTRIES
    })
    .then(res => {
      res.restaurants.forEach(item => {
        let restaurant = {
          resId: item.restaurant.R.res_id,
          name: item.restaurant.name,
          address: item.restaurant.location.address,
          longitude: item.restaurant.location.longitude,
          latitude: item.restaurant.location.latitude,
          imageUrl: item.restaurant.featured_image
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
      console.log(`Finish data import at ${Date.now()}`);
    })
    .catch(err => console.log(err));
};
