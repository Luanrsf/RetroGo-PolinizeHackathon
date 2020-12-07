import styled from 'styled-components/native';
import {FlatList} from 'react-native';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #f2f2f2;
  justify-content: space-between;
`;

export const LogoImg = styled.Image`
  margin-top: 150px;
`;
export const Headertitle = styled.Text`
  font-size: 28px;
  max-width: 200px;
  line-height: 36px;
  text-align: center;
  font-weight: 600;
  margin-top: -50px;
`;
export const Subtitle = styled.Text`
  font-size: 16px;
  max-width: 200px;
  line-height: 36px;
  text-align: center;
  font-weight: 400;
`;
export const ButtonGroup = styled.TouchableOpacity`
  margin-bottom: 100px;
  width: 200px;
  background-color: #512da8;
  height: 46px;
  border-radius: 16px;
`;
export const ButtonText = styled.Text`
  color: #f2f2f2;
  flex: 1;
  text-align: center;
  margin-top: 12px;
`;
