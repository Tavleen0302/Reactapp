import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import * as DocumentPicker from 'expo-document-picker';

export default function PatientSignUp({ setScreen }) {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for uploaded health card and medical info
  const [healthCardURI, setHealthCardURI] = useState('');
  const [medicalInfoURI, setMedicalInfoURI] = useState('');

  // Function to handle health card upload
  const handleHealthCardPick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (result.type === 'success') {
        setHealthCardURI(result.uri);
      }
    } catch (error) {
      console.log('Error picking health card: ', error);
    }
  };

  // Function to handle medical info upload
  const handleMedicalInfoPick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (result.type === 'success') {
        setMedicalInfoURI(result.uri);
      }
    } catch (error) {
      console.log('Error picking medical info: ', error);
    }
  };

  const handleSubmit = () => {
    // Your form submission logic here
    // This function is responsible for submitting the form data to the server
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
          secureTextEntry={true}
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
          secureTextEntry={true}
          maxLength={20}
        />
      </View>
      <TouchableOpacity style={styles.uploadButton} onPress={handleHealthCardPick}>
        <Text style={styles.buttonText}>Upload Health Card</Text>
      </TouchableOpacity>
      {healthCardURI ? <Text>{healthCardURI}</Text> : null}
      <TouchableOpacity style={styles.uploadButton} onPress={handleMedicalInfoPick}>
        <Text style={styles.buttonText}>Upload Medical Info</Text>
      </TouchableOpacity>
      {medicalInfoURI ? <Text>{medicalInfoURI}</Text> : null}
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
    marginTop: 20,
    backgroundColor: '#f0f8ff', // Light blue background color
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
  uploadButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#007bff', // Blue button color
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50', // Change button color to green
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
});