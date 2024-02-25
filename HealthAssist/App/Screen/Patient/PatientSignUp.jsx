import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function PatientSignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    healthCardNumber: '',
    photo: '',
    medicalInfoAttachment: '',
    dateOfBirth: '',
    address: '',
  });

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSignUpPress = () => {
    // Add your sign-up logic here
    console.log('Sign Up button pressed!', formData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => handleInputChange('password', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={(text) => handleInputChange('firstName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(text) => handleInputChange('lastName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={(text) => handleInputChange('phoneNumber', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Health Card Number"
        onChangeText={(text) => handleInputChange('healthCardNumber', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Photo URL"
        onChangeText={(text) => handleInputChange('photo', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Medical Info Attachment URL"
        onChangeText={(text) => handleInputChange('medicalInfoAttachment', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        onChangeText={(text) => handleInputChange('dateOfBirth', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={(text) => handleInputChange('address', text)}
      />
      <TouchableOpacity onPress={handleSignUpPress} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
