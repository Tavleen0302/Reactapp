import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function Doctorsignup2() {
  const [medicalLicense, setMedicalLicense] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [locationOfPractice, setLocationOfPractice] = useState('');

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
    console.log('Form submitted:', {
      medicalLicense,
      phoneNumber,
      locationOfPractice,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f8ff', // Light blue background color
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
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
    marginTop: 5,
  },
  uploadButtonText: {
    color: '#fff', // White button text color
    fontSize: 14,
  },
  button: {
    backgroundColor: '#007bff', // Blue button color
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff', // White button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

