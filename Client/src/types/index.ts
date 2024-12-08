export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
}

export interface Budget {
  id: string;
  category: string;
  limit: number;
  spent: number;
}