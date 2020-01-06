import React, { useMemo, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { parseISO, addMonths, format } from 'date-fns';

import AsyncSelect from 'react-select/async';
import Select from 'react-select';

import api from '~/services/api';
import history from '~/services/history';
import { formatPrice } from '~/util/format';

import Container from '~/components/Container';
import Content from '~/components/Content';
import Heading from '~/components/Heading';
import Form from '~/components/Form';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Row from '~/components/Row';
import Column from '~/components/Column';
import Datepicker from '~/components/Datepicker';

const today = new Date();

const SelectStyles = {
  container: styles => ({
    ...styles,
    marginBottom: 20
  }),
  control: styles => ({
    ...styles,
    height: 45
  }),
  indicatorsContainer: styles => ({
    ...styles,
    height: 45
  })
}

export default function AddRegistration() {
  const [plans, setPlans] = useState([]);
  const [planActive, setPlanActive] = useState(null);
  const [studentActive, setStudentActive] = useState(null);
  const [date, setDate] = useState(null);
  // const [studentInput, setStudentInput] = useState('');

  async function loadStudents(name = '') {
    const response = await api.get('/students', {
      params: {
        q: name
      }
    });
    return response.data.map(student => ({
      value: student.id,
      label: student.name,
    }));
  }

  useEffect(() => {
    (async () => {
      const response = await api.get('/plans');
      setPlans(
        response.data.map(plan => ({ ...plan, value: plan.id, label: plan.title }))
      );
    })();
  }, []);

  function handleGoBack() {
    history.goBack();
  }

  async function handleSubmit() {
    try {
      await api.post('/registrations', {
        student_id: studentActive,
        plan_id: planActive,
        start_date: new Date(date).toISOString()
      });

      toast.success('Matrícula cadastrado!')
      history.goBack();
    } catch (err) {
      toast.error('Falha no cadastro, verifique os dados.')
    }
  }

  function handleStudentChange({ value }) {
    setStudentActive(value);
  }

  function handlePlanChange({ id }) {
    setPlanActive(id);
  }

  const totalPrice = useMemo(() => {
    if (!plans.length || !planActive || !date) return formatPrice(0);

    const { price, duration } = plans.find(item => item.id === planActive);
    return formatPrice(duration * price);
  }, [plans, planActive, date]);

  const endDate = useMemo(() => {
    if (!plans.length || !planActive || !date) return '';

    const { duration } = plans.find(item => item.id === planActive);
    return format(
      addMonths(parseISO(date), duration),
      'dd/MM/yyyy'
    );
  }, [plans, planActive, date]);

  return (
    <Container size="medium">
      <Form
        onSubmit={handleSubmit}>
        <Row>
          <Heading>Cadastro de matrícula</Heading>
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
            <strong>ALUNO</strong>
            <AsyncSelect
              placeholder="Selecione"
              styles={SelectStyles}
              cacheOptions
              loadOptions={loadStudents}
              onChange={handleStudentChange}
            />
          </Column>
          <Row>
            <Column>
              <strong>PLANO</strong>
              <Select
                placeholder="Selecione"
                styles={SelectStyles}
                onChange={handlePlanChange}
                options={plans}
              />
            </Column>
            <Column>
              <strong>DATA DE INÍCIO</strong>
              <Datepicker
                name="start_date"
                placeholder="Escolha a data"
                selected={date}
                minDate={today}
                onChange={DpValue =>
                  setDate(`${new Date(DpValue).toISOString()}`)
                }
              />
            </Column>
            <Column>
              <strong>DATA DE TÉRMINO</strong>
              <Input name="" value={endDate} readOnly />
            </Column>
            <Column>
              <strong>VALOR FINAL</strong>
              <Input name="" value={totalPrice} readOnly />
            </Column>
          </Row>
        </Content>
      </Form >
    </Container >
  );
}
