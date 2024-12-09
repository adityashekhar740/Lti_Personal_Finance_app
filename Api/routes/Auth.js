const express=require('express');
const { SignUp,SignIn, LogOut } = require('../controllers/AuthController');
const Router=express.Router();

Router.post('/signup',SignUp);
Router.post('/signin',SignIn);
Router.get('/logout',LogOut);

module.exports=Router;