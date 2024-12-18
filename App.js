import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Navigation from './Navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FBF8',
  },
});