import React from 'react';
import { CircleDollarSign } from 'lucide-react';

export const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CircleDollarSign className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl font-bold italic text-blue-600">
              LTImindtree
            </h1>
          </div>
          <p className="text-gray-600">Personal Finance Management Platform</p>
        </div>
        {children}
      </div>
    </div>
  );
};