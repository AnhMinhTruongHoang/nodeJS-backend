const connection = require("../config/dataBase");
const User = require("../models/User");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createNewUser,
} = require("../services/CRUD_service");

const getHomePage = async (req, res) => {
  let results = await User.find({});

  return res.render("homePage.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("check abc");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
}; ////////// get create page

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  await User.create({
    email: email,
    name: name,
    city: city,
  });

  res.redirect("/");
}; /////////// create logic

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;

  let user = await User.findById(userId).exec();

  res.render("update.ejs", { userUpdate: user });
}; ////// get update page

const postUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;

  await User.updateOne(
    { _id: userId },
    { name: name, email: email, city: city }
  );
  res.redirect("/");
}; /////////////// update logic

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;

  let user = await User.findById(userId).exec();

  res.render("delete.ejs", { userUpdate: user });
}; ////////////// delete form

const postRemoveUser = async (req, res) => {
  const id = req.body.userId;

  await User.deleteOne({ _id: id });

  res.redirect("/");
}; /////////// delete action

module.exports = {
  getHomePage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postRemoveUser,
};
