const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");

//khai báo route
router.get("/", getHomePage);

router.get("/abc", getABC);

router.post("/create-user", postCreateUser);

router.post("/update-user/", postUpdateUser);

router.get("/create", getCreatePage);

router.get("/update/:id", getUpdatePage);

module.exports = router;
