import React, { useState, useEffect } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { PasswordStrengthIndicator } from '../ui/PasswordStrengthIndicator';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from '../../lib/validation';
import axios from 'axios';
export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState({
    strength: 'weak',
    message: '',
  });

  useEffect(() => {
    if (formData.password) {
      const result = validatePassword(formData.password);
      setPasswordStrength({
        strength: result.strength,
        message: result.message,
      });
    }
  }, [formData.password]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.message;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp= async(e)=>{
    try{
      const res=await axios.post('/api/auth/signup',formData);
      console.log(res);
    }
    catch(e){
      console.log(e);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid, submitting...', formData);
      handleSignUp(e);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Create Account</h2>
      <p className="text-gray-600 mb-6">Start your financial journey today</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          icon={User}
          label="Full Name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter your full name"
          error={errors.name}
          required
        />

        <Input
          icon={Mail}
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter your email"
          error={errors.email}
          required
        />

        <div className="space-y-2">
          <Input
            icon={Lock}
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Create a password"
            error={errors.password}
            required
          />
          {formData.password && (
            <PasswordStrengthIndicator
              strength={passwordStrength.strength}
              message={passwordStrength.message}
            />
          )}
        </div>

        <Input
          icon={Lock}
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          placeholder="Confirm your password"
          error={errors.confirmPassword}
          required
        />

        <Button type="submit" className="w-full" size="lg">
          Create Account
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Or sign up with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" type="button" size="lg">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
            Google
          </Button>
          <Button variant="outline" type="button" size="lg">
            <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5 mr-2" />
            Facebook
          </Button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};