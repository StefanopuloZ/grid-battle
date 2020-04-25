import styled from 'styled-components';
import { colors, boxShadow, borderRadius } from '../../theme';

export const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 66.66%;
  box-shadow: ${boxShadow.standard};
  border-radius: ${borderRadius.standard};
  background-color: ${colors.whiteTransparent};
  padding-top: ${props => props.empty ? '66.66%' : '0'};
`;

export const StyledGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
