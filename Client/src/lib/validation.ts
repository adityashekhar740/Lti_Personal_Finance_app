export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): {
  isValid: boolean;
  strength: 'weak' | 'medium' | 'strong';
  message: string;
} => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  if (password.length < 8) {
    return {
      isValid: false,
      strength: 'weak',
      message: 'Password must be at least 8 characters long',
    };
  }

  const conditions = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar];
  const strength = conditions.filter(Boolean).length;

  if (strength <= 2) {
    return {
      isValid: true,
      strength: 'weak',
      message: 'Password is too weak',
    };
  } else if (strength === 3) {
    return {
      isValid: true,
      strength: 'medium',
      message: 'Password strength is medium',
    };
  }
  
  return {
    isValid: true,
    strength: 'strong',
    message: 'Password strength is strong',
  };
};