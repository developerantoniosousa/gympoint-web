import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
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

export default function Updateplan({ match }) {
  const [plan, setPlan] = useState({});
  const [duration, setDuration] = useState(1);
  const [price, setPrice] = useState(0);

  const { id } = match.params;

  useEffect(() => {
    (async () => {
      const response = await api.get(`/plans/${id}`);
      setPlan(response.data);
      setDuration(response.data.duration);
      setPrice(response.data.price);
    })();
  }, [id]);

  function handleGoBack() {
    history.goBack();
  }

  async function handleSubmit(data) {
    try {
      await api.put(`/plans/${id}`, data);

      toast.success('Plano atualizado!')
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
    <Container>
      <Form initialData={plan} schema={schema} onSubmit={handleSubmit}>
        <Row>
          <Heading>Edição de plano</Heading>
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
              <p>{totalPrice}</p>
            </Column>
          </Row>
        </Content>
      </Form >
    </Container >
  );
}

Updateplan.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    })
  }).isRequired,
}
