const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  resId: {
    type: String,
    required: true
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

module.exports = Retaurant = mongoose.model('restaurants', RestaurantSchema);
