import { keyframes } from 'styled-components';

const oppositeDirections = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
};

const moveAnimationBuilder = (path, timeUnit, target) => {
  const isAttacked = target.attackResult;
  const attackTime = 3;

  let animationString = ` 0% {
      top: 0%;
      left: 0%;
    }
  `;

  const timePercentage = isAttacked
    ? 100 / (path.length + attackTime)
    : 100 / path.length;

  let top = 0,
    left = 0;
  let percentage;

  path.forEach((cell, index) => {
    percentage =
      path.length - 1 === index && !isAttacked ? 100 : timePercentage * index;

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

  if (isAttacked) {
    const attackDirection = path[path.length - 1].adjecent.find(
      cell => cell.index === target.defender.index
    ).direction;
    const oppositeDirecetion = oppositeDirections[attackDirection];
    const topStarting = top;
    const leftStarting = left;

    percentage = percentage + timePercentage * 2;

    if (oppositeDirecetion === 'up') {
      top -= 50;
    } else if (oppositeDirecetion === 'down') {
      top += 50;
    } else if (oppositeDirecetion === 'left') {
      left -= 50;
    } else if (oppositeDirecetion === 'right') {
      left += 50;
    }

    animationString += `
      ${percentage}% {
        top: ${top}%;
        left: ${left}%;
      }`;

    percentage = percentage + timePercentage / 4;

    animationString += `
      ${percentage}% {
        top: ${top}%;
        left: ${left}%;
      }`;

    percentage = percentage + timePercentage / 3;

    if (attackDirection === 'up') {
      top -= 90;
    } else if (attackDirection === 'down') {
      top += 90;
    } else if (attackDirection === 'left') {
      left -= 90;
    } else if (attackDirection === 'right') {
      left += 90;
    }

    animationString += `
    ${percentage}% {
      top: ${top}%;
      left: ${left}%;
    }`;

    animationString += `
      100% {
        top: ${topStarting}%;
        left: ${leftStarting}%;
      }
    `;
  }

  const animation = keyframes`
  ${animationString}
`;
  const time = isAttacked
    ? timeUnit * (path.length + attackTime)
    : timeUnit * (path.length - 1);

  return { animation, time };
};

const selected = keyframes`
  0% {
    transform: rotate(0deg);
  }

  33.2% {
    transform: rotate(-16deg);
  }

  83.18% {
    transform: rotate(8deg);
  }

  100% {
    transform: rotate(0deg);
  }
  
`;

export const Animations = {
  moveAnimationBuilder,
  selected,
};
