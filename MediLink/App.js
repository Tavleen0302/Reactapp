import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PatientSignUp from './Apps/Screens/PatientSignUp/PatientSignUp';
import PatientLogin from './Apps/Screens/PatientLogin/PatientLogin';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <PatientLogin />
        <PatientSignUp />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row', // Align components horizontally
  },
});
