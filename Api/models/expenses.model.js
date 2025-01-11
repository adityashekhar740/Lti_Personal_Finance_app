const mongoose=require("mongoose");

const expensesSchema=new mongoose.Schema({
    userRef:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    amount:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
});

const Expenses=mongoose.model('Expenses',expensesSchema);
module.exports=Expenses;