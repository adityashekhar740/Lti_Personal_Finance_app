import React, { useState } from 'react';
import { Mail, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../lib/validation';

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setIsSubmitted(true);
    // Here you would typically make an API call to send the reset email
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Check Your Email</h2>
          <p className="text-gray-600 mb-6">
            We've sent password reset instructions to:
            <br />
            <span className="font-medium text-gray-800">{email}</span>
          </p>
          <Button
            variant="outline"
            className="mb-4 w-full"
            onClick={() => setIsSubmitted(false)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Try another email
          </Button>
          <p className="text-sm text-gray-600">
            Didn't receive the email?{' '}
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Click to resend
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Forgot Password?</h2>
      <p className="text-gray-600 mb-6">
        No worries! Enter your email and we'll send you reset instructions.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          icon={Mail}
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          error={error}
          required
        />

        <Button type="submit" className="w-full" size="lg">
          Send Reset Instructions
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <div className="text-center">
          <Link
            to="/login"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-700"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};