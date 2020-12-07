import styled from 'styled-components/native';
import {FlatList} from 'react-native';

interface Users {
  id: string;
  name: string;
  email: string;
  tell: string;
  avatar: string;
  collection: Colleciton[];
}
interface Colleciton {
  id: string;
  itemCollection: string;
  type: string[];
  foto: string;
  descrição: string;
  created_at: string;
  updated_at: string;
  avaliaçoes: Ratting[];
}
interface Ratting {
  ratting_id: string;
  item_id: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #f2f2f2;
  justify-content: center;
`;

export const HeaderBar = styled.View`
  background-color: #ffff;
  position: absolute;
  top: 0;
  height: 100px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  width: 300px;
  text-align: center;
  margin-top: 28px;
`;
export const ItemContent = styled.View`
  flex: 1;
  width: 400px;
`;
export const ItemImage = styled.Image`
  width: 100%;
  height: 350px;
  margin-top: 100px;
`;
export const TitleDescript = styled.Text`
  font-size: 20px;
  padding: 10px 10px;
`;

export const Ratting = styled(FlatList as new () => FlatList<Ratting[]>).attrs({
  numColumns: 1,
})`
  flex: 1;
  padding: 10px 10px;
`;
export const Tags = styled(FlatList as new () => FlatList<Users>).attrs({
  numColumns: 5,
})`
  flex: 1;
  flex-direction: row;
`;
export const Tag = styled.Text`
  background-color: #e0e0e0;
  width: 90px;
  padding: 5px 5px;
  text-align: center;
  border-radius: 30px;
  margin-top: 5px;
  margin-left: 5px;
  font-size: 18px;
`;
export const ComentsTitle = styled.Text`
  padding: 10px 10px;
  font-size: 18px;
`;
export const Coments = styled.Text`
  padding: 10px 10px;
  background-color: #ccc;
  margin-left: 22px;
  max-width: 300px;
  margin-bottom: 8px;
`;

export const RattingContent = styled.View`
  position: absolute;
  top: 70%;
  left: 10px;
`;
