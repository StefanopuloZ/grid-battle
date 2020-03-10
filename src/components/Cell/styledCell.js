import styled from 'styled-components';
import grass from './assets/grass.jpg';

const background = { grass };

export const StyledCell = styled.div`
  display: flex;
  position: relative;
  background: url(${props => background[props.image]}) center center/cover
    no-repeat;
  flex-basis: ${props => props.basis};
  padding-top: ${props => props.basis};
  cursor: ${props => props.fill === 'brown' ? 'not-allowed' : 'pointer'};
`;
export const StyledCellContent = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: all .3s ease; 
  background: ${props => props.path ? 'rgba(255, 192, 203, 0.3)' : 'transparent'};
  &:hover {
    background: rgba(0, 0, 0, 0.178);
  }
`;
