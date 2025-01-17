const express=require('express');
const {
  SignUp,
  SignIn,
  LogOut,
  GoogleSignIn,
  ForgotPassword,
  ResetPassword,
} = require("../controllers/AuthController");
const VerifyToken = require('../middlewares/VerifyToken');
const Router=express.Router();

Router.post('/signup',SignUp);
Router.post('/signin',SignIn);
Router.get("/logout", VerifyToken, LogOut);
Router.get('/verifytoken',VerifyToken);
Router.post('/googlesignin',GoogleSignIn);
Router.post('/forgot-password',ForgotPassword);
Router.post('/reset-password/:resetToken',ResetPassword);

module.exports=Router;