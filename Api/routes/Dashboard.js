const express=require('express');
const Router=express.Router();
const {getAllData}=require('../controllers/DashboardControllers');
const VerifyToken = require('../middlewares/VerifyToken');
Router.get('/getalldata/:userId',VerifyToken,getAllData);

module.exports=Router;