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
  justify-content: space-between;
`;
export const TopContent = styled.View`
  width: 100%;
  padding: 20px 20px;
  background-color: #f9f9f9;
`;
export const AvatarImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const NameText = styled.Text`
  color: #4f4f4f;
  font-size: 24px;
  margin-top: 16px;
`;
export const EmailText = styled.Text`
  color: #828282;
  font-size: 16px;
  margin-top: 8px;
`;
export const Options = styled.TouchableOpacity`
  height: 57px;
  width: 100%;
  flex-direction: row;
  padding: 0 20px;
  align-items: center;
  color: #828282;
`;
export const OptionText = styled.Text`
  margin-left: 16px;
  font-size: 22px;
  color: #828282;
`;

export const ExitContent = styled.TouchableOpacity`
  height: 57px;
  /* position: absolute;
  bottom: 0; */
  background-color: #f9f9f9;
  width: 100%;
`;
export const ExitText = styled.Text`
  text-align: center;
  margin-top: 16px;
`;
