const express = require("express");
const Router = express.Router();
const {
  addInvestment,
  GetAllInvestments,
} = require("../controllers/investmentController");
const VerifyToken = require("../middlewares/VerifyToken");

Router.post("/addinvestment", VerifyToken, addInvestment);
Router.get("/getallinvestments/:id", VerifyToken, GetAllInvestments);

module.exports = Router;
