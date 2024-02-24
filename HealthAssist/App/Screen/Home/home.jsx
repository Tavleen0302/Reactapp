import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'; // Import Image component

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('HealthAssist/assets/output-onlinepngtools.png')} style={styles.image} /> {/* Add Image component */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Doctorbuttons')}
      >
        <Text style={styles.buttonText}>I'm a Medical Professional</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]} // Example of different button style
        onPress={() => navigation.navigate('Patientbuttons')}
      >
        <Text style={styles.buttonText}>I'm a Patient</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'green', // Default button color
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
