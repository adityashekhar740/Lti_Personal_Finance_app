const express=require('express');
const Router=express.Router();
const {
  addIncomeSource,
  fetchIncomes,
  deleteIncomeSource,
} = require("../controllers/IncomeController");
const VerifyToken = require('../middlewares/VerifyToken');

Router.post("/addincomesource",VerifyToken, addIncomeSource);
Router.get("/fetchincomes",VerifyToken, fetchIncomes);
Router.delete("/deleteincomesource",VerifyToken, deleteIncomeSource);
module.exports=Router;