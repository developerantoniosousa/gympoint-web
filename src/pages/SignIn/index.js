import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import logo from '../../assets/images/logo.svg';

import { signInRequest } from '~/store/modules/auth/actions';

import Form from '~/components/Form';
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
        <strong>SEU E-MAIL</strong>
        <Input name="email" type="email" onChange={() => { }} placeholder="exemplo@email.com" />
        <strong>SUA SENHA</strong>
        <Input name="password" type="password" onChange={() => { }} placeholder="***********" />
        <Button type="submit">{loading ? 'Carregando...' : 'Entrar no sistema'}</Button>
      </Form>
    </Container>
  );
}
