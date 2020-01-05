import * as Yup from 'yup';

const student = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  age: Yup.string().required('Idade é obrigatório'),
  weight: Yup.string().required('Peso é obrigatório'),
  height: Yup.string().required('Altura é obrigatório'),
});

export default student;
