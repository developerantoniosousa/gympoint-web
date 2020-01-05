import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import schema from '~/schemas/student';

import Container from '~/components/Container';
import Content from '~/components/Content';
import Heading from '~/components/Heading';
import Form from '~/components/Form';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Row from '~/components/Row';
import Column from '~/components/Column';

export default function UpdateStudent({ match }) {
  const [student, setStudent] = useState({});

  const { id } = match.params;

  useEffect(() => {
    (async () => {
      const response = await api.get(`/students/${id}`);
      setStudent(response.data);
    })();
  }, [id]);

  function handleGoBack() {
    history.goBack();
  }

  async function handleSubmit(data) {
    try {
      await api.put(`/students/${id}`, data);

      toast.success('Estudante atualizado!')
      history.goBack();
    } catch (err) {
      toast.error('Falha no cadastro, verifique os dados.')
    }
  }

  return (
    <Container>
      <Form initialData={student} schema={schema} onSubmit={handleSubmit}>
        <Row>
          <Heading>Edição de aluno</Heading>
          <Row>
            <Button
              state="secundary"
              size="small"
              onClick={handleGoBack}
              style={{ marginRight: 16 }}
            >VOLTAR</Button>
            <Button
              type="submit"
              size="small"
            >SALVAR</Button>
          </Row>
        </Row>
        <Content>
          <Column>
            <strong>NOME COMPLETO</strong>
            <Input name="name" placeholder="John Doe" />
          </Column>
          <Column>
            <strong>ENDEREÇO DE E-MAIL</strong>
            <Input name="email" placeholder="exemplo@email.com" />
          </Column>
          <Row>
            <Column>
              <strong>IDADE</strong>
              <Input name="age" />
            </Column>
            <Column>
              <strong>PESO (em kg)</strong>
              <Input name="weight" />
            </Column>
            <Column>
              <strong>ALTURA</strong>
              <Input name="height" />
            </Column>
          </Row>
        </Content>
      </Form >
    </Container >
  );
}

UpdateStudent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    })
  }).isRequired,
}
