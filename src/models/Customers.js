const mongoose = require("mongoose");

const CustomersSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    address: String,
    phone: Number,
    email: { type: String, require: true },
    image: String,
    description: String,
  },
  { timestamps: true }
);

const Customers = mongoose.model("customer", CustomersSchema);

module.exports = Customers;
