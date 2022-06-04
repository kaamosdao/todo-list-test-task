import React from 'react';
import { useFormik, FormikProps, FormikHelpers } from 'formik';
import _ from 'lodash';
import { useAppDispatch } from '../hooks/hooks';
import { addTask } from '../slices/tasksSlice';
import { ITask, IFormValue } from '../interfaces';
import validationSchema from '../validationSchema';
import InputGroup from './InputGroup';

const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const formik: FormikProps<IFormValue> = useFormik<IFormValue>({
    initialValues: { task: '' },
    validationSchema,
    onSubmit: (values: IFormValue, actions: FormikHelpers<IFormValue>): void => {
      const task: ITask = {
        id: _.uniqueId(),
        name: values.task,
        status: 'unfinished',
      };
      dispatch(addTask(task));
      actions.resetForm();
    },
  });

  return (
    <form className="form needs-validation" onSubmit={formik.handleSubmit}>
      <InputGroup formik={formik} />
    </form>
  );
  // const initialValues: IFormValue = { task: '' };
  // return (
  //   <Formik
  //     initialValues={initialValues}
  //     onSubmit={(values, actions): void => {
  //       const task: ITask = {
  //         id: _.uniqueId(),
  //         name: values.task,
  //         status: 'unfinished',
  //       };
  //       dispatch(addTask(task));
  //       actions.resetForm();
  //     }}
  //   >
  //     {(formik) => (
  //       <Form className="form needs-validation">
  //         <InputGroup formik={formik} />
  //       </Form>
  //     )}
  //   </Formik>
};

export default Form;
