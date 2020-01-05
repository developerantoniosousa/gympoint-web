import React from 'react';
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

export default function AddStudent() {
  function handleGoBack() {
    history.goBack();
  }

  async function handleSubmit(data) {
    try {
      await api.post('/students', data);

      toast.success('Estudante cadastrado!')
      history.goBack();
    } catch (err) {
      toast.error('Falha no cadastro, verifique os dados.')
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Row>
          <Heading>Cadastro de aluno</Heading>
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
