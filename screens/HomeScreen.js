// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Image ,Platform ,Dimensions } from 'react-native';
import travelImage from '../assets/images/travel.png'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

const { width } = Dimensions.get('window');
export default function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'Poppins_700Bold' }]}>Travilia</Text>
      <Image
        source={travelImage} 
        style={styles.avatar}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FBF8',
  },
  title: {
    fontSize: 40,
    color: '#333',
    fontWeight: '700',
    marginBottom: 20,
    fontFamily: Platform.select({
      android: 'Poppins_700Bold',
      ios: 'Inter-Black',
    }),
  },
  avatar: {
    width: width , 
    height: width, 
    borderRadius: 100, 
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 18,
  },
});