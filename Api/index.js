const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');
const AuthRouter=require('./routes/Auth');
const app=express();
dotenv.config();
const corsOptions={
    origin:'http://localhost:5173',
    methods:'GET,POST',
    Credentials:true,
}


app.use(cors(corsOptions));
app.use(express.json());                // to send data in json form
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB");
});
app.use('/api/auth',AuthRouter);




app.listen(5000,()=>{
    console.log('server is running on port 5000');
});