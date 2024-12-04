const connection = require("../config/dataBase");

const getHomePage = (req, res) => {
  return res.render("homePage.ejs");
};

const getABC = (req, res) => {
  res.send("check abc");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );

  console.log(">>>>", results);
  res.send("Created user success !");
};

module.exports = {
  getHomePage,
  getABC,
  postCreateUser,
  getCreatePage,
};
