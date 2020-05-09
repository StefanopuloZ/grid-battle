import styled from 'styled-components';
import { colors, boxShadow, borderRadius, media } from '../../theme';

export const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
  margin: auto;
  box-shadow: ${boxShadow.standard};
  border-radius: ${borderRadius.standard};
  background-color: ${props =>
    props.empty ? colors.glassTransparent : 'transparent'};
  padding-top: ${props => (props.empty ? '66.66%' : '0')};
  overflow: hidden;

  @media ${media.medium} {
    max-width: 100%;
    width: 66.66%;
  }
`;

export const StyledGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media ${media.medium} {
    flex-direction: row;
  }
`;
