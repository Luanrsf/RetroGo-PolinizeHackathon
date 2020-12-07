import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';

import LogoDark from '../../assets/logoDark.png';

import {View, Text} from 'react-native';
import {FlatList} from 'react-native';

import {
  Container,
  HeaderBar,
  LogoImg,
  RowContent,
  RowList,
  Games,
  CoverImg,
  OverlayView,
  OverlayText,
  OverlaySubText,
  UserContent,
  SideText,
  AvatarImage,
  Tags,
  Tag,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

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

const Feed: React.FC = () => {
  const navigation = useNavigation();
  const [games, setGames] = useState<Users[]>([]);
  const itemClick = async (
    name: string,
    tags: string[],
    ratting: Ratting[],
    foto: string,
  ) => {
    await AsyncStorage.multiSet([
      ['@CollectionItem:Name', name],
      ['@CollectionItem:Tags', JSON.stringify(tags)],
      ['@CollectionItem:Ratting', JSON.stringify(ratting)],
      ['@CollectionItem:Foto', foto],
    ]);

    navigation.navigate('CollectionItem');
  };
  useEffect(() => {
    async function loadProducts(): Promise<void> {
      await AsyncStorage.multiRemove([
        '@CollectionItem:Name',
        '@CollectionItem:Tags',
        '@CollectionItem:Ratting',
        '@CollectionItem:Foto',
      ]);
      const response = await api.get('users');
      console.log(response.data);
      setGames(response.data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <Text>teste</Text>
      <HeaderBar>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Icon size={24} name="menu" color="#000" />
        </TouchableOpacity>
        <LogoImg source={LogoDark} />
        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
          <Icon size={24} name="search" color="#000" />
        </TouchableOpacity>
      </HeaderBar>
      <RowContent>
        <UserContent>
          <SideText>{`Bom dia, Luan Ramos`}</SideText>
          <AvatarImage
            source={{
              uri:
                'https://avatars0.githubusercontent.com/u/60244880?s=460&u=77e7ef9c74cd9290c52e83f5edd1809b18e3bbce&v=4',
            }}
          />
        </UserContent>
        <RowList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <FlatList
              data={item.item.collection}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => (
                <Games>
                  <TouchableOpacity
                    onPress={() =>
                      itemClick(
                        item.descrição,
                        item.type,
                        item.avaliaçoes,
                        item.foto,
                      )
                    }>
                    <CoverImg
                      source={{
                        uri: item.foto,
                      }}
                    />
                    <OverlayView>
                      <OverlayText>{item.descrição}</OverlayText>
                    </OverlayView>
                  </TouchableOpacity>
                  <Tags
                    data={item.type}
                    keyExtractor={(type) => type.id}
                    renderItem={({item}) => <Tag>{item}</Tag>}
                  />
                </Games>
              )}
            />
          )}
        />
      </RowContent>
    </Container>
  );
};

export default Feed;
