import styled from 'styled-components';

export const StyledCell = styled.div`
  display: flex;
  position: relative;
  border: 1px solid gray;
  background-color: ${props => props.fill};
  flex-basis: ${props => props.basis};
  padding-top: ${props => props.basis};
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

  &:hover {
    cursor: pointer;
    border: 2px solid red;
  }
`;
