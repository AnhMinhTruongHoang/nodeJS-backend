const Customers = require("../models/Customers");

const createCustomerService = async (customerData) => {
  try {
    await Customers.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

/////////////////

const createListCustomerService = async (arr) => {
  try {
    let result = await Customers.insertMany(arr);
    return result;
  } catch (error) {
    console.log("error:", error);
    return null;
  }
};

/////////////////

const getCustomerList = async () => {
  try {
    let result = await Customers.find({});
    return result;
  } catch (error) {
    console.log("error:", error);
    return null;
  }
};

////////////////// update customer
const updateAnCustomerService = async (id, name, email, address) => {
  try {
    let result = await Customers.updateOne(
      { _id: id },
      { name, email, address }
    );
    return result;
  } catch (error) {
    console.log("error:", error);
    return null;
  }
}; ///////////

const deleteCustomerService = async (id) => {
  try {
    let result = await Customers.deleteById(id); /// soft delete

    return result;
  } catch (error) {
    console.log("error:", error);
    return null;
  }
};

module.exports = {
  createCustomerService,
  createListCustomerService,
  getCustomerList,
  updateAnCustomerService,
  deleteCustomerService,
};
