import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ setScreen }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HealthAssist</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setScreen('Doctorbuttons')} // Change to Doctorbuttons screen when the button is pressed
      >
        <Text style={styles.buttonText}>I'm a Medical Professional</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]}
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
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
