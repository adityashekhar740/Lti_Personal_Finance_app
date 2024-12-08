const express=require('express');
const { SignUp } = require('../controllers/AuthController');
const Router=express.Router();

Router.post('/signup',SignUp);

module.exports=Router;