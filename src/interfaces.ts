import { FormikProps } from 'formik';

export type ITaskStatus = 'all' | 'completed' | 'unfinished';

interface IFilterItem {
  readonly name: ITaskStatus;
  readonly id: string;
}

export interface ITask {
  readonly id: string;
  readonly name: string;
  readonly status: string;
}

export interface IFilter {
  readonly type: string;
}

export interface IFormValue {
  readonly task: string;
}

export interface IInput {
  readonly formik: FormikProps<IFormValue>;
}

export default IFilterItem;
