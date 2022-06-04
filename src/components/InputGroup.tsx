import React from 'react';
import Input from './Input';
import Button from './Button';
import { IInput } from '../interfaces';

const InputGroup: React.FC<IInput> = ({ formik }) => (
  <fieldset className="form__input-group">
    <div className="input-group mb-3">
      <span className="input-group-text input-group__addon" id="basic-addon1">
        <i className="bi bi-layout-text-sidebar-reverse" />
      </span>
      <Input formik={formik} />
      <Button />
    </div>
  </fieldset>
);

export default InputGroup;
