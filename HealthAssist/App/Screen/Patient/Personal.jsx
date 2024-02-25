import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function UserProfileUpdate({setScreen}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [healthCard, setHealthCard] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [medicalInfo, setMedicalInfo] = useState('');

  useEffect(() => {
    // Fetch user profile data when component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Make a GET request to fetch user profile data
      const response = await axios.get('http://localhost:8000/profile');
      // Update state with user profile data
      const userData = response.data;
      setFullName(userData.fullName);
      setEmail(userData.email);
      setHealthCard(userData.healthCard);
      setPhoneNumber(userData.phoneNumber);
      setMedicalInfo(userData.medicalInfo);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      Alert.alert('Error', 'Failed to fetch user profile');
    }
  };

  const handleUpdateUser = async () => {
    try {
      // Make a POST request to update user information
      await axios.post('http:/localhost:8000/updateUser', {
        fullName,
        email,
        password,
        healthCard,
        phoneNumber,
        medicalInfo,
      });
      Alert.alert('Success', 'User information updated successfully');
    } catch (error) {
      console.error('Error updating user information:', error);
      Alert.alert('Error', 'Failed to update user information');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name:</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter your full name"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Enter your password"
      />
      <Text style={styles.label}>Health Card:</Text>
      <TextInput
        style={styles.input}
        value={healthCard}
        onChangeText={setHealthCard}
        placeholder="Enter your health card number"
      />
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        placeholder="Enter your phone number"
      />
      <Text style={styles.label}>Medical Info:</Text>
      <TextInput
        style={styles.input}
        value={medicalInfo}
        onChangeText={setMedicalInfo}
        placeholder="Enter your medical information"
      />
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateUser}>
        <Text style={styles.updateButtonText}>Update Profile</Text>
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
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  updateButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
