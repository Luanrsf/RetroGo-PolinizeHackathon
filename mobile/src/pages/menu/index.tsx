import {useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {View, Text} from 'react-native';
import Logo from '../../assets/logoPurple.png';

import {
  Container,
  ExitContent,
  ExitText,
  TopContent,
  AvatarImage,
  NameText,
  EmailText,
  Options,
  OptionText,
} from './styles';

const Menu: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TopContent>
        <AvatarImage
          source={{
            uri:
              'https://avatars0.githubusercontent.com/u/60244880?s=460&u=77e7ef9c74cd9290c52e83f5edd1809b18e3bbce&v=4',
          }}
        />
        <NameText>Luan Ramos</NameText>
        <EmailText>luanramossfarias@gmail.com</EmailText>
      </TopContent>
      <Options>
        <Icon size={36} name="user" color="#828282" />
        <OptionText>Perfil</OptionText>
      </Options>
      <Options>
        <Icon size={36} name="book-open" color="#828282" />
        <OptionText>Meus Jogos</OptionText>
      </Options>
      <Options>
        <Icon size={36} name="tool" color="#828282" />
        <OptionText>Configurações</OptionText>
      </Options>
      <Options>
        <Icon size={36} name="?" color="#828282" />
        <OptionText>Sobre</OptionText>
      </Options>
      <Options onPress={() => navigation.navigate('Feed')}>
        <Icon size={36} name="arrow-left" color="#828282" />
      </Options>
      <ExitContent onPress={() => navigation.navigate('Login')}>
        <ExitText>Exit</ExitText>
      </ExitContent>
    </Container>
  );
};

export default Menu;
