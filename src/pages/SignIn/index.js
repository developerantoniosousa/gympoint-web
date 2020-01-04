import React from 'react';
import { Form } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import logo from '../../assets/images/logo.svg';

import { signInRequest } from '~/store/modules/auth/actions';

import Input from '~/components/Input';
import Button from '~/components/Button';
import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail invalido').required('E-mail obrigatório'),
  password: Yup.string().min(6, 'No mínimo 6 caracteres').required('Senha obrigatória')
})

export default function SignIn() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="Gympoint" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" onChange={() => { }} placeholder="exemplo@email.com" />
        <Input name="password" type="password" onChange={() => { }} placeholder="***********" />
        <Button type="submit">{loading ? 'Carregando...' : 'Entrar no sistema'}</Button>
      </Form>
    </Container>
  );
}
