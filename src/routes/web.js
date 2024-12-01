const express = require("express");
const router = express.Router();
const { getHomePage, getABC } = require("../controllers/homeController");

//khai báo route
router.get("/", getHomePage);

router.get("/abc", getABC);

module.exports = router;
