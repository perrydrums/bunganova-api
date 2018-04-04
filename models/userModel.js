/**
 * @Model userModel.js
 *
 * Contains a Mongoose MongoDB model for Users
 */
let mongoose = require('mongoose');
let unique   = require('mongoose-unique-validator');
let Schema   = mongoose.Schema;

let userModel = new Schema({
  username: { type: String, required: [true, 'Username is required!'], lowercase: true, unique: true },
  password: { type: String, required: [true, 'Password is required!'] },
  fullName: { type: String, required: [true, 'FullName is required!'] },
  email:    { type: String, required: [true, 'Email is required!'], unique: true },
});

userModel.plugin(unique);

module.exports = mongoose.model('User', userModel);
