import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import CilindricalMenu from '../menu/CilindricalMenu';
import { useNavigation } from '@react-navigation/native'


const MapScreen: React.FC = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number; } | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const mapViewRef = useRef<MapView | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
    })();
  }, []);

  const centerMapToUserLocation = () => {
    if (location && mapViewRef.current) {
      mapViewRef.current.animateToRegion({
        ...location,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }, 1000);
    }
  };

  const handleSearch = async () => {
    try {
      const params = new URLSearchParams({
        key: 'AIzaSyDmqfRsS1fDe6HhjCYfhUneloEy1rgsS2c', // Substitua pela sua chave da API
        input: searchQuery,
        language: 'pt',
      });
  
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?${params}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // Lógica para lidar com as sugestões
      // Por exemplo: se (data.predictions) { ... }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <MapView
        ref={(ref) => { mapViewRef.current = ref; }}
        style={styles.map}
        initialRegion={{
          latitude: location ? location.latitude : 0,
          longitude: location ? location.longitude : 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location && <Marker coordinate={location} />}
      </MapView>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquise aqui"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity style={styles.targetButton} onPress={centerMapToUserLocation}>
        <Image source={require('../../../assets/aim.png')} style={styles.icon} />
      </TouchableOpacity>
      <CilindricalMenu navigation={navigation} currentRoute="Home" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchInput: {
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    zIndex: 5,
  },
  targetButton: {
    position: 'absolute',
    bottom: 100,
    right: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    zIndex: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default MapScreen;
