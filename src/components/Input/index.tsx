import React, { FC, useMemo } from 'react';
import { InputComponentProps } from './@types';
import './styles.css';

/**
 * Base custom Input element useful only for number and text types
 */
const Input: FC<InputComponentProps> = (props) => {
  return useMemo(() => <input {...props} className={`--custom-input ${props.className || ''}`} />, [props]);
};

export const TextInput: FC<Omit<InputComponentProps, 'type'>> = (props) => {
  return <Input {...props} type="text" />;
};

export const NumericInput: FC<Omit<InputComponentProps, 'type'>> = (props) => {
  return <Input {...props} type="number" step={1} />;
};
