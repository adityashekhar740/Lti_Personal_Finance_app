const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');
const AuthRouter=require('./routes/Auth');
const IncomeRouter=require('./routes/income');
const cookieParser=require('cookie-parser');
const app=express();
dotenv.config();
const corsOptions={
    origin:'http://localhost:5173',
    methods:'GET,POST',
    Credentials:true,
}

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());                // to send data in json form
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB");
});
app.use('/api/auth',AuthRouter);
app.use('/api/income',IncomeRouter);



app.listen(5000,()=>{
    console.log('server is running on port 5000');
});