/**
 * @Model usageModel.js
 *
 * Contains a Mongoose MongoDB model for Product Usages
 */
let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let usageModel = new Schema({
  user_id: {
    type: String,
    required: [true, 'User ID is required!'],
  },
  product_id: {
    type: String,
    required: [true, 'Product ID is required!'],
  },
  count: {
    type: Number,
    required: [true, 'Count is required!'],
  },
});

module.exports = mongoose.model('Usage', usageModel);
