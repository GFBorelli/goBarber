import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png'

import Background from '../../components/Background'

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles.js';

const SignUp = ({ navigation }) => {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon='person-outline'
            autoCorrect={false}
            autoCaptalize='none'
            placeholder='Digite seu nome completo'
          />

          <FormInput
            icon='mail-outline'
            keyboardType='email-address'
            autoCorrect={false}
            autoCaptalize='none'
            placeholder='Digite seu email'
          />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Digite sua senha'
          />

          <SubmitButton onPress={() => { }}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Ja tenho uma conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  )
}

export default SignUp;