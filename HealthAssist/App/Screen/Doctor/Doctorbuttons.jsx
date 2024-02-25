import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from expo vector icons


export default function Doctorbuttons({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.navigate('Home')}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Set parent container position to relative
  },
  arrowContainer: {
    position: 'absolute',
    top: 20,
    left: 0, // Set left to 0 to move the arrow to the far left
    paddingHorizontal: 20, // Add horizontal padding for spacing
  },
  arrowIcon: {
    marginRight: 20, // Add margin to the right side of the arrow icon for spacing
  },
  button: {
    backgroundColor: 'black',
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
