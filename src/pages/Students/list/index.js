import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import history from '~/services/history';

import Container from '~/components/Container';
import Content from '~/components/Content';
import Heading from '~/components/Heading';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Row from '~/components/Row';
import { AgeHead, AgeColumn } from './styles';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');

  async function loadStudents() {
    const response = await api.get('/students', {
      params: {
        q: search
      }
    });

    setStudents(response.data);
  }

  useEffect(() => {
    loadStudents();
  }, [search]);

  function handleAddStudent() {
    history.push('/students/add');
  }

  function handleEditStudent(id) {
    history.push(`/students/update/${id}`);
  }

  async function handleDeleteStudent(id) {
    await api.delete(`/students/${id}`);

    setStudents(
      students.filter(student => student.id !== id)
    );
  }

  return (
    <Container>
      <Row>
        <Heading>Gerenciando alunos</Heading>
        <Row>
          <Button type="button" size="medium" onClick={handleAddStudent}>CADASTRAR</Button>
          <Input
            name="search"
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar aluno"
            style={{ width: 237, height: 36, margin: 0, marginLeft: 16 }}
          />
        </Row>
      </Row>
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
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <AgeColumn>{student.age}</AgeColumn>
                <td>
                  <button
                    type="button"
                    className="info"
                    onClick={() => handleEditStudent(student.id)}>editar</button>
                  <button
                    type="button"
                    className="danger"
                    onClick={() => handleDeleteStudent(student.id)}>apagar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
