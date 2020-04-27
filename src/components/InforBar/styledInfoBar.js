import styled from 'styled-components';
import warrior from '../CellContent/assets/warrior.png';
import goblin from '../CellContent/assets/goblin_regular.png';

const background = { warrior, goblin };
const playerBorders = { human: '2px solid gold', ai: '2px solid red' };

export const StyledInfoBar = styled.div`
  display: flex;
  border: 1px solid darkgray;
  width: 100%;
  align-items: center;
  min-height: 50px;
`;

export const StyledPortrait = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100px;
  margin-left: 5px;
  border-radius: 50%;
  background: url(${props => background[props.image]}) center center/cover
    no-repeat;
  border: ${props => (props.player ? playerBorders[props.player] : '')};

  p {
    margin-top: auto;
    color: rgba(230, 230, 230);
    font-size: 14px;
  }
`;
