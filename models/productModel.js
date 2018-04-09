/**
 * @Model productModel.js
 *
 * Contains a Mongoose MongoDB model for Products
 */
let mongoose = require('mongoose');
let unique   = require('mongoose-unique-validator');
let Schema   = mongoose.Schema;

let productModel = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required!'],
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Description is required!']
  },
  price: {
    type: Number,
    min: 0,
    required: [true, 'Price is required!']
  },
  image: {
    type: String,
    required: [true, 'Image is required!'],
    unique: true
  },
});

productModel.plugin(unique);

module.exports = mongoose.model('Product', productModel);
