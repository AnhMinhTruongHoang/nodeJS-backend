require("dotenv").config();
const configViewEngine = require("./src/config/viewEngine");
const express = require("express"); //commonjs
const webRouter = require("./src/routes/web");
const connection = require("./src/config/dataBase");


// import express from 'express';//es modules
const app = express(); // app express
const port = process.env.PORT || 8888; //port => hardcode . uat .prod
const hostname = process.env.HOST_NAME;

configViewEngine(app);

//////// router
app.use("/", webRouter);

app.listen(port, hostname, () => {
  console.log(`Example router listening on port ${port}`);
});
