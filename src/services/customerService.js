const Customers = require("../models/Customers");
const aqp = require("api-query-params");

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

const getCustomerList = async (limit, page, name, queryString) => {
  try {
    let result = null;
    if (limit && page) {
      let offset = (page - 1) * limit;

      const { filter, skip } = aqp(queryString);
      delete filter.page;
      console.log(">>check filter", filter);

      result = await Customers.find(filter).skip(offset).limit(limit).exec();
    } else {
      result = await Customers.find({});
    } //////////////////// xet so trang

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
