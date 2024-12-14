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
  let results = [];

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

  res.send("done !");
}; /////////// create logic

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;

  let user = await getUserById(userId);

  res.render("update.ejs", { userUpdate: user });
}; ////// get update page

const postUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;

  await updateUserById(email, city, name, userId);

  res.redirect("/");
}; /////////////// update logic

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;

  let user = await getUserById(userId);

  res.render("delete.ejs", { userUpdate: user });
}; ////////////// delete form

const postRemoveUser = async (req, res) => {
  let { userId } = req.body;

  await deleteUserById(userId);

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
