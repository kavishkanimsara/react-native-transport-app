import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Navigation from './routes/Navigation';
import { ClickCountProvider } from './context/ClickCountContext';

export default function App() {
  return (
    <ClickCountProvider>
    <SafeAreaView style={styles.safeArea}>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaView>
    </ClickCountProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FBF8',
  },
});