import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function PatientSignUp2({ navigation }) {
  const [healthCard, setHealthCard] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [medicalInfo, setMedicalInfo] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', {
      healthCard,
      phoneNumber,
      medicalInfo,
    });
    // Add logic to handle form submission, such as navigating to the next page
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Health Card</Text>
        {/* Replace this TextInput with a component for uploading documents */}
        <TextInput
          style={styles.input}
          value={healthCard}
          onChangeText={text => setHealthCard(text.slice(0, 20))}
          placeholder="Upload Health Card"
          maxLength={20}
        />
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
        <Text style={styles.label}>Medical Info</Text>
        {/* Replace this TextInput with a component for uploading documents */}
        <TextInput
          style={styles.input}
          value={medicalInfo}
          onChangeText={text => setMedicalInfo(text.slice(0, 20))}
          placeholder="Upload Medical Info"
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
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});