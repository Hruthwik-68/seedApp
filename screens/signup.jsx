import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { validateFullName, validateEmail, validatePhoneNumber, validatePassword, validateConfirmPassword } from '../Validations/signup.Validation';
import { styles } from '../stylesheet/signupStyle.js'; 
import axios from 'axios';

export default function SignUp({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    if (!validateFullName(fullName)) {
      alert('Please enter a valid full name.');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      alert('Please enter a valid phone number.');
      return;
    }
    if (!validatePassword(password)) {
      alert('Password must be at least 8 characters long.');
      return;
    }
    if (!validateConfirmPassword(password, confirmPassword)) {
      alert('Passwords do not match.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const userData = {
      name: fullName,
      email: email,
      mobile: phoneNumber,
      password: password
    };
    axios.post("http://192.168.229.15:5001/register", userData)
      .then((res) => {
        console.log(res.data);
        navigation.navigate('Home'); 
      })
      .catch(e => console.log(e));
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword} 
        />
        <TouchableWithoutFeedback onPress={handlePasswordVisibility}>
          <Text style={styles.passwordVisibilityButton}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableWithoutFeedback onPress={handleConfirmPasswordVisibility}>
          <Text style={styles.passwordVisibilityButton}>{showConfirmPassword ? 'Hide' : 'Show'}</Text>
        </TouchableWithoutFeedback>
      </View>
      <Button
        title="Sign Up"
        onPress={handleSignUp}
        style={styles.button}
        color="#007bff"
      />
      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.signInText}>Already a customer?</Text>
      </TouchableOpacity>
    </View>
  );
}
