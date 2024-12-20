const express = require("express");

const routerAPI = express.Router();

const {
  getUserApi,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
} = require("../controllers/apiController");

routerAPI.get("/Users", getUserApi);

routerAPI.post("/Users", postCreateUserAPI);

routerAPI.put("/Users", putUpdateUserAPI);

routerAPI.delete("/Users", deleteUserAPI);

module.exports = routerAPI;
