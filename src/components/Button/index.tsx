import React, { FC, useMemo } from 'react';
import { ButtonComponentProps, ButtonMode } from './@types';
import './styles.css';

/**
 * Renders memoized button
 */
export const Button: FC<ButtonComponentProps> = (props) => {
  return useMemo(
    () => (
      <button {...props} className={`--custom-btn ${props.mode || ButtonMode.neutral} ${props.className}`}>
        {props.children}
      </button>
    ),
    [props]
  );
};
