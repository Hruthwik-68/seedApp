// Validation/SignInValidation.js

// Function to validate email for SignIn
export const validateSignInEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  
  // Function to validate password for SignIn
  export const validateSignInPassword = (password) => {
    return password.length >= 8;
  };
  