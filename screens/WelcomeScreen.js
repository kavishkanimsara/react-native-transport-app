import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { MaterialIcons } from '@expo/vector-icons'; // Importing icons

export default function WelcomeScreen({ route }) {
  const { username } = route.params;
  const [cars, setCars] = useState([]);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/cars?limit=20');
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  const renderCarCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.make} {item.model} ({item.year})</Text>
        
        {/* Car Information */}
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <MaterialIcons name="color-lens" size={24} color="#7f8c8d" />
            <Text style={styles.label}>Color:</Text>
            <Text style={styles.cardText}>{item.color}</Text>
          </View>
          
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <MaterialIcons name="trip-origin" size={24} color="#7f8c8d" /> {/* Updated Icon */}
            <Text style={styles.label}>Mileage:</Text>
            <Text style={styles.cardText}>{item.mileage} km</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <MaterialIcons name="attach-money" size={24} color="#7f8c8d" />
            <Text style={styles.label}>Price:</Text>
            <Text style={styles.cardText}>${item.price}</Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialIcons name="local-gas-station" size={24} color="#7f8c8d" />
            <Text style={styles.label}>Fuel Type:</Text>
            <Text style={styles.cardText}>{item.fuelType}</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <MaterialIcons name="settings" size={24} color="#7f8c8d" />
            <Text style={styles.label}>Transmission:</Text>
            <Text style={styles.cardText}>{item.transmission}</Text>
          </View>
        </View>

        {/* Features */}
        <Text style={styles.label}>Features:</Text>
        <Text style={styles.cardText}>{item.features.join(', ')}</Text>
      </View>
    </View>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'Poppins_700Bold',
  },
  cardList: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardContent: {
    paddingVertical: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333',
    fontFamily: 'Poppins_700Bold',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Poppins_400Regular',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 20,
    marginLeft: 5,
    marginBottom: 5,
  },
  label: {
    fontWeight: '700',
    fontSize: 16,
    color: '#333',
    marginRight: 5,
    marginLeft: 5,
  },
});
