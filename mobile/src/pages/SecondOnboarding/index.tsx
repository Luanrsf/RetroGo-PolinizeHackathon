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

const SecondOnboarding: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <LogoImg source={Logo} />
      <GameImage
        source={{
          uri:
            'https://images.unsplash.com/photo-1516111143745-fbfc2ebd6352?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
        }}
      />
      <Subtitle>
        Aqui você cria seu perfil e em seguida ja esta em contato com
        colecionadores de todos os lados do país!
      </Subtitle>
      <ButtonGroup onPress={() => navigation.navigate('Feed')}>
        <ButtonText>Próximo</ButtonText>
      </ButtonGroup>
    </Container>
  );
};

export default SecondOnboarding;
