import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Welcome to the Home Screen</Text>
      </View>
      <View style={{ marginBottom: 50 }}>
        <Button
          title="Medical Professional"
          onPress={() => navigation.navigate('buttons')}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Button
          title="Patient"
          onPress={() => navigation.navigate('buttons')}
        />
      </View>
    </View>
  );
}
