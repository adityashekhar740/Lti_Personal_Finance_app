import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Home from './components/new/';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/financialdashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/financialdashboard" element={<Dashboard />} />
        <Route path="/financialdashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;