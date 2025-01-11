const Budget = require("../models/budget.model");
const createBudget = async (req, res) => {
  const { userRef, limit, category } = req.body;
  const limitInt = parseInt(limit);
  try {
    const NewBudget = await Budget.create({
      userRef,
      limit: limitInt,
      category,
    });
    res.status(201).json(NewBudget);
  } catch (e) {
    res.status(500).json("UNABLE TO CREATE BUDGET");
  }
};
const getAllBudgets = async (req, res) => {
  const id = req.params.id;
  try {
    const AllBudgets = await Budget.find({ userRef: id });
    res.status(200).json(AllBudgets);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createBudget, getAllBudgets };
