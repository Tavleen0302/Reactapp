import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './App/Screen/Home/home';
import Patientbuttons from './App/Screen/Patient/Patientbuttons';
import PatientLogin from './App/Screen/Patient/PatientLogin';
import PatientSignUp from './App/Screen/Patient/PatientSignUp';
import Doctorbuttons from './App/Screen/Doctor/Doctorbuttons';
import Doctorlogin from './App/Screen/Doctor/Doctorlogin';
import Doctorsignup from './App/Screen/Doctor/Doctorsignup';
import Patientfindloc from './App/Screen/Patient/Patientfindloc';
import PatientsDoctorList from './App/Screen/Patient/PatientsDoctorList';
import DoctorAppointments from './App/Screen/Doctor/DoctorAppointments';
import UserProfileUpdate from './App/Screen/Patient/Personal';
import PatientAppointments from './App/Screen/Patient/PatientAppointments';
import Personal from './App/Screen/Patient/Personal';
import PersonalDoc from './App/Screen/Doctor/PersonalDoc';


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
      case 'Doctorbuttons':
        return <Doctorbuttons setScreen={handleScreenChange} />;
      case 'Doctorlogin':
        return <Doctorlogin setScreen={handleScreenChange} />;
      case 'Doctorsignup':
        return <Doctorsignup setScreen={handleScreenChange} />;
      case 'Patientfindloc':
        return <Patientfindloc setScreen={handleScreenChange} />;
      case 'PatientsDoctorList':
        return <PatientsDoctorList setScreen={handleScreenChange} />;
      case 'UserProfileUpdate':
        return <UserProfileUpdate setScreen={handleScreenChange} />;
      case 'DoctorAppointments':
        return <DoctorAppointments setScreen={handleScreenChange} />;
      case 'PatientAppointments':
        return <PatientAppointments setScreen={handleScreenChange} />;
      case 'PersonalDoc':
        return <PersonalDoc setScreen={handleScreenChange} />;
      case 'Personal':
        return <Personal setScreen={handleScreenChange} />;
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
