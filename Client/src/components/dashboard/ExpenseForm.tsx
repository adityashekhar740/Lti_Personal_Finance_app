import React, { useState } from 'react';
import { DollarSign, Calendar, Tag, X } from 'lucide-react';
import { currencies, convertCurrency } from '../../utils/currency';
import { isValidDate } from '../../utils/dateUtils';

interface ExpenseFormProps {
  onClose: () => void;
  onSubmit: (expense: any) => void;
}

export default function ExpenseForm({ onClose, onSubmit }: ExpenseFormProps) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('INR');
  const [dateError, setDateError] = useState('');

  const categories = [
    'Groceries',
    'Bills',
    'Entertainment',
    'Travel',
    'Healthcare',
    'Miscellaneous'
  ];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    if (!isValidDate(selectedDate)) {
      setDateError('Future dates are not allowed');
      setDate('');
    } else {
      setDateError('');
      setDate(selectedDate);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amountInINR = convertCurrency(parseFloat(amount), currency, 'INR');
    onSubmit({
      id: Date.now().toString(),
      amount: amountInINR,
      originalAmount: parseFloat(amount),
      originalCurrency: currency,
      category,
      date,
      description
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Add New Expense</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Amount</label>
              <div className="mt-1 relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="number"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-10 block w-full rounded-lg border border-gray-300 py-2 px-4"
                  required
                />
              </div>
            </div>
            <div className="w-1/3">
              <label className="block text-sm font-medium text-gray-700">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 py-2 px-4"
              >
                {currencies.map((curr) => (
                  <option key={curr.code} value={curr.code}>
                    {curr.symbol} {curr.code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <div className="mt-1 relative">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="pl-10 block w-full rounded-lg border border-gray-300 py-2 px-4"
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <div className="mt-1 relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="date"
                value={date}
                onChange={handleDateChange}
                max={new Date().toISOString().split('T')[0]}
                className="pl-10 block w-full rounded-lg border border-gray-300 py-2 px-4"
                required
              />
            </div>
            {dateError && <p className="text-red-500 text-sm mt-1">{dateError}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 py-2 px-4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
}