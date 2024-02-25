import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';

export default function ProfessionalForm({ setScreen }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [locationOfPractice, setLocationOfPractice] = useState('');
  const [medicalLicense, setMedicalLicense] = useState('');
  const [appointmentWeekdaysFree, setAppointmentWeekdaysFree] = useState('');
  const [timeFree, setTimeFree] = useState('');
  const [profession, setProfession] = useState('');

  const handleSubmit = () => {

    if (phoneNumber !== '' && (phoneNumber.length !== 10 || isNaN(phoneNumber))) {
        Alert.alert('Error', 'Please enter a valid phone number');
        return;
    }

    const data = {
      fullName,
      email,
      password,
      phoneNumber,
      locationOfPractice,
      medicalLicense,
      appointmentWeekdaysFree,
      timeFree,
      profession,
    };

    axios.post('http://localhost:8000/updateProfessional', data)
      .then((response) => {
        console.log(response.data);
        Alert.alert('Success', 'Professional information updated successfully');
        // Reset the form fields after successful submission
        setFullName('');
        setEmail('');
        setPassword('');
        setNewPassword('');
        setPhoneNumber('');
        setLocationOfPractice('');
        setMedicalLicense('');
        setAppointmentWeekdaysFree('');
        setTimeFree('');
        setProfession('');
      })
      setScreen('Home'); // Navigate to the next screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={text => setFullName(text)}
          placeholder="Enter full name"
          maxLength={255}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter email"
          maxLength={255}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Change Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Enter current password"
          secureTextEntry={false}
          maxLength={1024}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          maxLength={20}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location of Practice</Text>
        <TextInput
          style={styles.input}
          value={locationOfPractice}
          onChangeText={text => setLocationOfPractice(text)}
          placeholder="Enter location of practice"
          maxLength={255}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Medical License</Text>
        <TextInput
          style={styles.input}
          value={medicalLicense}
          onChangeText={text => setMedicalLicense(text)}
          placeholder="Enter medical license"
          maxLength={255}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Appointment Weekdays Free</Text>
        <TextInput
          style={styles.input}
          value={appointmentWeekdaysFree}
          onChangeText={text => setAppointmentWeekdaysFree(text)}
          placeholder="Enter weekdays free for appointments"
          maxLength={255}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Time Free</Text>
        <TextInput
          style={styles.input}
          value={timeFree}
          onChangeText={text => setTimeFree(text)}
          placeholder="Enter time free for appointments"
          maxLength={255}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Profession</Text>
        <TextInput
          style={styles.input}
          value={profession}
          onChangeText={text => setProfession(text)}
          placeholder="Enter profession"
          maxLength={255}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
