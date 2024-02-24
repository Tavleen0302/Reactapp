import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen</Text>
      <View style={{ marginTop: 20 }}>
        <Button
          title="I'm a Medical Professional"
          onPress={() => navigation.navigate('Doctorbuttons')}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button
          title="I'm a Patient"
          onPress={() => navigation.navigate('Patientbuttons')}
        />
      </View>
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
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green', // Default button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
