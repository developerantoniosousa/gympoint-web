import React from 'react';
import { Form } from '@rocketseat/unform';

import logo from '../../assets/images/logo.svg';

import Input from '../../components/Input';
import { Container } from './styles';

export default function SignIn() {
  function handleSubmit() {

  }

  return (
    <Container>
      <img src={logo} alt="Gympoint" />
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" onChange={() => { }} placeholder="exemplo@email.com" />
        <Input name="password" type="password" onChange={() => { }} placeholder="***********" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
