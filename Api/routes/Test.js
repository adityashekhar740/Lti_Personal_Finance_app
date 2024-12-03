const express=require('express');
const Router=express.Router();

Router.get('/test',(req,res)=>{
   try{
    res.json({message:'test route is working'});
   }
   catch(e){
    console.log(e);
   }
});

module.exports=Router;