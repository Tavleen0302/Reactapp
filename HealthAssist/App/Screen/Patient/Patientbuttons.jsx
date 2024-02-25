import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from expo vector icons

export default function Patientbuttons({ setScreen }) {
  const handleLoginPress = () => {
    setScreen('PatientLogin');
  };

  const handleSignUpPress = () => {
    // Add logic to navigate to SignUp screen
    console.log('SignUp button pressed!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setScreen('Home')} style={styles.arrowContainer}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUpPress} style={styles.button}>
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
    backgroundColor: 'blue',
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
