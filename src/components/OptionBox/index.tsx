import React, { FC, useMemo } from 'react';
import { OptionBoxComponentProps } from './@types';
import './styles.css';

export const OptionBox: FC<OptionBoxComponentProps> = ({ className, ...props }) => {
  return useMemo(
    () => (
      <select {...props} className={`--custom-select ${className || ''}`}>
        {(props.options || []).map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    ),
    [className, props]
  );
};
