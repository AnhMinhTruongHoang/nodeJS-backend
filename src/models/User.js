const mongoose = require("mongoose");

//// create db
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
