import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PatientLogin() {
  const handleLoginPress = () => {
    // Add your login logic here
    console.log('Login button pressed!');
  };

  return (
    <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green', // Different color for login button
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
