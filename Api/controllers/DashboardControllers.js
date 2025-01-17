const IncomeModel=require('../models/income.model');
const ExpensesModel=require('../models/expenses.model');
const InvestmentModel=require('../models/investment.model');
const getAllData=async(req,res)=>{
const {userId}=req.params;
try{
    const Incomes = await IncomeModel.find({userRef:userId});
    const Expenses = await ExpensesModel.find({userRef:userId});
    const Investments = await InvestmentModel.find({userRef:userId});
    res.status(200).json({Incomes,Expenses,Investments});
}
catch(e){
    res.status(500).json('UNABLE TO GET DATA AT THIS POINT');
}

}
module.exports = { getAllData };