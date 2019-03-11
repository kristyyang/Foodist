const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  resId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  longitude: {
    type: String
  },
  latitude: {
    type: String
  },
  rating: {
    type: Number
  }
});

module.exports = Restaurant = mongoose.model('restaurants', RestaurantSchema);
