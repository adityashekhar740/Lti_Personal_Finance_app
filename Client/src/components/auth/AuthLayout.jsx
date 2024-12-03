import React from 'react';
import PropTypes from 'prop-types';
import { CircleDollarSign } from 'lucide-react';

export const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Abstract Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80"
          alt="Abstract Financial Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-900/90 mix-blend-multiply" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
          <div className="max-w-md text-center relative">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl" />
            <h2 className="text-4xl font-bold mb-6">
              Take Control of Your Financial Future
            </h2>
            <p className="text-xl text-blue-50/90">
              Track expenses, manage investments, and achieve your financial goals with our comprehensive platform.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { number: '100k+', label: 'Active Users' },
                { number: '$2.5M', label: 'Managed Assets' },
                { number: '98%', label: 'Satisfaction' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-blue-50/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-white p-3 rounded-2xl shadow-md relative">
                <div className="absolute inset-0 rounded-2xl bg-blue-600/10 animate-pulse" />
                <CircleDollarSign className="w-10 h-10 text-blue-600 relative" />
              </div>
              <h1 className="text-3xl font-bold italic text-blue-600">
                LTImindtree
              </h1>
            </div>
            <p className="text-gray-600">Personal Finance Management Platform</p>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="relative">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};