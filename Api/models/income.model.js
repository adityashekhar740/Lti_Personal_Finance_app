const mongoose=require('mongoose');

const incomeSchema=new mongoose.Schema({
    source:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    category:{
        type:String,
        required:true,
        default:'primary income',
    },
    userRef:{
        type:String,
        required:true,
    }
});

const Income=mongoose.model('Income',incomeSchema);
module.exports=Income;