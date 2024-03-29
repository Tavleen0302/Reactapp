import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function DoctorAppointments({ setScreen }) {
  // Sample data for past and current appointments
  const pastAppointments = [];
  const currentAppointments = [
    { patientName: 'Alice Cooper', appointmentDate: '2028-11-05', appointmentTime: '09:00 AM' },
  ];

  const handlePersonalDocNavigation = () => {
    // Set screen to 'PersonalDoc'
    setScreen('PersonalDoc');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Spacer */}
      <View style={{ height: 20 }} />

      <Text style={styles.title}>Appointments</Text>

      {/* Spacer */}
      <View style={{ height: 20 }} />

      {/* Past Appointments Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Past Appointments</Text>
        {pastAppointments.length === 0 ? (
          <Text style={styles.noAppointmentText}>None Right Now</Text>
        ) : (
          pastAppointments.map((appointment, index) => (
            <View key={index} style={styles.appointment}>
              <Text style={styles.patientName}>{appointment.patientName}</Text>
              <Text style={styles.appointmentInfo}>{appointment.appointmentDate} at {appointment.appointmentTime}</Text>
            </View>
          ))
        )}
      </View>

      {/* Current Appointments Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Current Appointments</Text>
        {currentAppointments.map((appointment, index) => (
          <View key={index} style={styles.appointment}>
            <Text style={styles.patientName}>{appointment.patientName}</Text>
            <Text style={styles.appointmentInfo}>{appointment.appointmentDate} at {appointment.appointmentTime}</Text>
          </View>
        ))}
      </View>

      {/* Button to set screen to 'PersonalDoc' */}
      <TouchableOpacity style={styles.button} onPress={handlePersonalDocNavigation}>
        <Text style={styles.buttonText}>Go to PersonalDoc</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f8ff',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#007bff',
  },
  appointment: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  appointmentInfo: {
    fontSize: 16,
    color: '#666',
  },
  noAppointmentText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20, // Move the button a bit down
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
