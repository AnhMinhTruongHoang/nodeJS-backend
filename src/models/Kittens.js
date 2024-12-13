const { default: mongoose } = require("mongoose");

//// create db
const kittySchema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model("Kitten", kittySchema);

module.exports = Kitten;
