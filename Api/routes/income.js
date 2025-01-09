const express=require('express');
const Router=express.Router();
const {
  addIncomeSource,
  fetchIncomes,
  deleteIncomeSource,
} = require("../controllers/IncomeController");

Router.post("/addincomesource", addIncomeSource);
Router.get("/fetchincomes", fetchIncomes);
Router.delete("/deleteincomesource", deleteIncomeSource);
module.exports=Router;