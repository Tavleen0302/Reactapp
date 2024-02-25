import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
export default function Doctorlogin({setScreen}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Validate email and password here if needed
    const data = {
      email: email,
      password: password,
    };
    // Send data to backend
    axios.post('http://localhost:8000/loginProf', data). then((response) => {
    // Navigate to the DoctorAppointments page
      console.log(response.data);
      Alert.alert('Success', 'You have logged in successfully');
      setEmail('');
      setPassword('');
      setScreen('PersonalDoc');
    }
    ).catch((error) => {
      console.error('There was an error!', error);
      Alert.alert('Failure', 'Your email or password is incorrect. Please try again.');
    }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text.slice(0, 40))}
          placeholder="Enter your email"
          keyboardType="email-address"
          maxLength={40}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text.slice(0, 40))}
          placeholder="Enter your password"
          secureTextEntry={false}
          maxLength={40}
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