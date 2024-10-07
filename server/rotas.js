const express = require("express")
const Router = express.Router();
const controller = require("./controller")

Router.get("/", controller.home);
Router.get("/cotacao/atual", controller.cotacao);

module.exports = Router