import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import PatientSignUp from './App/Screen/Patient/PatientSignUp';
import PatientLogin from './App/Screen/Patient/PatientLogin';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.bubble} />
      </View>
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
    justifyContent: 'flex-end', // Align content to the bottom
  },
  imageContainer: {
    position: 'absolute',
    top: '50%', // Center the image vertically
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  bubble: {
    width: 180,
    height: 180,
    borderRadius: 90, // Half of the width and height to create a circle
    backgroundColor: 'lightblue',
    position: 'absolute',
    top: -15,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20, // Margin at the bottom to separate buttons from image
  },
});