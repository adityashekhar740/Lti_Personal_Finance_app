const Expenses = require("../models/expenses.model");
const Budget = require("../models/budget.model");
const { default: mongoose } = require("mongoose");

const addExpense = async (req, res) => {
  const { category, description, amount, userRef } = req.body;
  const amt = parseInt(amount);
  try {
    const Expense = await Expenses.create({
      category,
      description,
      amount: amt,
      userRef,
    });
    const budgetCategory = await Budget.findOne({ category });
    if (!budgetCategory) {
      return res.status(201).json(Expense);
    }
    await Budget.updateOne(
      { _id: budgetCategory._id },
      { $inc: { spent: amt } }
    );
    res.status(201).json(Expense);
  } catch (e) {
    res.status(500).json("UNABLE TO ADD EXPENSE");
  }
};

const getAllExpenses = async (req, res) => {
  const { userId } = req.query;
  try {
    const AllExpenses = await Expenses.find({ userRef: userId });
    res.status(200).json(AllExpenses);
  } catch (e) {
    res.status(500).json("UNABLE TO FETCH ALL THE EXPENSES");
  }
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedExpense = await Expenses.deleteOne({ _id: id });
    if(deletedExpense.deletedCount===0){
      return res.status(404).json('EXPENSE NOT FOUND');
    }
    res.status(200).json(deletedExpense);
  } catch (e) {
    res.status(500).json("UNABLE TO DELETE EXPENSE");
  }
};
module.exports = { addExpense, getAllExpenses, deleteExpense };
