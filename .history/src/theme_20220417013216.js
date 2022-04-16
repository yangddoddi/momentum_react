const calcRem = (size) => `${size / 16}rem`;

const fontSize = {
  xsmall: calcRem(14),
  small: calcRem(16),
  base: calcRem(18),
  large: calcRem(20),
  xlarge: calcRem(22),
  xxlarge: calcRem(24),
  subtitle: calcRem(48),
  title: calcRem(52),
};
