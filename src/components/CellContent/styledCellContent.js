import styled from 'styled-components';
import warrior from './assets/warrior.png';
import tree from './assets/tree.png';
import goblin from './assets/goblin_regular.png';
import attack from './assets/attack-inf.gif';
import { colors, boxShadow } from '../../theme';

const background = { warrior, tree, goblin };
const playerBorders = {
  human: colors.greenTransparent,
  ai: colors.redTransparent,
};

export const StyledCellContentWrapper = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;
  animation: ${props => props.animation && props.animation.animation}
    ${props => props.animation && props.animation.time}ms linear forwards;
`;

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
  box-shadow: ${props => (props.player ? boxShadow.standard : '')};
  transform: ${props => (props.player ? 'scale(0.9)' : '')};

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props =>
      props.attack ? `url(${attack}) center center/cover` : ''};
    border-radius: 50%;
    border: ${props =>
      props.selected ? '2px dashed black' : '2px dashed transparent'};
  }
`;

export const StyledIndicator = styled.div`
  width: 90%;
  height: 90%;
  left: 5%;
  top: 5%;
  position: absolute;
  border-radius: 50%;
  background-color: ${props =>
    props.player ? playerBorders[props.player] : ''};
`;
