const calcRem = (size) => `${size / 16}rem`;

const fontSize = {
  xxsmall: calcRem(12),
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
  xxxsmall: calcRem(4),
  xxsmall: calcRem(6),
  xsmall: calcRem(8),
  small: calcRem(10),
  base: calcRem(12),
  large: calcRem(16),
  xlarge: calcRem(18),
  xxlarge: calcRem(20),
  xxxlarge: calcRem(22),
  xxxxlarge: calcRem(24),
};

const color = {
  white: "#FFFFFF",
};

const etc = {
  clockHeight: calcRem(120),
  focusWidth: calcRem(500),
};

const theme = { fontSize, space, color, etc };

export default theme;
