import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function PatientSignUp() {
  const handleSignUpPress = () => {
    // Add your sign-up logic here
    console.log('Sign Up button pressed!');
  };

  return (
    <View style={styles.container}>
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