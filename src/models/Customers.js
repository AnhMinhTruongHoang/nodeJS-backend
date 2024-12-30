const mongoose = require("mongoose");

const CustomersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    phone: Number,
    email: { type: String, required: true },
    image: String,
    description: String,
  },
  { timestamps: true }
);

const Customers = mongoose.model("customer", CustomersSchema);

module.exports = Customers;
