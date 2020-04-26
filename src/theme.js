export const colors = {
  black: '#252525',
  white: '#fff',
  whiteTransparent: 'rgba(255, 255, 255, 0.8)',
  blue: '#007ce0',
  navy: '#004175',
  gray: '#5c5c5c50',
  greenTransparent: 'rgba(0, 155, 26, 0.6)',
  glassTransparent: 'rgba(190,255,247, 0.6)',
  glass: 'rgba(190,255,247, 0.8)',
  redTransparent: 'rgba(255, 0, 0, 0.6)',
};

export const boxShadow = {
  standard: '2px 1px 5px 2px rgba(0, 0, 0, 0.4)',
  large: '5px 0px 10px 5px rgba(0, 0, 0, 0.8)',
  standardInset: 'inset 1px 1px 5px -2px rgba(0, 0, 0, 0.8)',
};

export const borderRadius = {
  standard: '6px',
  large: '20px',
};

const breakpoints = ['425px'];

breakpoints.sm = breakpoints[0];

export const media = {
  small: `(min-width: ${breakpoints[0]})`,
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
