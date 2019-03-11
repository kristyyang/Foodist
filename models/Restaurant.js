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
    type: Number
  },
  latitude: {
    type: Number
  },
  rating: {
    type: Number
  }
});

module.exports = Restaurant = mongoose.model('restaurants', RestaurantSchema);
