const express=require('express');
const { SignUp,SignIn, LogOut } = require('../controllers/AuthController');
const VerifyToken = require('../middlewares/VerifyToken');
const Router=express.Router();

Router.post('/signup',SignUp);
Router.post('/signin',SignIn);
Router.get("/logout", VerifyToken, LogOut);

module.exports=Router;