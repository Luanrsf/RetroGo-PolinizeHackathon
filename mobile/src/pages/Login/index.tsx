import React, {useState, useEffect, useCallback} from 'react';

import {Text} from 'react-native';

import {Container} from './styles';
import {
  LogoImg,
  Headertitle,
  Subtitle,
  ButtonGroup,
  ButtonText,
} from './styles';
import Logo from '../../assets/logoPurple.png';
import {useNavigation} from '@react-navigation/native';

interface GoogleResponseData {
  id: string;
  name: string | null;
  email: string;
  photo: string | null;
  familyName: string | null;
  givenName: string | null;
}

const Login: React.FC = () => {
  const [signIn, setSignIn] = useState<GoogleResponseData>();
  const navigation = useNavigation();

  return (
    <Container>
      <LogoImg source={Logo} />
      <Headertitle>Bem vindo (a) ao Retro Go!</Headertitle>
      <ButtonGroup onPress={() => navigation.navigate('Onboarding')}>
        <ButtonText>Entrar</ButtonText>
      </ButtonGroup>
    </Container>
  );
};

export default Login;
