import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function PatientLogin() {
  const handleLoginPress = () => {
    // Add your login logic here
    console.log('Login button pressed!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
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
