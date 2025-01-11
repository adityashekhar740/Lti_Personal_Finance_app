const express=require('express');
const Router=express.Router();
const {createBudget,getAllBudgets} =require('../controllers/BudgetController');
Router.post('/createbudget',createBudget);
Router.get("/getallbudgets/:id",getAllBudgets);
module.exports=Router;