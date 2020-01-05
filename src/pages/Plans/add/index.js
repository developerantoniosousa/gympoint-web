import React, { useState, useMemo } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import schema from '~/schemas/plan';
import { formatPrice } from '~/util/format';

import Container from '~/components/Container';
import Content from '~/components/Content';
import Heading from '~/components/Heading';
import Form from '~/components/Form';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Row from '~/components/Row';
import Column from '~/components/Column';

export default function AddPlan() {
  const [duration, setDuration] = useState(1);
  const [price, setPrice] = useState(0);

  function handleGoBack() {
    history.goBack();
  }

  async function handleSubmit(data) {
    try {
      await api.post('/plans', data);

      toast.success('Plano cadastrado!')
      history.goBack();
    } catch (err) {
      toast.error('Falha no cadastro, verifique os dados.')
    }
  }

  const totalPrice = useMemo(
    () => formatPrice((Number(duration) * parseFloat(price)) || 0),
    [duration, price]
  );

  return (
    <Container size="medium">
      <Form schema={schema} onSubmit={handleSubmit}>
        <Row>
          <Heading>Cadastro de plano</Heading>
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
            <strong>TÍTULO DO PLANO</strong>
            <Input name="title" />
          </Column>
          <Row>
            <Column>
              <strong>DURAÇÃO (em meses)</strong>
              <Input
                type="number"
                value={duration}
                name="duration"
                min={1}
                onChange={e => setDuration(e.target.value)}
              />
            </Column>
            <Column>
              <strong>PLANO MENSAL</strong>
              <Input
                name="price"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </Column>
            <Column>
              <strong>PREÇO TOTAL</strong>
              <Input name="" readOnly value={totalPrice} />
            </Column>
          </Row>
        </Content>
      </Form>
    </Container >
  );
}
