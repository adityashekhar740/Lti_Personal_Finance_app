import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import FinancialDashboard from './pages/Dashboard';
import  MainDashboard from './components/new/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/financialdashboard" element={<FinancialDashboard />} />
        <Route path="/dashboard" element={< MainDashboard/>} />
        
      </Routes>
    </Router>
  );
}

export default App;