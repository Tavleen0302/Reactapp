import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';

export default function PatientSignUp({ setScreen }) {
  const [fullName, setFullName] = useState('');
  const [healthCard, setHealthCard] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [medicalInfo, setMedicalInfo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    const userData = {
      name: fullName,
      healthCard: healthCard,
      phoneNumber: phoneNumber,
      medicalInfo: medicalInfo,
      email: email,
      password: password,
    };
    axios.post('http://localhost:8000/register', userData)
      .then((response) => {
        console.log(response.data);
        Alert.alert('Success', 'You have registered successfully');
        setFullName('');
        setHealthCard('');
        setPhoneNumber('');
        setMedicalInfo('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        // Navigate to the next page
        // Assuming there's a screen called Patientfindloc
        setScreen('Patientfindloc');
      })
      .catch((error) => {
        console.error('There was an error!', error);
        Alert.alert('Error', 'There was an error registering the user');
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={text => setFullName(text)}
          placeholder="Enter your full name"
          maxLength={20}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Health Card</Text>
        <TextInput
          style={styles.input}
          value={healthCard}
          onChangeText={text => setHealthCard(text)}
          placeholder="Upload Health Card"
          maxLength={20}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          maxLength={20}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Medical Info</Text>
        <TextInput
          style={styles.input}
          value={medicalInfo}
          onChangeText={text => setMedicalInfo(text)}
          placeholder="Upload Medical Info"
          maxLength={20}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter your email"
          keyboardType="email-address"
          maxLength={20}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Enter your password"
          secureTextEntry={false}
          maxLength={20}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          placeholder="Confirm your password"
          secureTextEntry={false}
          maxLength={20}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
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
    marginTop:20,
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
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginTop: -5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
