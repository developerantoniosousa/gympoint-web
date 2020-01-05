import * as Yup from 'yup';

const schema = Yup.object().shape({
  title: Yup.string().required('Título é obrigatório'),
  duration: Yup.number().required('Duração é obrigatório'),
  price: Yup.number().required('Preço é obrigatário')
});

export default schema;
