import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button'; // Importing the Button component

const App = () => {
  const handlePress = () => {
    console.log('Button pressed!');
    // Add your custom logic here
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to My App</Text>
      <Button onPress={handlePress} title="Press Me" /> {/* Using the Button component */}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default App;
