// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f8f8f8',
          elevation: 0, 
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerTintColor: '#333',
        headerTitle: null,
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown :false}} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;