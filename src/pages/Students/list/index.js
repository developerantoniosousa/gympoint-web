import React from 'react';
import { Form } from '@rocketseat/unform';

import Container from '~/components/Container';
import Content from '~/components/Content';
import Heading from '~/components/Heading';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Row from '~/components/Row';
import { AgeHead, AgeColumn } from './styles';

const range = [1, 2, 3, 5, 4, 6, 7, 8, 9, 10, 0];

export default function Students() {
  function handleAddStudent() {

  }

  return (
    <Container>
      <Form>
        <Row>
          <Heading>Gerenciando alunos</Heading>
          <Row>
            <Button type="submit" size="medium" onClick={handleAddStudent}>CADASTRAR</Button>
            <Input
              name="search"
              type="search"
              value=""
              onChange={() => { }}
              placeholder="Buscar aluno"
              style={{ width: 237, height: 36, margin: 0, marginLeft: 16 }}
            />
          </Row>
        </Row>
      </Form>
      <Content>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <AgeHead>IDADE</AgeHead>
              <th />
            </tr>
          </thead>
          <tbody>
            {range.map(range => (<tr key={range}>
              <td>Cha Ji-Hun</td>
              <td>example@rocketseat.c</td>
              <AgeColumn>20</AgeColumn>
              <td>
                <button type="button" className="info">editar</button>
                <button type="button" className="danger">apagar</button>
              </td>
            </tr>))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
