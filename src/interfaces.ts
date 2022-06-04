import { FormikProps } from 'formik';

interface IFilterSwitch {
  readonly name: string,
  readonly id: string,
}

export interface ITask {
  readonly id: string,
  readonly name: string,
  readonly status: string,
}

export interface IFormValue {
  readonly task: string,
}

export interface IInput {
  readonly formik: FormikProps<IFormValue>,
}

export default IFilterSwitch;
