import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../enums/colors';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 155px;
  height: 83px;
  border-radius: 15px;
  background-color: ${colors.darkOrange};
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 18px;
  position: absolute;
  bottom: 12px;
`;

export const Gradient = styled(LinearGradient)`
  flex: 1;
  opacity: ${props => props.isSelected ? 1 : 0.5};
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 15px;
`;