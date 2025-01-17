const express=require('express');
const Router=express.Router();
const {createBudget,getAllBudgets} =require('../controllers/BudgetController');
const VerifyToken = require('../middlewares/VerifyToken');
Router.post('/createbudget',VerifyToken,createBudget);
Router.get("/getallbudgets/:id", VerifyToken, getAllBudgets);
module.exports=Router;