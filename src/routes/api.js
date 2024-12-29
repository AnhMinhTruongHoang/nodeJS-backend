const express = require("express");

const routerAPI = express.Router();

const {
  getUserApi,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFile,
  postUploadMutilFile,
} = require("../controllers/apiController");

routerAPI.get("/Users", getUserApi);

routerAPI.post("/Users", postCreateUserAPI);

routerAPI.put("/Users", putUpdateUserAPI);

routerAPI.delete("/Users", deleteUserAPI);

routerAPI.post("/File", postUploadSingleFile);

routerAPI.post("/Files", postUploadMutilFile);

module.exports = routerAPI;
