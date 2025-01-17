const bcrypt = require("bcryptjs");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const generator = require("generate-password");
const nodemailer = require("nodemailer");

const SignUp = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPass = bcrypt.hashSync(password, 10);
  try {
    const user = await new UserModel({
      name,
      email,
      password: hashedPass,
    });
    await user.save();

    res.status(200).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
};

const SignIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("PLESE ENTER ALL THE FIELDS");
  }
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json("INCORRECT USERNAME OR PASSWORD");
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(401).json("INCORRECT USERNAME OR PASSWORD");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (e) {
    res.status.json("UNABLE TO SIGNIN");
  }
};

const LogOut = async (req, res) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("LOGGED OUT SUCCESSFULLY...!!");
  } catch (e) {
    res.status(500).json("UNABLE TO LOGOUT");
  }
};
const GoogleSignIn = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const pass = generator.generate({
        length: 10,
        numbers: true,
      });
      const hashedPass = bcrypt.hashSync(pass, 10);
      const user = await UserModel.create({
        name,
        email,
        password: hashedPass,
      });
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: passs, ...rest } = user._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (e) {
    res.status(500).json("UNABLE TO LOGIN THROUGH GOOGLE");
  }
};

const ForgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json("USER NOT FOUND..");
    }
    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });
    const resetUrl = `${req.protocol}://localhost:5173/reset-password/${resetToken}`;
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "shekharaditya7402@gmail.com",
        pass: "rfvd rcti jvgs ktns",
      },
    });
    const mailOptions = {
      to: email,
      subject: "Reset Your FinApp Password",
      text: `Please click on the following link to reset your password: ${resetUrl}`,
    };
    await transporter.sendMail(mailOptions);
    res.json("RESET LINK SENT TO YOUR EMAIL!!..");
  } catch (e) {
    res.status(500).json("UNABLE TO RESET PASSWORD");
  }
};
const ResetPassword=async(req,res)=>{
  const {resetToken}=req.params;
  const{password,confirmPassword}=req.body;
  if(password!==confirmPassword){
    return res.status(400).json({message:'passwords does not match'});
  }
  try{
    const decoded=jwt.verify(resetToken,process.env.JWT_SECRET);
    const user=await UserModel.findById(decoded.id);
    if(!user){
      return res.status(404).json({message:'user not found.. or Invalid token'});
    }
    user.password=await bcrypt.hashSync(password,10);
    await user.save();
    res.status(200).json('PASSWORD RESET SUCCESSFULLY');

  }
  catch(e){
    console.log(e);
    res.status(500).json("UNABLE TO RESET PASSWORD");
  }
}
module.exports = {
  SignUp,
  SignIn,
  LogOut,
  GoogleSignIn,
  ForgotPassword,
  ResetPassword,
};
