import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '../../assets/images/logo-horizontal.svg';

import { Container, User } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  const username = useSelector(state => state.user.user.name);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="Gympoint" />
        <ul>
          <li><Link to="/">ALUNOS</Link></li>
          <li><Link to="/">PLANOS</Link></li>
          <li><Link to="/">MATRÍCULAS</Link></li>
          <li><Link to="/">PEDIDOS DE AUXÍLIO</Link></li>
        </ul>
      </div>
      <User>
        <strong>{username}</strong>
        <button type="button" onClick={handleLogout}>Sair do sistema</button>
      </User>
    </Container>
  );
}
