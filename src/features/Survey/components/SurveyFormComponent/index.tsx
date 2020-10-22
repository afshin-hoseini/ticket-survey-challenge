import React, { FC, useCallback, useMemo, useState } from 'react';
import { SurveyFieldValue } from 'src/@types';
import { Button } from 'src/components/Button';
import { SurveyFormComponentProps, SurveyFormValuesDictionary } from '../../@types';
import { validateForm, createInitialValues } from '../../utils';
import { SurveyFieldComponent } from '../SurveyFieldComponent';
import './styles.css';

/** Illustrates a single survey form */
export const SurveyFormComponent: FC<SurveyFormComponentProps> = ({ form, className = '', onSubmit }) => {
  const [values, setValues] = useState<SurveyFormValuesDictionary>(() => createInitialValues(form));

  //TODO: Should be unset when a field has been touched.
  const [errors, setErrors] = useState<{ [field: string]: string } | undefined>(undefined);

  const onFieldChangeHandler = useCallback((name: string, value: SurveyFieldValue) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  // TODO: Keep the values in a Ref for better performance, otherwise this would get updated on every value change.
  const onNextClicked = useCallback(() => {
    const errors = validateForm(form, values);
    setErrors(errors);
    if (typeof errors === 'object' && Object.keys(errors).length > 0) {
      return;
    }

    onSubmit?.(form.name, values);
  }, [form, values, onSubmit]);

  /** Rendered field elements */
  const fieldElements = useMemo(() => {
    return form.fields.map((field) => (
      <SurveyFieldComponent
        field={field}
        key={field.name}
        onChange={onFieldChangeHandler}
        error={errors?.[field.name]}
      />
    ));
  }, [form.fields, onFieldChangeHandler, errors]);

  return (
    <div className={`--survey-form ${className}`}>
      {fieldElements}{' '}
      <Button onClick={onNextClicked} className="next-btn">
        Continue
      </Button>
    </div>
  );
};
