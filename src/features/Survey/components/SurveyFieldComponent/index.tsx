import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { SurveyFieldType } from 'src/@types';
import { NumericInput, TextInput } from 'src/components/Input';
import { OptionBox } from 'src/components/OptionBox';
import { Description, Error, Title } from 'src/components/Typography';
import { SurveyFieldComponentProps } from '../../@types';
import './styles.css';

/** Maps filed types to their corresponding input component. */
const fieldToComponentMap = {
  [SurveyFieldType.numberInput]: NumericInput,
  [SurveyFieldType.textInput]: TextInput,
  [SurveyFieldType.option]: OptionBox,
};

/**
 * Represents a single survey field.
 */
export const SurveyFieldComponent: FC<SurveyFieldComponentProps> = ({
  field,
  error,
  onChange,
  className = '',
  value: propsValue,
}) => {
  // TODO: A controlled input might affect performance.
  const [value, setValue] = useState<typeof propsValue>(propsValue);

  /** Handles on value change */
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = e.currentTarget.value;
      const name = field.name;

      setValue(value);
      onChange?.(name, value);
    },
    [onChange, field]
  );

  useEffect(() => {
    setValue(propsValue);
  }, [propsValue]);

  /** Renders the corresponding element of survey field */
  const inputElement = useMemo(() => {
    const InputComponent = fieldToComponentMap[field.type] ?? TextInput;
    return (
      <InputComponent
        className={`--survey-field-input --sf-${field.type}`}
        placeholder={field.placeholder}
        defaultValue={field.defaultValue}
        name={field.name}
        options={field.options}
        onChange={handleChange}
        value={value}
      />
    );
  }, [field.defaultValue, field.name, field.options, field.placeholder, field.type, handleChange, value]);

  return (
    <div className={`--survey-field ${className}`}>
      <Title className="--sf-title">{field.title}</Title>
      {field.description && <Description className="--sf-desc">{field.description}</Description>}
      {inputElement}
      {error && <Error className="--sf-error">{error}</Error>}
    </div>
  );
};
