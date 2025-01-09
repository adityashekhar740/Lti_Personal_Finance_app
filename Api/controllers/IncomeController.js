const { default: mongoose } = require('mongoose');
const {ObjectId}=require('bson');
const IncomeModel=require('../models/income.model');
const addIncomeSource=async(req,res)=>{
    const {source,amount,category,date,userRef}=req.body.data;
   try{
     const newIncomeSource=await new IncomeModel({
        source,
        amount,
        category,
        date,
        userRef
    });
    await newIncomeSource.save();
    res.status(201).json(newIncomeSource);
   }
   catch(e){
    res.status(500).json('UNABLE TO ADD INCOME SOURCE');
   }
}

const fetchIncomes=async(req,res)=>{
  const {userId}=req.query;
  try{

    // console.log(userRef)
    // const allIncomes=await IncomeModel.find(new mongoose.Types.ObjectId(oid));
    const allIncomes=await IncomeModel.find({userRef:userId});
     
    res.status(200).json(allIncomes);
  }
  catch(e){
    // console.log(e)
    res.status(500).json('UNABLE TO PROCESS ALL INCOMES');
  }
}

const deleteIncomeSource=async(req,res)=>{
  const {id}=req.query;
 try{
  await IncomeModel.findByIdAndDelete({_id:id});
  res.status(200).json('INCOME SOURCE DELETED');
 }
 catch(e){
  console.log(e);
  res.status(500).json('INTERNAL SERVER ERROR');
 }
}
module.exports = { addIncomeSource, fetchIncomes, deleteIncomeSource };