import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';

import {View, Text, TouchableOpacity} from 'react-native';
import LogoDark from '../../assets/logoDark.png';

import {
  Container,
  HeaderBar,
  Title,
  ItemContent,
  ItemImage,
  TitleDescript,
  Ratting,
  Tags,
  Tag,
  ComentsTitle,
  Coments,
  RattingContent,
} from './styles';
interface Ratting {
  ratting_id: string;
  item_id: string;
  description: string;
  created_at: string;
  updated_at: string;
}

const CollectionItem: React.FC = () => {
  const [ratting, setRatting] = useState<Ratting[]>();
  const [foto, setFoto] = useState<string | null>();
  const [name, setName] = useState<string | null>();
  const [tags, setTags] = useState<string[]>();
  const navigation = useNavigation();
  useEffect(() => {
    async function loadFunctions() {
      const [
        itemName,
        itemTags,
        itemRatting,
        ItemFoto,
      ] = await AsyncStorage.multiGet([
        '@CollectionItem:Name',
        '@CollectionItem:Tags',
        '@CollectionItem:Ratting',
        '@CollectionItem:Foto',
      ]);
      setRatting(JSON.parse(itemRatting[1]));
      setFoto(ItemFoto[1]);
      setName(itemName[1]);
      setTags(JSON.parse(itemTags[1]));
    }
    loadFunctions();
  }, []);
  return (
    <Container>
      <HeaderBar>
        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
          <Icon size={24} name="x" color="#000" />
        </TouchableOpacity>
        <Title>{name}</Title>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Icon size={24} name="menu" color="#000" />
        </TouchableOpacity>
      </HeaderBar>
      <ItemContent>
        <ItemImage source={{uri: foto}} />
        <TitleDescript>{name}</TitleDescript>
        <Tags
          data={tags}
          keyExtractor={({item}) => item}
          renderItem={({item}) => <Tag>{item}</Tag>}
        />
        <RattingContent>
          <ComentsTitle>Comentarios:</ComentsTitle>
          <Ratting
            data={ratting}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Coments>{item.description}</Coments>}
          />
        </RattingContent>
      </ItemContent>
    </Container>
  );
};

export default CollectionItem;
