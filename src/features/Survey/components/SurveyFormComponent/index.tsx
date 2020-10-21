import React, { FC, useCallback, useMemo, useState } from 'react';
import { SurveyFieldValue } from 'src/@types';
import { Button } from 'src/components/Button';
import { SurveyFormComponentProps } from '../../@types';
import { SurveyFieldComponent } from '../SurveyFieldComponent';
import './styles.css';

/** Illustrates a single survey form */
export const SurveyFormComponent: FC<SurveyFormComponentProps> = ({ form, className = '', onSubmit }) => {
  const [values, setValues] = useState<{ [fieldName: string]: SurveyFieldValue }>({});

  const onFieldChangeHandler = useCallback((name: string, value: SurveyFieldValue) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  // TODO: Keep the values in a Ref for better performance, otherwise this would get updated on every value change.
  const onNextClicked = useCallback(() => {
    onSubmit?.(form.name, values);
  }, [onSubmit, form.name, values]);

  const fieldElements = useMemo(() => {
    return form.fields.map((field) => (
      <SurveyFieldComponent field={field} key={field.name} onChange={onFieldChangeHandler} />
    ));
  }, [form.fields, onFieldChangeHandler]);

  return (
    <div className={`--survey-form ${className}`}>
      {fieldElements}{' '}
      <Button onClick={onNextClicked} className="next-btn">
        Continue
      </Button>
    </div>
  );
};
