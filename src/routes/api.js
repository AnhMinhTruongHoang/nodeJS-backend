const express = require("express");

const routerAPI = express.Router();

const {
  getUserApi,
  postCreateUserAPI,
} = require("../controllers/apiController");

routerAPI.get("/Users", getUserApi);

routerAPI.post("/Users", postCreateUserAPI);

module.exports = routerAPI;
