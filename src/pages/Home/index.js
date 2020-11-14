import React, { useEffect, useState } from 'react';

import MapView from 'react-native-maps';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

import { Container } from './styles';

const Home = () => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    let subscriber;

    async function getPosition() {
      try {
        const { granted } = await requestPermissionsAsync();
        if(!granted) {
          throw new Error('Location permisson not granted');
        }

        subscriber = await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 5000,
          distanceInterval: 10
        }, location => {
          setLocation(location.coords);
        });

      } catch(err) {
        console.log(err);
      }
    }
    getPosition();
  }, []);

  return (
    <Container>
      <MapView 
        style={{flex: 1,}}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
      />
    </Container>
  );
}

export default Home;