import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';

export default function Doctorsignup2({ setScreen}) {
  const [medicalLicense, setMedicalLicense] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [locationOfPractice, setLocationOfPractice] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleDocumentPick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (result.type === 'success') {
        setMedicalLicense(result.uri);
      }
    } catch (error) {
      console.log('Error picking document: ', error);
    }
  };

  const handleSubmit = () => {
    if (!fullName || !email || !phoneNumber || !locationOfPractice || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all details');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      Alert.alert('Error', 'Please enter a valid phone number');
      return;
    }

    const data = {
      medicalLicense: medicalLicense,
      phoneNumber: phoneNumber,
      locationOfPractice: locationOfPractice,
      fullName: fullName,
      email: email,
      password: password,
    };
    // Send data to backend
    console.log(data);
    axios.post('http://localhost:8000/registerProf', data).then((response) => {
      console.log(response.data);
      Alert.alert('Success', 'You have signed up successfully');
      setPhoneNumber('');
      setMedicalLicense('');
      setLocationOfPractice('');
      setFullName('');
      setEmail('');
      setPassword('');
      setScreen('DoctorAppointments')
    }
    ).catch((error) => {
      console.error('There was an error!', error);
      Alert.alert('Error', 'There was an error signing up');
    }
    );
  
  
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={true}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={text => setFullName(text.slice(0, 50))}
            placeholder="Enter your full name"
            maxLength={20}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text.slice(0, 50))}
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
            onChangeText={text => setPassword(text.slice(0, 20))}
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
            onChangeText={setConfirmPassword} // Just set the state directly
            placeholder="Confirm your password"
            secureTextEntry={false}
            maxLength={20}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Medical License</Text>
          <TouchableOpacity style={styles.uploadButton} onPress={handleDocumentPick}>
            <Text style={styles.uploadButtonText}>Upload Document</Text>
          </TouchableOpacity>
          {medicalLicense ? <Text>{medicalLicense}</Text> : null}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text.slice(0, 20))}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            maxLength={20}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Location of Practice</Text>
          <TextInput
            style={styles.input}
            value={locationOfPractice}
            onChangeText={text => setLocationOfPractice(text.slice(0, 50))}
            placeholder="Enter your location of practice"
            maxLength={50}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50, // Add padding to the bottom for better spacing
    backgroundColor: '#f0f8ff', // Light blue background color
    marginTop: 20, // Increase marginTop to move content down
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 2,
    color: '#333', // Dark gray text color
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc', // Light gray border color
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  uploadButton: {
    backgroundColor: '#007bff', // Blue button color
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  uploadButtonText: {
    color: '#fff', // White button text color
    fontSize: 14,
  },
  button: {
    backgroundColor: '#007bff', // Blue button color
    padding: 15,
    borderRadius: 5,
    marginTop: 10, // Reduce marginTop to move the submit button up
  },
  buttonText: {
    color: '#fff', // White button text color
  }
});