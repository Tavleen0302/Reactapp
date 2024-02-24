import React from 'react';
import { View, Text, Button } from 'react-native';

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
