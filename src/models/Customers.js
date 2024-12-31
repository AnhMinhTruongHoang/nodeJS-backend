const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const CustomersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    phone: Number,
    email: { type: String, required: true },
    image: String,
    description: String,
  },
  {
    timestamps: true, ///////// update and create time
    // statics: {
    //   findByName(name) {
    //     return this.find({ name: new RegExp(name, "i") }); ///static method
    //   },
    // },
  }
);

CustomersSchema.plugin(mongoose_delete, { overrideMethods: "all" }); /// ko lay user deleted

const Customers = mongoose.model("customer", CustomersSchema);

module.exports = Customers;
