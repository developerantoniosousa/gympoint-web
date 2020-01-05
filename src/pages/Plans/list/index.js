import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import history from '~/services/history';
import { formatPrice } from '~/util/format';

import Container from '~/components/Container';
import Content from '~/components/Content';
import Heading from '~/components/Heading';
import Button from '~/components/Button';
import Row from '~/components/Row';
import { TableHeadCenter, TableColumnCenter } from './styles';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/plans');

      const data = response.data.map(plan => ({
        ...plan,
        price: formatPrice(plan.price),
        duration: `${plan.duration} ${plan.duration > 1 ? 'meses' : 'mês'}`
      }));

      setPlans(data);
    })();
  }, []);

  function handleAddPlan() {
    history.push('/plans/add');
  }

  function handleEditPlan(id) {
    history.push(`/plans/update/${id}`);
  }

  async function handleDeletePlan(id) {
    await api.delete(`/plans/${id}`);

    setPlans(
      plans.filter(plan => plan.id !== id)
    );
  }

  return (
    <Container size="medium">
      <Row>
        <Heading>Gerenciando planos</Heading>
        <Button type="button" size="medium" onClick={handleAddPlan}>CADASTRAR</Button>
      </Row>
      <Content>
        <table>
          <thead>
            <tr>
              <th>TÍTULO</th>
              <TableHeadCenter>DURAÇÃO</TableHeadCenter>
              <TableHeadCenter>VALOR p/MÊS</TableHeadCenter>
              <th />
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <TableColumnCenter>{plan.duration}</TableColumnCenter>
                <TableColumnCenter>{plan.price}</TableColumnCenter>
                <td>
                  <button
                    type="button"
                    className="info"
                    onClick={() => handleEditPlan(plan.id)}>editar</button>
                  <button
                    type="button"
                    className="danger"
                    onClick={() => handleDeletePlan(plan.id)}>apagar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
