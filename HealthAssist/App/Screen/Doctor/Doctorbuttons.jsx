import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from expo vector icons

export default function Doctorbuttons({ setScreen }) {
  const handleLoginPress = () => {
    setScreen('Doctorlogin');
  };

  const handleSignUpPress = () => {
    setScreen('Doctorsignup'); // Fixed the function call
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setScreen('Home')} style={styles.arrowContainer}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginPress} style={[styles.button, { backgroundColor: '#2196F3' }]}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUpPress} style={[styles.button, { backgroundColor: '#4CAF50' }]}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  button: {
    backgroundColor: '#003366', // Dark blue background color
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


