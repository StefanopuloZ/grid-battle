import { keyframes } from 'styled-components';

const moveAnimationBuilder = (path, type) => {
  console.log('path', path);

  const animationString = `  0% {
    top: 0%;
    left: 0%;
  }
  
  33% {
    top: 100%;
    left: 0%;
  }
  
  66% {
    top: 100%;
    left: 100%;
  }
  
  100% {
    top: 100%;
    left: 200%;
  }`;


  return keyframes`
    ${animationString}
  `;
};

export const Animations = {
  moveAnimationBuilder
};
