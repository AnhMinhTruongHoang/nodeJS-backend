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

module.exports = {
  createCustomerService,
};
