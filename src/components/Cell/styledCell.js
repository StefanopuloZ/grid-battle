import styled from 'styled-components';
import { colors, boxShadow } from '../../theme';

export const StyledCell = styled.div`
  display: flex;
  position: relative;
  background: ${colors.glassTransparent};
  flex-basis: ${props => props.basis};
  padding-top: ${props => props.basis};
  cursor: ${props => props.fill === 'brown' ? 'not-allowed' : 'pointer'};
  box-shadow: ${boxShadow.standardInset};
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
  transition: all 400ms ease; 
  background: ${props => props.path ? 'rgba(255, 192, 203, 0.3)' : 'transparent'};
  &:hover {
    box-shadow: ${boxShadow.largeInset};
  }
`;
