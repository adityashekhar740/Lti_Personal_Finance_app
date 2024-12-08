
const bcrypt=require('bcryptjs');
const SignUp=(req,res)=>{
    const {name,email,password,confirmPassword}=req.body;
    const hashedPass=bcryptjs.hashSync(password,10);
    const user=new User({
        
    })
}


module.exports={SignUp};