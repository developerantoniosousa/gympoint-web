import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo-horizontal.svg';

import { Container, User } from './styles';

export default function Header() {
  const username = useSelector(state => state.user.user.name)

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
        <button type="button">Sair do sistema</button>
      </User>
    </Container>
  );
}
