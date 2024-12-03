import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

export const Input = React.forwardRef(
  ({ className, icon: Icon, error, label, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          )}
          <input
            ref={ref}
            className={cn(
              'w-full px-4 py-3 border-2 rounded-xl transition-all duration-200',
              'focus:ring-2 focus:ring-offset-1 focus:outline-none',
              Icon && 'pl-12',
              error
                ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
                : 'border-gray-200 focus:border-blue-400 focus:ring-blue-100',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <span className="inline-block w-1 h-1 rounded-full bg-red-600" />
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.elementType,
  error: PropTypes.string,
  label: PropTypes.string,
};