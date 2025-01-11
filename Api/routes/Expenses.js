const express=require('express');
const {
  addExpense,
  getAllExpenses,
  deleteExpense,
} = require("../controllers/Expenses.Controller");
const Router=express.Router();

Router.post("/addexpense", addExpense);
Router.get("/getallexpenses", getAllExpenses);
Router.delete('/deleteexpense/:id',deleteExpense);
module.exports=Router;