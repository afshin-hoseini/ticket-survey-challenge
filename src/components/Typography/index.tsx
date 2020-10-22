import React, { FC, useMemo } from 'react';
import { FontColor, FontSize, FontStyle, TypographyComponentProps, TypographyVariantProps } from './@types';
import './styles.css';

/** Memoized typography component */
export const Typography: FC<TypographyComponentProps> = ({
  children,
  size = FontSize.medium,
  style = FontStyle.regular,
  color = FontColor.dark,
  className,
}) => {
  return useMemo(() => <span className={`${size} ${style} ${color} ${className}`}> {children}</span>, [
    size,
    style,
    className,
    children,
    color,
  ]);
};

export const Title: FC<TypographyVariantProps> = (props) => {
  return <Typography {...props} size={FontSize.large} style={FontStyle.bold} />;
};

export const Description: FC<TypographyVariantProps> = (props) => {
  return <Typography {...props} size={FontSize.medium} style={FontStyle.regular} />;
};

export const Error: FC<TypographyVariantProps> = (props) => {
  return <Typography color={FontColor.danger} {...props} size={FontSize.small} style={FontStyle.regular} />;
};
