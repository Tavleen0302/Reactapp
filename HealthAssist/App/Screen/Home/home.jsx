import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Doctorbuttons from './App/Screen/Doctor/Doctorbuttons';
import Patientbuttons from './App/Screen/Patient/Patientbuttons';

export default function Home() {
  const [isPatientSelected, setIsPatientSelected] = useState(false); // State to track if patient button is clicked

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsPatientSelected(false)} // Set patient selection to false when doctor button is clicked
      >
        <Text style={styles.buttonText}>I'm a Medical Professional</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]}
        onPress={() => setIsPatientSelected(true)} // Set patient selection to true when patient button is clicked
      >
        <Text style={styles.buttonText}>I'm a Patient</Text>
      </TouchableOpacity>
      {isPatientSelected ? <PatientButtons /> : <DoctorButtons />} // Conditionally render PatientButtons or DoctorButtons based on state
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
});
