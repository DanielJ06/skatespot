import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

import { Marker } from 'react-native-maps';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';
import Icon from '@expo/vector-icons/Feather';

import Cover from '../../assets/sktpark-cover.png';
import Hamburguer from '../../components/hamburguer';

import { 
  Container,
  ParkContainer,
  CoverImage,
  Type,
  StyledMapView,
  HeaderContainer,
  SelectArea
} from './styles';
import ToggleButton from '../../components/ToggleButton';

const Home = () => {
  const [location, setLocation] = useState({});

  const placeType = [
    {id: 1, name: 'Pistas'},
    {id: 2, name: 'Picos'}
  ]

  const { height } = Dimensions.get('window')
  const COL_HEIGHT = height * 0.8;

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
      <HeaderContainer>
        <Hamburguer />
        <Icon name="codepen" size={32} />
        <Icon name="plus-square" size={27} />
      </HeaderContainer>
      {location.latitude && location.longitude && (
        <StyledMapView
          getHeight={COL_HEIGHT}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        }}>
          <Marker
            style={{ width: 90, height: 70 }}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          >
            <ParkContainer>
              <CoverImage style={{ resizeMode: 'cover' }} source={Cover} />
              <Type>Skatepark</Type>
            </ParkContainer>
          </Marker>
        </StyledMapView>
      )}
      <SelectArea>
        {placeType.map(type => (
          <ToggleButton key={type.id} data={type} />
        ))}
      </SelectArea>
    </Container>
  );
}

export default Home;