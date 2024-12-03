import React from 'react';
import { Button } from '../ui/Button';
import { handleSocialLogin } from '../../lib/auth';

export const SocialLoginButtons = () => {
  return (
    <div className="space-y-4">
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          type="button"
          size="lg"
          onClick={() => handleSocialLogin('google')}
          className="hover:bg-gray-50 transition-colors"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Google
        </Button>
        <Button
          variant="outline"
          type="button"
          size="lg"
          onClick={() => handleSocialLogin('facebook')}
          className="hover:bg-gray-50 transition-colors"
        >
          <img
            src="https://www.facebook.com/favicon.ico"
            alt="Facebook"
            className="w-5 h-5 mr-2"
          />
          Facebook
        </Button>
      </div>
    </div>
  );
};