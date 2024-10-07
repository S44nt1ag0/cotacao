const express = require("express")
const Router = express.Router();
const controller = require("./controller")

Router.get("/", controller.home);

module.exports = Router