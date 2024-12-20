const User = require("../models/User");

const getUserApi = async (req, res) => {
  let results = await User.find({});

  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const postCreateUserAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  let user = await User.create({
    email: email,
    name: name,
    city: city,
  });

  return res.status(200).json({
    EC: 0,
    data: user,
  });
}; /////////// create logic

const putUpdateUserAPI = async (req, res) => {
  let { name, email, city, userId } = req.body;

  let user = await User.updateOne(
    { _id: userId },
    { name: name, email: email, city: city }
  );

  return res.status(200).json({
    EC: 0,
    data: user,
  });
}; /////////////// update logic

const deleteUserAPI = async (req, res) => {
  const id = req.body.userId;

  let results = await User.deleteOne({ _id: id });

  return res.status(200).json({
    EC: 0,
    data: results,
  });
}; /////////// delete action

module.exports = {
  getUserApi,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
};
