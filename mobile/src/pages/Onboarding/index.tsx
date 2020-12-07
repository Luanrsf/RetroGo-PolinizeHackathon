import {useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
// import FeatherIcon from 'react-native-vector-icons/Feather';

import {View, Text} from 'react-native';
import Logo from '../../assets/logoPurple.png';

import {
  Container,
  GameImage,
  Subtitle,
  ButtonGroup,
  ButtonText,
  LogoImg,
} from './styles';

const Onboarding: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <LogoImg source={Logo} />
      <GameImage
        source={{
          uri:
            'https://images.unsplash.com/photo-1525799894461-3cfe39b72d69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        }}
      />
      <Subtitle>
        Bem-vindo a nossa rede social dedicada a colecionadores, em busca
        daquele game retro?
      </Subtitle>
      <ButtonGroup onPress={() => navigation.navigate('SecondOnboarding')}>
        <ButtonText>Próximo</ButtonText>
      </ButtonGroup>
    </Container>
  );
};

export default Onboarding;
