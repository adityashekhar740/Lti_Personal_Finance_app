
const bcrypt=require('bcryptjs');
const UserModel=require('../models/user.model');
const jwt=require('jsonwebtoken');

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

const SignIn=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json('PLESE ENTER ALL THE FIELDS');
    }
    try{
        const user=await UserModel.findOne({email});
        if(!user){
            return res.status(401).json('USER NOT FOUND');
        }
        const validPassword=bcrypt.compareSync(password,user.password);
        if(!validPassword){
            return res.status(401).json('INCORRECT USERNAME OR PASSWORD');
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
        const {password:pass,...rest}=user._doc;
        res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest);
        
    }
    catch(e){
        res.status.json('UNABLE TO SIGNIN');
    }
}

const LogOut=async(req,res)=>{
    try{
        res.clearCookie('access_token');
        res.status(200).json('LOGGED OUT SUCCESSFULLY...!!');
        
    }
    catch(e){
        res.status(500).json('UNABLE TO LOGOUT');
    }
}
module.exports={SignUp,SignIn,LogOut};