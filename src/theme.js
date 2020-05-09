export const colors = {
  black: '#252525',
  white: '#fff',
  whiteTransparent: 'rgba(255, 255, 255, 0.8)',
  blue: '#007ce0',
  navy: '#004175',
  gray: '#5c5c5c50',
  greenTransparent: '#5ea56a',
  glassTransparent: 'rgba(190,255,247, 0.6)',
  glass: 'rgba(190,255,247, 0.8)',
  redMain: '#df4646',
  redTransparent: 'rgba(255, 0, 0, 0.418)',
};

export const boxShadow = {
  standard: '2px 1px 5px 2px rgba(0, 0, 0, 0.4)',
  large: '5px 0px 10px 5px rgba(0, 0, 0, 0.8)',
  standardInset: 'inset 1px 1px 5px -2px rgba(0, 0, 0, 0.8)',
  largeInset: 'inset 1px 1px 20px -4px rgba(0, 0, 0, 0.8)',
  standarInsetWithColor: color => `inset 1px 1px 20px -4px ${color}`,
};

export const borderRadius = {
  standard: '6px',
  large: '20px',
};

const breakpoints = ['425px', '900px'];

breakpoints.sm = breakpoints[0];

export const media = {
  small: `(min-width: ${breakpoints[0]})`,
  medium: `(min-width: ${breakpoints[1]})`,
};

export const fonts = {
  regular: 'Lora',
  bold: 'Lora-Bold',
};

export default {
  colors,
  breakpoints,
  boxShadow,
};
