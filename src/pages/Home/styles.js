import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import colors from '../../enums/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  background-color: ${colors.white};
`;

export const StyledMapView = styled(MapView)`
  width: 100%;
  height: 60%;
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
  color: ${colors.white};
`;

export const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const SelectArea = styled.View`
  width: 100%;
  margin-top: 25px;
  flex-direction: row;
  justify-content: space-around;
`
export const CurrentContainer = styled.View`
  align-items: center;
  justify-content: center;
`;