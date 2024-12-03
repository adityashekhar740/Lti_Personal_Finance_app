import { NavigateFunction } from 'react-router-dom';

// Configuration for OAuth providers
const AUTH_CONFIG = {
  GOOGLE: {
    CLIENT_ID: 'your-google-client-id',
    REDIRECT_URI: `${window.location.origin}/auth/google/callback`,
    SCOPE: 'email profile',
  },
  FACEBOOK: {
    CLIENT_ID: 'your-facebook-client-id',
    REDIRECT_URI: `${window.location.origin}/auth/facebook/callback`,
    SCOPE: 'email,public_profile',
  },
};

export const initializeGoogleAuth = () => {
  const params = new URLSearchParams({
    client_id: AUTH_CONFIG.GOOGLE.CLIENT_ID,
    redirect_uri: AUTH_CONFIG.GOOGLE.REDIRECT_URI,
    scope: AUTH_CONFIG.GOOGLE.SCOPE,
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
  });

  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
};

export const initializeFacebookAuth = () => {
  const params = new URLSearchParams({
    client_id: AUTH_CONFIG.FACEBOOK.CLIENT_ID,
    redirect_uri: AUTH_CONFIG.FACEBOOK.REDIRECT_URI,
    scope: AUTH_CONFIG.FACEBOOK.SCOPE,
    response_type: 'code',
    auth_type: 'rerequest',
  });

  return `https://www.facebook.com/v12.0/dialog/oauth?${params.toString()}`;
};

export const handleSocialLogin = (provider: 'google' | 'facebook') => {
  const authUrl = provider === 'google' 
    ? initializeGoogleAuth() 
    : initializeFacebookAuth();
  
  // Open the OAuth provider's login page in a popup
  const width = 500;
  const height = 600;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;
  
  window.open(
    authUrl,
    `${provider}Auth`,
    `width=${width},height=${height},left=${left},top=${top}`
  );
};