import React from 'react';
import { useFormik, FormikProps, FormikHelpers } from 'formik';
import _ from 'lodash';
import { useAppDispatch } from '../hooks/hooks';
import { addTask } from '../slices/tasksSlice';
import { ITask, IFormValue, ITaskStatus } from '../interfaces';
import validationSchema from '../validationSchema';
import InputGroup from './InputGroup';

const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const formik: FormikProps<IFormValue> = useFormik<IFormValue>({
    initialValues: { task: '' },
    validationSchema,
    onSubmit: (values: IFormValue, actions: FormikHelpers<IFormValue>): void => {
      const status: ITaskStatus = 'unfinished';
      const task: ITask = {
        id: _.uniqueId(),
        name: values.task,
        status,
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
};

export default Form;
