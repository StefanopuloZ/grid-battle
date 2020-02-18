import { keyframes } from 'styled-components';

const moveAnimationBuilder = () => {
  
}

const animation = `  0% {
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
}`

const moveAnimation = keyframes`
  ${animation}
`;

export const Animations = {
  moveAnimation,
};
