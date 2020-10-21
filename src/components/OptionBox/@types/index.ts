import { SelectHTMLAttributes } from 'react';

export type OptionBoxItem = {
  label: string;
  value: string | number;
};
export type OptionBoxComponentProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> & {
  options?: OptionBoxItem[];
};
