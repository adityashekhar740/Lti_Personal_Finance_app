const express=require('express');
const VerifyToken = require('../middlewares/VerifyToken');
const Router=express.Router();

Router.get('/authenticate',VerifyToken);
module.exports=Router;