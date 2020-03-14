import { keyframes } from 'styled-components';

const moveAnimationBuilder = (path, type, timeUnit) => {
  let animationString = ` 0% {
      top: 0%;
      left: 0%;
    }
  `;

  let timePercentage = 100 / path.length;

  let top = 0,
    left = 0;

  path.forEach((cell, index) => {
    const percentage =
      path.length - 1 === index ? 100 : timePercentage * (index);

    if (cell.direction === 'up') {
      top -= 100;
    } else if (cell.direction === 'down') {
      top += 100;
    } else if (cell.direction === 'left') {
      left -= 100;
    } else if (cell.direction === 'right') {
      left += 100;
    }

    if (index !== 0) {
      animationString += `
      ${percentage}% {
        top: ${top}%;
        left: ${left}%;
      }`;
    }
  });

  const animation = keyframes`
  ${animationString}
`;
  const time = timeUnit * (path.length - 1);

  return { animation, time };
};

export const Animations = {
  moveAnimationBuilder,
};
