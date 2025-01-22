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
///////////////////////
const {
  postCreateCustomer,
  postCustomerList,
  getAllCustomer,
  putUpdateAnCustomer,
  deleteAnCustomer,
} = require("../controllers/customerController");

////////////////

const {
  postCreateProject,
  getAllProject,
  deleteAProject,
  updateAProject,
} = require("../controllers/projectController");

//////////////////////////

routerAPI.get("/Users", getUserApi);

routerAPI.post("/Users", postCreateUserAPI);

routerAPI.put("/Users", putUpdateUserAPI);

routerAPI.delete("/Users", deleteUserAPI);

routerAPI.post("/File", postUploadSingleFile);

routerAPI.post("/Files", postUploadMutilFile);

routerAPI.post("/Customers-list", postCustomerList);

routerAPI.post("/Customers", postCreateCustomer);

routerAPI.get("/customers", getAllCustomer);

routerAPI.put("/customers", putUpdateAnCustomer);

routerAPI.delete("/customers", deleteAnCustomer);

//////////////////////////
routerAPI.post("/project", postCreateProject);
routerAPI.get("/project", getAllProject);
routerAPI.delete("/project", deleteAProject);
routerAPI.put("/project", updateAProject);

/////////////////////////

routerAPI.get("/info", (req, res) => {
  console.log(req.query);
  return res.status(200).json({
    data: req.query,
  });
});
routerAPI.get("/info/:name/:address", (req, res) => {
  console.log(req.params);
  return res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI;
