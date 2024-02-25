import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function NearbyDoctors({ contactType, selectedDate }) {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch nearby doctors based on contactType
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/nearbyDoctors?contactType=${contactType}&date=${selectedDate}`);
        setDoctors(response.data.doctors);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching nearby doctors:', error);
        setIsLoading(false);
      }
    };

    fetchDoctors();
  }, [contactType, selectedDate]);

  const viewTimings = (timings) => {
    alert(`Available Timings: ${timings}`);
  };

  const renderDoctor = (doctor) => (
    <View key={doctor._id} style={{ borderWidth: 1, borderColor: 'black', padding: 10, margin: 5 }}>
      <Text>Name: {doctor.fullName}</Text>
      <Text>Email: {doctor.email}</Text>
      <Text>Location of Practice: {doctor.locationOfPractice}</Text>
      <Text>Rating: {doctor.rating}</Text>
      <TouchableOpacity onPress={() => viewTimings(doctor.timefree)}>
        <Text>View Timings</Text>
      </TouchableOpacity>
    </View>
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
  <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 50 }}>       
    <ScrollView>
        {doctors.length === 0 ? (
          <Text>None available Today</Text>
        ) : (
          <View>
            <Text>Nearby Doctors</Text>
            {doctors.map(renderDoctor)}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
