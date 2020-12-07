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
  height: 56px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  padding: 0 10px;
`;

export const LogoImg = styled.Image`
  height: 26.3999999px;
  width: 140px;
`;

export const RowContent = styled.View``;

export const RowList = styled(FlatList as new () => FlatList<Users>).attrs({
  numColumns: 1,
})`
  flex: 1;
  padding: 0 10px;
`;

export const Games = styled.View`
  flex: 1;
  margin-top: 16px;
`;

export const CoverImg = styled.Image`
  height: 180px;
  width: 350px;
  align-self: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const OverlayView = styled.View`
  width: 350px;
  background-color: #512da8;
  height: 50px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const OverlayText = styled.Text`
  width: 300px;
  color: #fff;
  font-weight: bold;
  padding: 5px 10px;
`;
export const OverlaySubText = styled.Text`
  width: 300px;
  color: #fff;
  padding: 5px 10px;
  font-size: 13px;
`;
export const Tags = styled(FlatList as new () => FlatList<Users>).attrs({
  numColumns: 1,
})`
  flex: 1;
  flex-direction: row;
`;
export const Tag = styled.Text`
  background-color: #e0e0e0;
  width: 70px;
  padding: 5px 5px;
  text-align: center;
  border-radius: 30px;
  margin-top: 5px;
  margin-left: 5px;
`;

export const UserContent = styled.View`
  flex-direction: row;
  margin-top: 56px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
`;

export const SideText = styled.Text`
  font-size: 28px;
  color: #000;
  width: 160px;
  font-weight: 500;
  line-height: 32px;
`;
export const AvatarImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
