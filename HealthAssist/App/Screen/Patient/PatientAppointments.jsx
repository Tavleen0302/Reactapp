import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PatientAppointments() {
  // Sample data for nearby doctors and their availability
  const nearbyDoctors = [
    { id: 1, name: 'Dr. John Doe', rating: 4.5, availability: ['9:00 AM - 10:00 AM', '2:00 PM - 4:00 PM'] },
    { id: 2, name: 'Dr. Jane Smith', rating: 4.2, availability: ['10:00 AM - 12:00 PM', '3:00 PM - 5:00 PM'] },
    { id: 3, name: 'Dr. Michael Johnson', rating: 4.8, availability: ['8:00 AM - 11:00 AM', '1:00 PM - 3:00 PM'] },
    // Add more sample data as needed
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleRequestSent = (doctorId) => {
    // Logic to indicate request sent to the selected doctor
    setSelectedDoctor(doctorId);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Title */}
        <Text style={styles.title}>Nearby Doctors</Text>

        {/* Doctor List */}
        {nearbyDoctors.map(doctor => (
          <View key={doctor.id} style={styles.doctorContainer}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.doctorRating}>Rating: {doctor.rating}</Text>
            <Text style={styles.availabilityTitle}>Availability:</Text>
            <View style={styles.availabilityContainer}>
              {doctor.availability.map((time, index) => (
                <Text key={index} style={styles.availabilityTime}>{time}</Text>
              ))}
            </View>
            {selectedDoctor === doctor.id ? (
              <TouchableOpacity style={styles.requestSentButton} disabled={true}>
                <Text style={styles.requestSentText}>Request Sent</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.bookButton}
                onPress={() => handleRequestSent(doctor.id)}
                disabled={!doctor.availability.length} // Disable booking if no availability
              >
                <Text style={styles.bookButtonText}>Book Appointment</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 50, // Adjusted padding to lower the main title
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  doctorContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  doctorRating: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  availabilityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  availabilityContainer: {
    marginBottom: 10,
  },
  availabilityTime: {
    fontSize: 16,
    color: '#007bff',
  },
  bookButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  requestSentButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  requestSentText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});