import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Container from '~/components/Container';
import Content from '~/components/Content';
import Heading from '~/components/Heading';
import Button from '~/components/Button';
import Row from '~/components/Row';
import Form from '~/components/Form';
import Input from '~/components/Input';
import Column from '~/components/Column';

const modalStyles = {
  overlay: {
    background: 'rgba(0,0,0,0.3)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 30,
    width: 450
  }
};

export default function Helps() {
  const [helps, setHelps] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [questionActive, setQuestionActive] = useState({});
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    (async () => {
      const response = await api.get('/help-orders')
      setHelps(response.data);
    })();
  }, []);

  function handleAnswer(help) {
    setModalVisible(true);
    setQuestionActive(help);
  }

  async function handleSubmitAnswer() {
    if (!answer) return;

    setModalVisible(false);

    try {
      await api.put(`/help-orders/${questionActive.id}/answer`, {
        answer
      });

      toast.success('Resposta enviada com sucesso!');

      setHelps(
        helps.filter(item => item.id !== questionActive.id)
      );
    } catch (err) {
      console.log(err);
      toast.error('Houve algum problema, tente novamente')
    } finally {
      setQuestionActive(null);
    }
  }

  return (
    <Container size="small">
      <Row>
        <Heading>Gerenciando planos</Heading>
      </Row>
      <Content>
        <table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {helps.map(help => (
              <tr key={help.id}>
                <td>{help.student?.name || '-'}</td>
                <td>
                  <button
                    type="button"
                    className="info"
                    onClick={() => handleAnswer(help)}>responder</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
      {modalVisible && (
        <Modal
          shouldCloseOnEsc
          shouldCloseOnOverlayClick
          isOpen={modalVisible}
          onAfterOpen={() => { }}
          onRequestClose={() => setModalVisible(false)}
          style={modalStyles}
          contentLabel="Modal"
        >
          <Form onSubmit={false}>
            <strong>PERGUNTA DO ALUNO</strong>
            <p>{questionActive.question}</p>
            <Column>
              <strong>SUA RESPOSTA</strong>
              <Input
                placeholder="Resposta..."
                style={{ resize: 'none', height: 130 }}
                multiline
                name=""
                onChange={e => setAnswer(e.target.value)}
              />
            </Column>
            <Button onClick={handleSubmitAnswer}>Responder aluno</Button>
          </Form>
        </Modal>
      )
      }
    </Container >
  );
}
