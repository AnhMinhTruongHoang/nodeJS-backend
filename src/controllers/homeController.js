const connection = require("../config/dataBase");
const {
  getAllUsers,
  getUserById,
  updateUserById,
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
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;

  let user = await getUserById(userId);

  res.render("update.ejs", { userUpdate: user });
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );

  res.send("Created user success !");
};

/////////////// update logic

const postUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;

  await updateUserById(email, city, name, userId);

  res.send("Updated user success !");
};

module.exports = {
  getHomePage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
};
