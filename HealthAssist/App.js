import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './App/Screen/Home/home';
import Patientbuttons from './App/Screen/Patient/Patientbuttons';
import PatientLogin from './App/Screen/Patient/PatientLogin';
import PatientSignUp from './App/Screen/Patient/PatientSignUp';

export default function App() {
  const [screen, setScreen] = useState('Home');

  const handleScreenChange = (newScreen) => {
    setScreen(newScreen);
  };

  const renderScreen = () => {
    switch (screen) {
      case 'Home':
        return <Home setScreen={handleScreenChange} />;
      case 'Patientbuttons':
        return <Patientbuttons setScreen={handleScreenChange} />;
      case 'PatientLogin':
        return <PatientLogin setScreen={handleScreenChange} />;
      case 'PatientSignUp':
        return <PatientSignUp setScreen={handleScreenChange} />;
      default:
        return <Home setScreen={handleScreenChange} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
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
});
