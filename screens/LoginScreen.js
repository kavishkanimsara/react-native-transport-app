import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Dimensions,
} from 'react-native';
import travelImage from '../assets/images/tourist.png';

const { width, height } = Dimensions.get('window'); 

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'Kavishka' && password === '1234') {
      navigation.navigate('Welcome', { username });
    } else {
      Alert.alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Image source={travelImage} style={styles.avatar} />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signUp}>
          Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FBF8',
    paddingHorizontal: width * 0.1, 
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: '700',
    marginBottom: height * 0.02, 
  },
  avatar: {
    width: width * 0.7,
    height: width * 0.7, 
    borderRadius: (width * 0.7) / 2, 
    marginBottom: height * 0.03,
  },
  input: {
    width: '100%',
    height: 55, 
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: width * 0.03, 
    marginBottom: height * 0.02, 
    borderWidth: 1,
    borderColor: '#f1f1f1',
    fontSize: width * 0.04,
  },
  button: {
    width: '100%',
    height: 55, 
    backgroundColor: '#000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.02, 
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: width * 0.045,
  },
  signUp: {
    color: '#000',
    marginTop: height * 0.02, 
    fontSize: width * 0.04,
  },
  signUpLink: {
    color: '#ffb746',
    fontWeight: '700',
  },
});
