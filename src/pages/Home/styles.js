import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import colors from '../../enums/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${colors.white};
`;

export const StyledMapView = styled(MapView)`
  width: 100%;
  height: ${props => `${props.getHeight}px`};
  background-color: ${colors.grayLight};
`;

export const ParkContainer = styled.View`
  width: 90px;
  height: 70px;
  background-color: ${colors.orange};
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
`;

export const CoverImage = styled.Image`
  width: 90px;
  height: 45px;
`;

export const Type = styled.Text`
  font-weight: bold;
  color: ${colors.white}
`;
