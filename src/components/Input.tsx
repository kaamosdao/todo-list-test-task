import React from 'react';
import { IInput } from '../interfaces';

const Input: React.FC<IInput> = ({ formik }) => {
  const showTooltip = formik.touched.task && formik.errors.task ? 'custom-tooltip--show' : '';
  const tooltipClass = `invalid-tooltip custom-tooltip ${showTooltip}`;
  return (
    <>
      <input
        id="task"
        type="text"
        className="form-control"
        placeholder="type task..."
        aria-label="Task"
        aria-describedby="button-addon2"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.task}
      />
      <div className={tooltipClass}>
        {formik.touched.task && formik.errors.task}
      </div>
    </>
  );
};

export default Input;
