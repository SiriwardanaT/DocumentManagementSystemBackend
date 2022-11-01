const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cores = require('cors')
dotenv.config();

//router import
const clientRouter = require('./Controllers/ClientController')
const ProjectRouter = require('./Controllers/ProjectController')

//middleware usage
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cores());

//router usage
app.use('/client',clientRouter);
app.use('/project',ProjectRouter);


//database connection
mongoose
  .connect(process.env.DB_Cloud)
  .then((_connect) => {
    console.log(" Database connected Success ");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 5080;
app.listen(port, () => {
  console.log("server run in port " + port);
});
