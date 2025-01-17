const express=require('express');
const {
  addExpense,
  getAllExpenses,
  deleteExpense,
} = require("../controllers/Expenses.Controller");
const VerifyToken = require('../middlewares/VerifyToken');
const Router=express.Router();

Router.post("/addexpense", VerifyToken, addExpense);
Router.get("/getallexpenses", VerifyToken, getAllExpenses);
Router.delete("/deleteexpense/:id", VerifyToken, deleteExpense);
module.exports=Router;