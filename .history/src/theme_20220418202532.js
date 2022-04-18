const calcRem = (size) => `${size / 16}rem`;

const fontSize = {
  xsmall: calcRem(14),
  small: calcRem(16),
  base: calcRem(18),
  large: calcRem(20),
  xlarge: calcRem(22),
  xxlarge: calcRem(24),
  subtitle: calcRem(30),
  title: calcRem(58),
  clock: calcRem(110),
};

const space = {
  xsmall: calcRem(8),
  small: calcRem(10),
  base: calcRem(12),
  large: calcRem(16),
  xlarge: calcRem(18),
  xxlarge: calcRem(20),
};

const color = {
  white: "#FFFFFF",
};

const etc = {
  clockHeight: calcRem(120),
  mainInputWidth: calcRem(500),
};

const theme = { fontSize, space, color, etc };

export default theme;
