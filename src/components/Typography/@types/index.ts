export enum FontStyle {
  regular = 'regular-typo-style',
  bold = 'bold-typo-style',
  italic = 'italic-typo-style',
}

export enum FontSize {
  small = 'small-typo-size',
  medium = 'medium-typo-size',
  large = 'large-typo-size',
}

export enum FontColor {
  warning = 'warning-typo-color',
  danger = 'danger-typo-color',
  light = 'light-typo-color',
  dark = 'dark-typo-color',
}

export type TypographyComponentProps = {
  size?: FontSize;
  style?: FontStyle;
  color?: FontColor;
  className?: string;
};

export type TypographyVariantProps = Omit<TypographyComponentProps, 'size' | 'style'>;
