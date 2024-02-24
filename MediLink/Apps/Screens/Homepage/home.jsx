import { View, Text, Button } from 'react-native';
import React from 'react';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen</Text>
      <View style={{ marginTop: 20 }}>
        <Button
          title="I'm a Medical Professional"
          onPress={() => navigation.navigate('DocButton')}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button
          title="I'm a Patient"
          onPress={() => navigation.navigate('PatientButton')}
        />
      </View>
    </View>
  );
}