export const colors = {
    black: '#252525',
    white: '#fff',
    whiteTransparent: 'rgba(255, 255, 255, 0.8)',
    blue: '#007ce0',
    navy: '#004175'
};

export const boxShadow = {
    standard: '2px 1px 5px 2px rgba(0, 0, 0, 0.4)',
    large: '5px 0px 10px 5px rgba(0, 0, 0, 0.8)',
    standardInset: 'inset 1px 1px 5px -2px rgba(0, 0, 0, 0.8)',
}

export const borderRadius = {
    standard: '6px',
}

const breakpoints = ['540px'];

breakpoints.sm = breakpoints[0];

export default {
    colors,
    breakpoints,
    boxShadow,
};
