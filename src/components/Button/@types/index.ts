import { ButtonHTMLAttributes, CSSProperties } from 'react';

export enum ButtonMode {
  neutral = 'neutral-btn-mode',
  danger = 'danger-btn-mode',
}

export type ButtonComponentProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * @default ButtonMode.neutral
   */
  mode?: ButtonMode;
  className?: string;
  style?: CSSProperties;
};
