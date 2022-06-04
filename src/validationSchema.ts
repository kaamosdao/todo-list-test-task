import * as yup from 'yup';

export default yup.object().shape({
  task: yup
    .string()
    .required('Should not be empty')
    .max(30, 'Should not exceed 30 symbols'),
});
