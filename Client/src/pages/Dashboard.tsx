import React, { useState } from 'react';
import { DollarSign, TrendingUp, PieChart } from 'lucide-react';
import Header from '../components/dashboard/Header';
import StatCard from '../components/dashboard/StatCard';
import ExpenseList from '../components/dashboard/ExpenseList';
import ExpenseChart from '../components/dashboard/ExpenseChart';
import ExpenseForm from '../components/dashboard/ExpenseForm';
import DateRangeFilter from '../components/dashboard/DateRangeFilter';
import { Expense } from '../types';
import { getDateRange } from '../utils/dateUtils';

const initialExpenses = [
  {
    id: '1',
    amount: 120000.00,
    category: 'Bills',
    date: '2024-03-15',
    description: 'Monthly Rent',
  },
  {
    id: '2',
    amount: 45000.00,
    category: 'Utilities',
    date: '2024-03-14',
    description: 'Electricity & Water',
  },
  {
    id: '3',
    amount: 8550.00,
    category: 'Groceries',
    date: '2024-03-13',
    description: 'Weekly Groceries',
  },
];

export default function Dashboard() {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [dateRange, setDateRange] = useState(getDateRange('month'));

  const handleAddExpense = (newExpense: Expense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const handleDateRangeChange = (range: string) => {
    setDateRange(getDateRange(range));
  };

  const filteredExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    const startDate = new Date(dateRange.startDate);
    const endDate = new Date(dateRange.endDate);
    return expenseDate >= startDate && expenseDate <= endDate;
  });

  const totalExpenses = filteredExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  const monthlyBudget = 500000;
  const remainingBudget = monthlyBudget - totalExpenses;

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Header onAddExpense={() => setShowExpenseForm(true)} />

        <DateRangeFilter
          startDate={dateRange.startDate}
          endDate={dateRange.endDate}
          onStartDateChange={(date) => setDateRange(prev => ({ ...prev, startDate: date }))}
          onEndDateChange={(date) => setDateRange(prev => ({ ...prev, endDate: date }))}
          onRangeSelect={handleDateRangeChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Monthly Budget"
            value={`₹${monthlyBudget.toLocaleString('en-IN')}`}
            icon={DollarSign}
            gradient
          />
          <StatCard
            title="Remaining Budget"
            value={`₹${remainingBudget.toLocaleString('en-IN')}`}
            icon={TrendingUp}
          />
          <StatCard
            title="Total Expenses"
            value={`₹${totalExpenses.toLocaleString('en-IN')}`}
            icon={PieChart}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Expenses</h2>
            <ExpenseList expenses={filteredExpenses} onDelete={handleDeleteExpense} />
          </div>
          <div className="glass-card rounded-2xl p-6">
            <ExpenseChart expenses={filteredExpenses} />
          </div>
        </div>
      </div>

      {showExpenseForm && (
        <ExpenseForm
          onClose={() => setShowExpenseForm(false)}
          onSubmit={handleAddExpense}
        />
      )}
    </div>
  );
}