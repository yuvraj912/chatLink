const express = require("express");

const app = express();

const userRouter = require('../src/routes/user.routes.js');


app.use("/testing", userRouter);

module.exports = app