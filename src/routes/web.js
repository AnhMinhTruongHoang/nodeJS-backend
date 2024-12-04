const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getABC,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");

//khai báo route
router.get("/", getHomePage);

router.get("/abc", getABC);

router.post("/create-user", postCreateUser);

router.get("/create", getCreatePage);

module.exports = router;
