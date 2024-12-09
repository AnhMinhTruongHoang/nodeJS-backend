const connection = require("../config/dataBase");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createNewUser,
} = require("../services/CRUD_service");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();

  return res.render("homePage.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("check abc");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
}; ////////// get create page

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  await createNewUser(email, name, city);

  res.redirect("/");
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
