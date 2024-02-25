import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Modal } from 'react-native';
import axios from 'axios';
import * as DocumentPicker from 'expo-document-picker';
import { Calendar } from 'react-native-calendars';



export default function ProfessionalForm({ setScreen }) {
  const [selectedDays, setSelectedDays] = useState({});
  const onDayPress = (day) => {
    const updatedSelectedDays = { ...selectedDays, [day.dateString]: { selected: true } };
    setSelectedDays(updatedSelectedDays);
    };

    

      const professionOptions = [
        { label: 'Family Doctor', value: 'Family Doctor' },
        { label: 'Pediatrician', value: 'Pediatrician' },
        { label: 'Therapist', value: 'Therapist' },
        { label: 'Dentist', value: 'Dentist' },
      ];
      

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
  const [isModalVisible, setIsModalVisible] = useState(false);


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
      setScreen('DoctorAppointments'); // Navigate to the next screen
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
          <TouchableOpacity style={styles.uploadButton} onPress={handleDocumentPick}>
            <Text style={styles.uploadButtonText}>Upload Document</Text>
          </TouchableOpacity>
          {medicalLicense ? <Text>{medicalLicense}</Text> : null}
        </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Appointment Weekdays Free</Text>
        <Calendar
            markedDates={selectedDays}
            onDayPress={onDayPress}
            markingType={'multi-dot'}
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
  <TouchableOpacity style={styles.professionInput} onPress={() => setIsModalVisible(true)}>
    <Text>{profession || 'Select Profession'}</Text>
  </TouchableOpacity>
  <Modal
    visible={isModalVisible}
    animationType="slide"
    transparent={true}
    onRequestClose={() => setIsModalVisible(false)}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        {professionOptions.map(option => (
          <TouchableOpacity
            key={option.value}
            style={styles.professionOption}
            onPress={() => {
              setProfession(option.value);
              setIsModalVisible(false);
            }}
          >
            <Text>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </Modal>
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
  professionInput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  professionOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
