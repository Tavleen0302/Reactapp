import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function PatientAppointments({ setScreen }) {
  // Sample data for nearby doctors and their availability
  const nearbyDoctors = [
    { id: 1, name: 'John Doe', rating: 4.5, availability: ['9:00 AM - 10:00 AM', '2:00 PM - 4:00 PM'] },
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleRequestSent = (doctorId) => {
    // Logic to indicate request sent to the selected doctor
    setSelectedDoctor(doctorId);
  };

  // Function to navigate to PersonalDoc page
  const goToApplication = () => {
    setScreen('Personal'); // Navigate to PersonalDoc page using setScreen
  };
  const goToFinder = () => {
    setScreen('Patientfindloc'); // Navigate to Finder page using setScreen
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
      {/* Button to go to PersonalDoc */}
      <TouchableOpacity style={styles.button} onPress={goToApplication}>
        <Text style={styles.buttonText}>Personal Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToFinder}>
        <Text style={styles.buttonText}>Finder</Text>
      </TouchableOpacity>
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
  },button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop:10, // Move the button a bit down
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
