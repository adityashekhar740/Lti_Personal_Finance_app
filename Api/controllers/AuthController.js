
const bcrypt=require('bcryptjs');
const UserModel=require('../models/user.model');
const SignUp=async(req,res)=>{
    const {name,email,password}=req.body;
  
    const hashedPass=bcrypt.hashSync(password,10);
    try{
        const user=await new UserModel({
        name,
        email,
        password:hashedPass,   
    });
    await user.save();

    res.status(200).json(user);
    }
    catch(e){
        res.status(500).json(e);
    }
}


module.exports={SignUp};