import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from expo vector icons

export default function Patientbuttons({ setScreen }) {
  const handleLoginPress = () => {
    setScreen('PatientLogin');
  };

  const handleSignUpPress = () => {
    // Add logic to navigate to SignUp screen
    setScreen('PatientSignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  arrowContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});