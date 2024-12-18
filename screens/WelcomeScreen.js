import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useClickCount } from '../context/ClickCountContext'; // Import the custom hook

export default function WelcomeScreen({ route }) {
  const { username } = route.params;
  const { clickCount, incrementClickCount } = useClickCount(); // Access context value and function
  const [cars, setCars] = useState([]);

  // Fetch car data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/cars?limit=5');
        const data = await response.json();
        setCars(data); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Handle click on a car item
  const handleCarClick = () => {
    incrementClickCount(); 
  };

  // Render each car's card
  const renderCarCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={handleCarClick}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.make} {item.model} ({item.year})</Text>
        <Text>Color: {item.color}</Text>
        <Text>Mileage: {item.mileage} km</Text>
        <Text>Price: ${item.price}</Text>
        <Text>Fuel Type: {item.fuelType}</Text>
        <Text>Transmission: {item.transmission}</Text>
        <Text>Features: {item.features.join(', ')}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hello, {username}!</Text>
      <FlatList
        data={cars}
        renderItem={renderCarCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cardList}
      />
      
      {/* Floating button */}
      <TouchableOpacity style={styles.floatingButton} onPress={incrementClickCount}>
        <Text style={styles.floatingButtonText}>{clickCount}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
  },
  cardList: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
  },
  cardContent: {
    paddingVertical: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,  
    right: 20,  
    backgroundColor: '#6200ee',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    zIndex: 0,   
  },
  floatingButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
