import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import history from '~/services/history';

import Container from '~/components/Container';
import Content from '~/components/Content';
import Heading from '~/components/Heading';
import Button from '~/components/Button';
import Row from '~/components/Row';

export default function Registrations() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/registrations');

      const data = response.data.map(registration => ({
        ...registration,
        active: registration.active ? 'sim' : 'não',
        start_date: format(parseISO(registration.start_date), "dd 'de' MMMM 'de' yyyy", { locale: pt }),
        end_date: format(parseISO(registration.end_date), "dd 'de' MMMM 'de' yyyy", { locale: pt })
      }))

      setRegistrations(data);
    })()
  }, []);

  function handleAddRegistration() {
    history.push('/registrations/add');
  }

  function handleEditRegistration(id) {
    history.push(`/registrations/update/${id}`);
  }

  async function handleDeleteRegistration(id) {
    await api.delete(`/registrations/${id}`);

    setRegistrations(
      registrations.filter(student => student.id !== id)
    );
  }

  return (
    <Container>
      <Row>
        <Heading>Gerenciando matrículas</Heading>
        <Button type="button" size="medium" onClick={handleAddRegistration}>CADASTRAR</Button>
      </Row>
      <Content>
        <table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {registrations.map(registration => (
              <tr key={registration.id}>
                <td>{registration?.student?.name}</td>
                <td>{registration?.plan?.title}</td>
                <td>{registration.start_date}</td>
                <td>{registration.end_date}</td>
                <td>{registration.active}</td>
                <td>
                  <button
                    type="button"
                    className="info"
                    onClick={() => handleEditRegistration(registration.id)}>editar</button>
                  <button
                    type="button"
                    className="danger"
                    onClick={() => handleDeleteRegistration(registration.id)}>apagar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
