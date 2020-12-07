import styled from 'styled-components/native';
import {FlatList} from 'react-native';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #f2f2f2;
  justify-content: center;
`;

export const GameImage = styled.Image`
  height: 180px;
  width: 300px;
  align-self: center;
`;

export const Subtitle = styled.Text`
  color: #4f4f4f;
  font-size: 18px;
  font-weight: 400;
  width: 250px;
  margin-top: 32px;
`;

export const ButtonGroup = styled.TouchableOpacity`
  width: 300px;
  background-color: #512da8;
  height: 52px;
  border-radius: 16px;
  margin-top: 76px;
`;
export const ButtonText = styled.Text`
  color: #f2f2f2;
  flex: 1;
  text-align: center;
  margin-top: 14px;
`;
export const LogoImg = styled.Image`
  position: absolute;
  top: 25px;
`;
