const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');
const AuthRouter=require('./routes/Auth');
const IncomeRouter=require('./routes/income');
const ExpensesRouter=require('./routes/Expenses');
const BudgetRouter=require('./routes/Budget');
const InvestmentRouter=require('./routes/investment');
const DashboardRouter=require('./routes/Dashboard');
const cookieParser=require('cookie-parser');
const PrivateRouter =require('./routes/PrivateRoute');
const app=express();
dotenv.config();
// const corsOptions={
//     origin:'http://localhost:5173',
//     methods:'GET,POST',
//     Credentials:true,
// }

app.use(cookieParser());
app.use(cors());
app.use(express.json());                // to send data in json form
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB");
});
app.use('/auth',AuthRouter);
app.use('/income',IncomeRouter);
app.use('/privateroute/authenticate',PrivateRouter);
app.use('/expenses',ExpensesRouter);
app.use('/expenses',ExpensesRouter);
app.use('/budget',BudgetRouter);
app.use('/investment',InvestmentRouter);
app.use('/dashboard',DashboardRouter);
app.get('/',(req,res)=>{
    res.send('running fine !!..');
})
app.listen(5000,()=>{
    console.log('server is running on port 5000');
});