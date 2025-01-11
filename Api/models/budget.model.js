const mongoose=require('mongoose');

const budgetSchema=new mongoose.Schema({
    userRef:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        unique:true,
    },
    limit:{
        type:Number,
    },
    spent:{
        type:Number,
    }
});

const Budget=mongoose.model('Budget',budgetSchema);
module.exports=Budget;