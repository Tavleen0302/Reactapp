import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
//import axios from 'axios';

export default function Patientfindloc({ setScreen }) {
  const [selectedProfessional, setSelectedProfessional] = useState('');
  const [selectedContact, setSelectedContact] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const handleSelectProfessional = (professional) => {
    setSelectedProfessional(professional);
  };

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setIsCalendarVisible(false);
  };

  const handleSubmit = () => {
    // Handle submission here, e.g., send data to backend
    if (!selectedProfessional || !selectedContact || !selectedDate) {
        Alert.alert('Error', 'Please select one option for each category');
        return;
    }
    userData = {
        professional: selectedProfessional,
        contact: selectedContact,
        chosenDate: selectedDate,
    };
    setScreen('Personal');
  
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Select Medical Professional:</Text>
        <TouchableOpacity
          style={[styles.checkboxButton, selectedProfessional === 'Family Doctor' && styles.selectedCheckbox]}
          onPress={() => handleSelectProfessional('Family Doctor')}
        >
          <Text style={styles.checkboxText}>Family Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.checkboxButton, selectedProfessional === 'Dentist' && styles.selectedCheckbox]}
          onPress={() => handleSelectProfessional('Dentist')}
        >
          <Text style={styles.checkboxText}>Dentist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.checkboxButton, selectedProfessional === 'Therapist' && styles.selectedCheckbox]}
          onPress={() => handleSelectProfessional('Therapist')}
        >
          <Text style={styles.checkboxText}>Therapist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.checkboxButton, selectedProfessional === 'Pediatrician' && styles.selectedCheckbox]}
          onPress={() => handleSelectProfessional('Pediatrician')}
        >
          <Text style={styles.checkboxText}>Pediatrician</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Select Form of Contact:</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.contactButton, selectedContact === 'In-Person' && styles.selectedContactButton]}
            onPress={() => handleSelectContact('In-Person')}
          >
            <Text style={styles.contactButtonText}>In-Person</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.contactButton, selectedContact === 'Online' && styles.selectedContactButton]}
            onPress={() => handleSelectContact('Online')}
          >
            <Text style={styles.contactButtonText}>Online</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.contactButton, selectedContact === 'Phone' && styles.selectedContactButton]}
            onPress={() => handleSelectContact('Phone')}
          >
            <Text style={styles.contactButtonText}>Phone</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Select Appointment Date:</Text>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setIsCalendarVisible(true)}
        >
          <Text style={styles.dateButtonText}>Select Date</Text>
        </TouchableOpacity>
        {selectedDate ? (
          <Text style={styles.selectedDateText}>Chosen Date: {selectedDate}</Text>
        ) : null}
        <Modal
          visible={isCalendarVisible}
          animationType="slide"
          onRequestClose={() => setIsCalendarVisible(false)}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ alignItems: 'flex-end', margin: 10 }}
              onPress={() => setIsCalendarVisible(false)}
            >
              <Text style={{ fontSize: 18, color: 'blue' }}>Close</Text>
            </TouchableOpacity>
            <Calendar
              onDayPress={(day) => handleSelectDate(day.dateString)}
            />
          </View>
        </Modal>
        {/* Submit button */}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Find Your Appointment</Text>
            </TouchableOpacity>
      </View>
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
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  checkboxButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  selectedCheckbox: {
    backgroundColor: '#4CAF50', // Change button color to green
  },
  checkboxText: {
    color: 'black',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  contactButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  selectedContactButton: {
    backgroundColor: '#007bff', // Blue button color
  },
  contactButtonText: {
    color: 'black',
    fontSize: 16,
  },
  dateButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  dateButtonText: {
    fontSize: 16,
  },
  selectedDateText: {
    marginTop: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#007bff', // Change button color to green
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
