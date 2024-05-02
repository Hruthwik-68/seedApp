// Validation/SignUpValidation.js

// Function to validate full name
export const validateFullName = (fullName) => {
    return fullName.trim() !== '';
  };
  
  // Function to validate email
  export const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  
  // Function to validate phone number
  export const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };
  
  // Function to validate password
  export const validatePassword = (password) => {
    return password.length >= 8;
  };
  
  // Function to validate confirm password
  export const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };
  