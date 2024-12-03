const connection = require("../config/dataBase");

const getHomePage = (req, res) => {
  return res.render("homePage.ejs");
};

const getABC = (req, res) => {
  res.send("check abc");
};

module.exports = {
  getHomePage,
  getABC,
};
