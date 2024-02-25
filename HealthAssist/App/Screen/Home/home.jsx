import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ setScreen }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HealthAssist</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setScreen('Doctorbuttons')} // Change to Doctorbuttons screen when the button is pressed
      >
        <Text style={styles.buttonText}>I'm a Medical Professional</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#4CAF50' }]}
        onPress={() => setScreen('Patientbuttons')} // Change to Patientbuttons screen when the button is pressed
      >
        <Text style={styles.buttonText}>I'm a Patient</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});