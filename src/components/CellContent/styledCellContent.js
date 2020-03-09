import styled from 'styled-components';
import warrior from './assets/warrior.jpg';
import tree from './assets/tree.png';
import goblin from './assets/goblin.jpg';

const background = { warrior, tree, goblin };

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
  border: ${props => (props.selected ? '2px dashed black' : '2px dashed transparent')};

  p {
    background-color: rgba(0, 0, 0, 0.1);
    color: white;
  }

  animation: ${props => props.animation && props.animation.animation}
    ${props => props.animation && props.animation.time}ms linear forwards;
`;
