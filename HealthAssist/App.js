import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './App/Screen/Home/home';
import Patientbuttons from './App/Screen/Patient/Patientbuttons';
import Doctorbuttons from './App/Screen/Doctor/Doctorbuttons';

export default function App() {
  const [screen, setScreen] = useState('Home');

  const handleScreenChange = (newScreen) => {
    setScreen(newScreen);
  };

  return (
    <View style={styles.container}>
      {screen === 'Home' && <Home setScreen={handleScreenChange} />}
      {screen === 'Patientbuttons' && <Patientbuttons setScreen={handleScreenChange} />}
      {screen === 'Doctorbuttons' && <Doctorbuttons setScreen={handleScreenChange} />}
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
