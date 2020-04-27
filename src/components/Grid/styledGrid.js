import styled from 'styled-components';
import { colors, boxShadow, borderRadius } from '../../theme';

export const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 66.66%;
  box-shadow: ${boxShadow.standard};
  border-radius: ${borderRadius.standard};
  background-color: ${props => props.empty ? colors.glassTransparent : 'transparent'};
  padding-top: ${props => props.empty ? '66.66%' : '0'};
  overflow: hidden;
`;

export const StyledGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
