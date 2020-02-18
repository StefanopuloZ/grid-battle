import styled from 'styled-components';
import warrior from './assets/warrior.jpg';
import tree from './assets/tree.png';

const background = { warrior, tree };

export const StyledCellContent = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${props => background[props.image]}) center center/cover
    no-repeat;

  p {
    background-color: rgba(0, 0, 0, 0.1);
    color: white;
  }

  animation: ${props => props.animation && props.animation} 2s linear;
`;
