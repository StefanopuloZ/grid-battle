import styled from 'styled-components';
import grass from './assets/grass.jpg';

const background = { grass };

export const StyledCell = styled.div`
  display: flex;
  position: relative;
  border: 1px solid gray;
  background: url(${props => background[props.image]}) center center/cover
    no-repeat;
  flex-basis: ${props => props.basis};
  padding-top: ${props => props.basis};
  cursor: ${props => props.fill === 'brown' ? 'not-allowed' : 'pointer'};

  &:hover {
    border: 1px solid red;
  }
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
  border: ${props => props.selected ? '2px dashed black' : 'none'};
  background: ${props => props.path ? 'pink' : 'transparent'};
`;
